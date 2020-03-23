import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Link from '@material-ui/core/Link';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import clusters from '../../data/testData';

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
    edit: {
        position: 'absolute',
        top: 0,
        right: 0,
    }
}));

const edit = (id, classes) => {
    return (
        <IconButton className={classes.edit}>
            <EditIcon />
        </IconButton>
    )
}

export default function Clusters(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList cols={3} cellHeight={260} className={classes.gridList}>
                {clusters.map(cluster => (
                    <GridListTile key={cluster.img}>
                        {/* <Link href={"/Cluster/" + cluster.id}> */}
                            <img src={cluster.img} alt={cluster.title} className="MuiGridListTile-imgFullHeight"/>

                            { props.role === 'admin' ? edit(cluster.id, classes) : ''}

                            <GridListTileBar
                                title={cluster.title}
                                subtitle={<span>{cluster.subtitle}</span>}
                                actionIcon={
                                    <Link href={"/Cluster/" + cluster.id}>
                                        <IconButton aria-label={`info about ${cluster.title}`} className={classes.icon}>
                                            <InfoIcon />
                                        </IconButton>
                                    </Link>
                                }
                            />
                        {/* </Link> */}
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}