import React, {useState} from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import Career from "./views/Career/Career";
import DITL from "./views/DITL/DITL";
import Celebrity from "./views/Celebrity/Celebrity";
import NotFound from "./views/NotFound";
import NavBar from "./components/Nav/NavBar";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";

const useStyles = makeStyles(theme => ({
  root: {
    //display: 'flex',
  },
  
  container: {
    // paddingTop: theme.spacing(4),
    // paddingBottom: theme.spacing(4),
  },
}));

const App = (props) => {
  const classes = useStyles();

  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem('loggedIn') || ''
  );

  const updateLoggedIn = (status) => {        
      setLoggedIn(status)
  };


  const checkStatus = () => {
    let status = localStorage.getItem('loggedIn');

    //if (status == 1) {
    //updateLoggedIn(true);
    //}

    console.log( "Logged In State: ", loggedIn);
    console.log( "LocalStorage: ", status);
  }

  React.useEffect(() => checkStatus(), [])

  //checkStatus();

  return (    
    <div className={classes.root}>
      <CssBaseline />
      { loggedIn ? <NavBar/> : '' }
      <Container maxWidth="lg" className={classes.container}>
        { loggedIn ? <Breadcrumbs/> : '' }
        <Switch>
          <Route exact path="/">
            {loggedIn ? <Redirect to="/Home" /> : <Redirect to="/Login" />}
          </Route>

          <Route exact path="/Home" component={Home} />

          <Route exact path="/Login">
            {loggedIn ? <Redirect to="/Home" /> : <Redirect to="/Login" />}
          </Route>

          {/*<Route exact 
            path="/Login" 
          render={(props) => <Login {...props} onLogin={updateLoggedIn} />} />*/}

          <Route exact path="/Career" component={Career} />

          <Route exact path="/Career/DITL" component={DITL} />

          <Route exact path="/Career/Celebrity" component={Celebrity} />
          
          <Route component={NotFound}/>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
