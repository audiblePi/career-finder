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
    return msgs;
}

const App = (props) => {
    const [user_id, setUserId] = useState(localStorage.getItem('user_id') || '');
    const [role, setRole] = useState(localStorage.getItem('role') || '');
    const [clusters, setClusters] = useState([]);
    const [chatMessages, setChatMessages] = useState(getMessages);
    const [careerIds, setCareerIds] = useState([]);
    const [currentCareer, setCurrentCareer] = useState('');




    /********************
    * LogIn
    ********************/
    const logIn = (user) => {   
        let _user_id = (user === null) ? '' : user._id
        let _role = (user === null) ? '' : user.role

        setUserId(_user_id)
        setRole(_role)

        localStorage.setItem('user_id', _user_id);
        localStorage.setItem('role', _role);
    };

    const logOut = () => {  
        setUserId('')
        setRole('')

        localStorage.setItem('user_id', '');
        localStorage.setItem('role', '');
    };





    /********************
    * Clusters
    ********************/
    const createCluster = async (cluster) => {
        console.log(cluster)
        const res = await axios.post('/_cluster', {
            name: cluster.name,
            image: cluster.image,
            keywords: [],
            careers: [],
        });
        console.log(res)
        if (res.data.result === "successfully-added") {
            readClusters()
        } 
    }

    const readClusters = async () => {
        const res = await axios.get('/_cluster');
        console.log(res)
        if (res.data.length > 0) {            
            res.data.sort((a, b) => (a.name > b.name) ? 1 : -1)
            setClusters(res.data)
            getClusterCareers()
        } 
    }

    const updateCluster = async (cluster) => {
        const res = await axios.put('/_cluster/' + cluster._id, {
            name: cluster.name,
            image: cluster.image,
            //keywords: [],
            //careers: [],
        });
        console.log(res)
        if (res.data.result === "update-success") {
            readClusters()
        } 
    }

    const deleteCluster = async (e, id) => {            
        const res = await axios.delete('/_cluster/' + id)
        console.log(res)
        if (res.data.result === "delete-success") {
            readClusters()
        } 
    }





    /********************
    * Cluster 
    ********************/
    const getClusterCareers = () => {
        //console.log("getClusterCareers", clusters)
    }

    const updateCareerIds = (ids) => {
        setCareerIds(ids)
    }





    /********************
    * Chat CRUD
    ********************/
    const addMessage = (e, message) => {
        e.preventDefault()
    
        let id = chatMessages.length + 1

        let m = { id: id, type: "response", message: message }

        let r = { id: id + 1, type: "chatbot", message: "Roger. " + message }

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

                onLogin={logIn}
                onLogOut={logOut}

                role={role}

                chatMessages={chatMessages}
                onAddMessage={addMessage}

                careerIds={careerIds}
                onUpdateCareerIds={updateCareerIds}    

                currentCareer={currentCareer}
                setCurrentCareer={setCurrentCareer}
                />
        )
    }

    const loginComponent = () => {
        return (
            <Login onLogin={logIn}/>
        )
    }

    return (    
        <div>
            {user_id !== '' ? mainComponent() : loginComponent()}
        </div>
    );
}

export default App;