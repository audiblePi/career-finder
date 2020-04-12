import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import CareerCard from "../../components/CareerCard/CareerCard";
import EditModal from '../../components/EditModal/EditModal';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    editWrapper: {
        display: 'flex',
        padding: 20,
        justifyContent: 'center',
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
                <Button className={classes.editButton} color="inherit" onClick={handleOpen}>
                    Edit Cluster Careers
                </Button>
            </div>
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

            { props.role === 'admin' ? editClusterCareers() : ''}

            <div className={classes.root}>
                <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    {(props.cluster.name === undefined) ? 'Careers: ' : 'Careers: ' + props.cluster.name}
                </Typography>

                {props.careers.map( (career, key) => {                    
                    if (career.cluster === cluster)
                        return <CareerCard key={key} career={career}/>

                    return ""
                })}

                <EditModal 
                    open={open} 
                    handleClose={onClose} 
                    data={props.careers}
                    onCreate={props.createCareer}
                    onUpdate={props.updateCareer}
                    onDelete={props.deleteCareer}
                    ignoreKeys={["celebrity", "description", "ditl"]}/>
            </div>
        </div>
    );
}

export default Cluster;