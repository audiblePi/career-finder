import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import EditIcon from '@material-ui/icons/Edit';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import EditModal from '../EditModal/EditModal';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 1280,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    editWrapper: {
        display: 'flex',
        paddingBottom: 20,
        justifyContent: 'flex-end',
    },
    remove: {
        position: 'absolute',
        top: 0,
        right: 0,
    }
}));

export default function Clusters(props) {
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const getClusters = () => {
        props.readClusters()
    }

    const editClusters = () => {
        return (
            <div className={classes.editWrapper}>
                <Button 
                    className={classes.editButton} 
                    startIcon={<EditIcon />}
                    variant="outlined"
                    color="primary"
                    size="large"
                    onClick={handleOpen}>
                    Edit Clusters
                </Button>
            </div>
        )
    }

    useEffect(() => {
        getClusters()
    }, []);

    return (
        <div>
    
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    {/* {backButton()} */}
                </Grid>
                <Grid item xs={6}>
                    { props.role === 'admin' ? editClusters() : ''}
                </Grid>
            </Grid>
            
            <div className={classes.root}>    
                <GridList cols={3} cellHeight={320} className={classes.gridList}>
                    {props.clusters.map(cluster => (
                        <GridListTile key={cluster._id}>
                            <Link href={"/Cluster/" + cluster._id}>
                                <img src={cluster.image} alt={cluster.name} className="MuiGridListTile-imgFullHeight"/>
                                <GridListTileBar
                                    title={cluster.name}
                                    subtitle={<span>Subtitle</span>}
                                    actionIcon={
                                        <IconButton aria-label={`info about ${cluster.name}`} className={classes.icon}>
                                            <InfoIcon />
                                        </IconButton>
                                    }
                                />
                            </Link>
                        </GridListTile>
                    ))}
                </GridList>

                <EditModal 
                    open={open} 
                    handleClose={onClose} 
                    data={props.clusters}
                    onCreate={props.createCluster}
                    onUpdate={props.updateCluster}
                    onDelete={props.deleteCluster}
                    ignoreKeys={["keywords", "careers"]}/>
            </div>
        </div>
    );
}