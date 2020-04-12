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

const App = (props) => {
    const [user_id, setUserId] = useState(localStorage.getItem('user_id') || '');
    const [role, setRole] = useState(localStorage.getItem('role') || '');
    const [cluster, setCluster] = useState({});//should be cluster not clustername
    const [clusters, setClusters] = useState([]);
    const [chatMessages, setChatMessages] = useState(getMessages);
    const [career, setCareer] = useState("");
    const [careers, setCareers] = useState([]);





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
        } 
    }

    const readCluster = async (cluster) => {
        const res = await axios.get('/_cluster/' + cluster);
        console.log(res)
        if (res.data.name !== undefined){
            setCluster(res.data)
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
    * Cluster Careers
    ********************/
    const createCareer = async (career) => {
        let defaultCareer = {
            description: "",
            ditl: "",
            celebrity: {
                name: "",
                photo: "",
                article: "",
            },
        }        
        const res = await axios.post('/_career', {
            name: career.name,
            shortDescription: career.shortDescription,
            cluster: career.cluster,
            salary: career.salary,
            ...defaultCareer 
        });
        console.log(res)
        if (res.data.result === "successfully-added") {
            readCareers(res.data.career.cluster)
        } 
    }

    const readCareers = async (cluster) => {
        const res = await axios.get('/_career');
        console.log(res)
        if (res.data.length > 0) { 
            let result = res.data.filter( (data, index, arr) => {
                return data.cluster === cluster
            })     
            setCareers(result)
        } 
    }

    const readCareer = async (id) => {
        const res = await axios.get('/_career/' + id);
        console.log(res)
        if (res.data.result !== "error"){
            setCareer(res.data)
        }
    }

    const updateCareer = async (career) => {
        const res = await axios.put('/_career/' + career._id, career);
        console.log(res)
        if (res.data.result === "update-success") {
            //filter on current cluster that this career belongs to
            readCareers(career.cluster) 
        } 
    }

    const deleteCareer = async (e, id) => {
        const res = await axios.delete('/_career/' + id)
        console.log(res)
        if (res.data.result === "delete-success") {
            readCareers(res.data.career.cluster)
        } 
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
        //readClusters();
    }, []);

    const mainComponent = () => {
        return (
            <Main 
                cluster={cluster} 
                clusters={clusters} 
                createCluster={createCluster}
                readCluster={readCluster}
                readClusters={readClusters}
                updateCluster={updateCluster}
                deleteCluster={deleteCluster} 

                onLogin={logIn}
                onLogOut={logOut}

                role={role}

                chatMessages={chatMessages}
                onAddMessage={addMessage}

                career={career}
                careers={careers}
                createCareer={createCareer}
                readCareer={readCareer}
                readCareers={readCareers}
                updateCareer={updateCareer}
                deleteCareer={deleteCareer}
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