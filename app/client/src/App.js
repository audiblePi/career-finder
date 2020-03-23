import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import NavBar from "./components/Nav/NavBar";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import Chat from "./components/Chat/Chat";

import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import Cluster from "./views/Cluster/Cluster";
import Career from "./views/Career/Career";
import DITL from "./views/DITL/DITL";
import Celebrity from "./views/Celebrity/Celebrity";
import ManageUsers from "./views/ManageUsers/ManageUsers";
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
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/" render={(routeProps) => <Home {...routeProps} {...props}/>}  />
          <Route exact path="/Cluster/:cluster" component={Cluster} />
          <Route exact path="/Cluster/:cluster/Career/:id" component={Career} />
          <Route exact path="/Cluster/:cluster/Career/:id/DITL" component={DITL} />
          <Route exact path="/Cluster/:cluster/Career/:id/Celebrity/:id" component={Celebrity} />
          <Route exact path="/ManageUsers" component={ManageUsers}/>
          <Route component={NotFound}/>
        </Switch>
      </Container>
      <Chat/>
    </div>
  )
}

const App = (props) => {
  const classes = useStyles();

  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem('loggedIn') || 'false'
  );

  const [role, setRole] = useState('student');

  const updateLoggedIn = (status, role) => {   
    console.log('updateLoggedIn')
    
    localStorage.setItem('loggedIn', status);

    setLoggedIn(status)
    setRole(role)
  };

  return (    
    <div className={classes.root}>
      {loggedIn === 'true' ? <Main role={role} onLogin={updateLoggedIn}/> : <Login role={role} onLogin={updateLoggedIn}/>}
    </div>
  );
}

export default App;