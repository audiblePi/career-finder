import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
//import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import tileData from '../../data/tileData';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        // overflow: 'hidden',
        // backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 700,
        //height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

export default function Clusters() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList cols={4} cellHeight={180} className={classes.gridList}>
                {/* <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Career Clusters</ListSubheader>
                </GridListTile> */}
                {tileData.map(tile => (
                    <GridListTile key={tile.img}>
                        <Link href="/Career">
                            <img src={tile.img} alt={tile.title} className="MuiGridListTile-imgFullHeight"/>
                            <GridListTileBar
                                title={tile.title}
                                subtitle={<span>{tile.subtitle}</span>}
                                actionIcon={
                                    <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />
                        </Link>
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}