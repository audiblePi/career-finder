import React, { useState, useEffect } from 'react';

import Login from "./views/Login/Login";
import Main from "./views/Main";

import axios from 'axios';

//mockData
//import clustersD from './data/testData';

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

const App = (props) => {

  // const [state, dispatch] = useReducer(reducer, initialState);
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('loggedIn') || 'false');
  const [user, setUser] = useState(localStorage.getItem('user') || '');
  const [role, setRole] = useState(localStorage.getItem('role') || '');
  const [clusters, setClusters] = useState([]);

  const updateLoggedIn = (status, user, un, role) => {           
    setLoggedIn(status)
    localStorage.setItem('loggedIn', status);

    setUser(user)
    localStorage.setItem('user', un);

    setRole(role)
    localStorage.setItem('role', role);
  };

  /*
   * Career Cluster CRUD
   */
  const createCluster = async (cluster) => {
    const res = await axios.post('/cluster', {
      name: cluster.name,
      image: cluster.image,
      keywords: [],
      careers: [],
    });
    if (res.data.result === "successfully-added") {
      console.log("created cluster", cluster.name, "from db")
      readClusters()
    } 
    else {
      console.log("create clusters error")
    }
  }

  const readClusters = async () => {
    const res = await axios('/returnCluster',);
    if (res.data.length > 0) {
      setClusters(res.data)
    } 
    else {
      console.log("read clusters error")
    }
  }

  const updateCluster = async (cluster) => {
    const res = await axios.put('/cluster',{
      name: cluster.name,
      image: cluster.image,
      //keywords: [],
      //careers: [],
    });
    if (res.data.result === "update-success") {
      console.log("updated cluster", cluster.name)
      readClusters()
    } 
    else {
      console.log("update clusters error")
    }
  }

  const deleteCluster = async (e, name) => {
    const res = await axios.delete('/cluster', {data: {name: name}})
    if (res.data.result === "delete-success") {
      console.log("deleted cluster", name, "from db")
      readClusters()
    } 
    else {
      console.log("delete error")
    }
  }

  useEffect(() => {
    readClusters();
  }, []);

  const mainComponent = () => {
    return (
      <Main 
        clusters={clusters} 
        onCreateCluster={createCluster}
        onUpdateCluster={updateCluster}
        onDeleteCluster={deleteCluster} 
        onLogin={updateLoggedIn}
        role={role}/>
    )
  }

  const loginComponent = () => {
    return (
      <Login onLogin={updateLoggedIn}/>
    )
  }

  return (    
    <div>
      {loggedIn === 'true' ? mainComponent() : loginComponent()}
    </div>
  );
}

export default App;