import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CareerCard from "../../components/CareerCard/CareerCard";

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
}));

function Cluster(props) {
    const classes = useStyles();

    let { cluster } = useParams()

    const [clusterName, setClusterName] = React.useState("");

    const getCareers = (clusters, setClusterName, setCareerIds, cluster) => {
        let result = clusters.filter( (data, index, arr) => {
            return data._id === cluster;
        })
    
        if (result.length > 0){
            setCareerIds(result[0].careers);
            setClusterName(result[0].name);
        }
    }
    
    useEffect(() => {
        getCareers(props.clusters, setClusterName, props.onUpdateCareerIds, cluster)
    }, [props.clusters, setClusterName, props.onUpdateCareerIds, cluster]);

    return (
        <div className={classes.root}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                { clusterName === "" ? "" : 'Careers: ' + clusterName }
            </Typography>

            {props.careerIds.map( (id, key) => {
                return <CareerCard key={key} id={id}/>
            })}
        </div>
    );
}

export default Cluster;