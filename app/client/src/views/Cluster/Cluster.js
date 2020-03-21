import React from 'react';
import { useParams } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CareerCard from "../../components/CareerCard/CareerCard";

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
}));

const careers = [
    { 
        id: 1, 
        name: "Test Pilot", 
    },
    { 
        id: 2, 
        name: "Payload Commander (PLC)", 
    },
    { 
        id: 3, 
        name: "Mission Specialist (MS)", 
    },
    { 
        id: 4, 
        name: "Flight Engineer", 
    },
    { 
        id: 5, 
        name: "Commander", 
    },
    { 
        id: 6, 
        name: "Payload Specialist", 
    },
    { 
        id: 7, 
        name: "Science Officer", 
    },
];

function Cluster() {
    const classes = useStyles();

    let { cluster } = useParams()

    return (
        <div className={classes.root}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                  Cluster {cluster}
            </Typography>

            {careers.map( ({ id, name }, key) => {
                return <CareerCard key={key} id={id} name={name}/>
            })}
        </div>
    );
}

export default Cluster;