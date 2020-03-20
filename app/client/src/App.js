import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import NavBar from "./components/Nav/NavBar";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";

import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import Cluster from "./views/Cluster/Cluster";
import Career from "./views/Career/Career";
import DITL from "./views/DITL/DITL";
import Celebrity from "./views/Celebrity/Celebrity";
import NotFound from "./views/NotFound";

const useStyles = makeStyles(theme => ({
  root: {},
  container: {},
}));

const Main = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar onLogin={props.onLogin} />
      <Container maxWidth="lg" className={classes.container}>      
        <Breadcrumbs/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Cluster/:cluster" component={Cluster} />
          <Route exact path="/Cluster/:cluster/Career/:id" component={Career} />
          <Route exact path="/Cluster/:cluster/Career/:id/DITL" component={DITL} />
          <Route exact path="/Cluster/:cluster/Career/:id/Celebrity/:id"component={Celebrity} />
          <Route component={NotFound}/>
        </Switch>
      </Container>
    </div>
  )
}

const App = (props) => {
  const classes = useStyles();

  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem('loggedIn') || 'false'
  );

  const updateLoggedIn = (status) => {   
      localStorage.setItem('loggedIn', status);
      setLoggedIn(status)
  };

  return (    
    <div className={classes.root}>
      {loggedIn === 'true' ? <Main onLogin={updateLoggedIn}/> : <Login onLogin={updateLoggedIn}/>}
    </div>
  );
}

export default App;
