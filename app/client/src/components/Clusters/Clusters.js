import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import EditModal from '../EditModal/EditModal';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 800,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    editWrapper: {
        display: 'flex',
        padding: 20,
        justifyContent: 'center',
    },
    remove: {
        position: 'absolute',
        top: 0,
        right: 0,
    }
}));

export default function Clusters(props) {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const editClusters = () => {
        return (
            <div className={classes.editWrapper}>
                <Button className={classes.editButton} color="inherit" onClick={handleOpen}>
                    Edit Clusters
                </Button>
            </div>
        )
    }

    return (
        <div>
    
            { props.role === 'admin' ? editClusters() : ''}
            
            <div className={classes.root}>    
                <GridList cols={3} cellHeight={260} className={classes.gridList}>
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
                    onCreate={props.onCreateCluster}
                    onUpdate={props.onUpdateCluster}
                    onDelete={props.onDeleteCluster}
                    ignoreKeys={["keywords", "careers"]}/>
            </div>
        </div>
    );
}