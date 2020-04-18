import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import EditIcon from '@material-ui/icons/Edit';
import Grid from '@material-ui/core/Grid';

import CareerCard from "../../components/CareerCard/CareerCard";
import EditModal from '../../components/EditModal/EditModal';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    editWrapper: {
        display: 'flex',
        paddingBottom: 20,
        justifyContent: 'flex-end',
    },
}));

function Cluster(props) {
    const classes = useStyles();

    let { cluster } = useParams()

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const editClusterCareers = () => {
        return (
            <div className={classes.editWrapper}>
                <Button 
                    className={classes.editButton} 
                    startIcon={<EditIcon />}
                    variant="outlined"
                    color="primary"
                    size="large"
                    onClick={handleOpen}>
                    Edit Cluster Careers
                </Button>
            </div>
        )
    }

    const backButton = () => {
        return (
            <Button 
                color="primary"
                startIcon={<ArrowBackIcon />}
                size="large"
                href="/"
                >
                Back
            </Button>
        )
    }

    const getCareers = () => {
        props.readCareers(cluster)
    }

    const getClusterName = () => {
        props.readCluster(cluster)    
    }

    useEffect(() => {
        getCareers()
        getClusterName()
    }, []);
    
    return (

        <div>

            <Grid container spacing={3}>
                <Grid item xs={6}>
                    {backButton()}
                </Grid>
                <Grid item xs={6}>
                    { props.role === 'admin' ? editClusterCareers() : ''}
                </Grid>
            </Grid>

            <div className={classes.root}>
                <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    {(props.cluster.name === undefined) ? 'Careers: ' : 'Careers: ' + props.cluster.name}
                </Typography>

                <Grid container spacing={3}>
                    {props.careers.map( (career, key) => {                    
                        if (career.cluster === cluster)
                            return <Grid key={key} item xs={12}><CareerCard career={career}/></Grid>

                        return ""
                    })}
                </Grid>

                <EditModal 
                    open={open} 
                    handleClose={onClose} 
                    data={props.careers}
                    onCreate={props.createCareer}
                    onUpdate={props.updateCareer}
                    onDelete={props.deleteCareer}
                    ignoreKeys={["celebrity", "description", "ditl", "ditlImage"]}/>
            </div>
        </div>
    );
}

export default Cluster;