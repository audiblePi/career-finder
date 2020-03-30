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
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem('loggedIn') || 'false'
  );
  //const [user, setUser] = useState('');
  const [role, setRole] = useState('admin');
  const [clusters, setClusters] = useState([]);

  const updateLoggedIn = (status, role) => {       
    localStorage.setItem('loggedIn', status);
    setLoggedIn(status)
    setRole(role)
  };

  const readClusters = async () => {
    const res = await axios('/returnCluster',);
    if (res.data.length > 0) {
      //console.log(res.data)
      setClusters(res.data)
    } 
    else {
      console.log("error")
    }
  }

  const deleteCluster = async (e, name) => {
    //e.preventDefault()
    
    // let result = clusters.filter( (data, index, arr) => {
    //   return data.id !== id
    // })
    // setClusters(result)

    const res = await axios.delete('/cluster', {data: {name: name}})
    if (res.data.result == "delete-success") {
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