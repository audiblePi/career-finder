import React, { useState, useEffect } from 'react';

import Login from "./views/Login/Login";
import Main from "./views/Main";

import axios from 'axios';

const msgs = [
  { 
    id: 1,
    type: "chatbot",
    message: "Hello, Apollo 11. Houston. We're standing by.",
  }
];

const getMessages = () => {
  return msgs
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

const App = (props) => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('loggedIn') || 'false');
  const [user, setUser] = useState(localStorage.getItem('user') || '');
  const [role, setRole] = useState(localStorage.getItem('role') || '');
  const [clusters, setClusters] = useState([]);
  const [chatMessages, setChatMessages] = useState(getMessages);

  const updateLoggedIn = (status, user) => {    
    setLoggedIn(status)
    localStorage.setItem('loggedIn', status);

    let user_id = (user === undefined) ? '' : user.name
    setUser(user)
    localStorage.setItem('user_id', user_id);

    let role = (user === undefined) ? '' : user.role
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
      console.log(res.data)
      console.log("created cluster", cluster.name, "from db")
      readClusters()
    } 
    else {
      console.log("create clusters error")
    }
  }

  const readClusters = async () => {
    const res = await axios.get('/cluster');

    if (res.data.length > 0) {
      console.log(res.data)
      setClusters(res.data)
    } 
    else {
      console.log("read clusters error")
    }
  }

  const updateCluster = async (cluster) => {
    const res = await axios.put('/cluster/' + cluster._id, {
      name: cluster.name,
      image: cluster.image,
      //keywords: [],
      //careers: [],
    });

    if (res.data.result === "update-success") {
      console.log(res.data)
      console.log("updated cluster", cluster.name)
      readClusters()
    } 
    else {
      console.log("update clusters error")
    }
  }

  const deleteCluster = async (e, id) => {
    //e.preventDefault()
        
    const res = await axios.delete('/cluster/' + id)

    if (res.data.result === "delete-success") {
      console.log(res.data)
      console.log("deleted cluster", id, "from db")
      readClusters()
    } 
    else {
      console.log("delete error")
    }
  }

  /*
   * Chat CRUD
   */
  const addMessage = (e, message) => {
    e.preventDefault()
  
    let id = chatMessages.length + 1

    let m = {
      id: id,
      type: "response", 
      message: message
    }

    let r = {
      id: id + 1,
      type: "chatbot", 
      message: "Roger. " + message
    }

    setChatMessages([...chatMessages, m, r])
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
        role={role}
        chatMessages={chatMessages}
        onAddMessage={addMessage}/>
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