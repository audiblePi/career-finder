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

  const [loggedIn, setLoggedIn] = useState(true);

  const updateLoggedIn = (status) => {        
      setLoggedIn(status)
  };

  console.log( "Logged In Status: ", loggedIn);

  return (    
    <div className={classes.root}>
      <CssBaseline />
      { loggedIn ? <NavBar/> : '' }
      <Container maxWidth="lg" className={classes.container}>
        <Breadcrumbs/>
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact 
            path="/Login" 
            render={(props) => <Login {...props} onLogin={updateLoggedIn} />} />
          <Route exact path="/Career" component={Career} />
          <Route exact path="/Career/DITL" component={DITL} />
          <Route exact path="/Career/Celebrity" component={Celebrity} />
          <Route exact path="/">
            <Redirect to="/Login" />
          </Route>
          <Route component={NotFound}/>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
