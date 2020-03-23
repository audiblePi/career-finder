import React from 'react';
import Clusters from "../../components/Clusters/Clusters";

function Home(props) {
    return (
        <div className="App">
            <Clusters {...props}/>
        </div>
    );
}

export default Home;