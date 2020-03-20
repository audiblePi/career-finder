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

function Cluster() {
    const classes = useStyles();

    let { cluster } = useParams()

    return (
        <div className={classes.root}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                  Cluster {cluster}
            </Typography>
            
            <CareerCard/>
            <CareerCard/>
            <CareerCard/>
        </div>
    );
}

export default Cluster;