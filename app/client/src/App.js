import React, { useState, useReducer } from 'react';
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

//mockData
import clusters from './data/testData';

const useStyles = makeStyles(theme => ({
  root: {},
  container: {},
}));

const Main = (props) => {
  const classes = useStyles();
  
  return (
    <div>
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








// const initialState = {
//   user: '',
//   role: '',
//   loggedIn: 'false',
//   clusters: [],
// }

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return {count: state.count + 1};
//     case 'decrement':
//       return {count: state.count - 1};
//     default:
//       throw new Error();
//   }
// }

//HOC
const getClusters = () => {
  return clusters
}

const App = (props) => {
  const classes = useStyles();

  // const [state, dispatch] = useReducer(reducer, initialState);
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem('loggedIn') || 'false'
  );
  const [user, setUser] = useState('');
  const [role, setRole] = useState('admin');
  const [clusters, setClusters] = useState(getClusters());

  const updateLoggedIn = (status, role) => {       
    localStorage.setItem('loggedIn', status);
    setLoggedIn(status)
    setRole(role)
  };

  const deleteCluster = (e, id) => {
    e.preventDefault()
    let result = clusters.filter( (data, index, arr) => {
      return data.id != id
    })
    setClusters(result)
    //updateDB
  }

  const mainComponent = () => {
    return (
      <Main 
        clusters={clusters} 
        onDeleteCluster={deleteCluster} 
        role={role}/>
    )
  }

  const loginComponent = () => {
    return (
      <Login onLogin={updateLoggedIn}/>
    )
  }

  return (    
    <div className={classes.root}>
      {loggedIn === 'true' ? mainComponent() : loginComponent()}
    </div>
  );
}

export default App;