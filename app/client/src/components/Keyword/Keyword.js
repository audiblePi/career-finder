import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
//import FaceIcon from '@material-ui/icons/Face';
//import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles(theme => ({
  root: {
      display: 'inline-block',
    // display: 'flex',
    // justifyContent: 'center',
    // flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function Keyword() {
    const classes = useStyles();

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    return (
        <div className={classes.root}>
            <Chip
                //avatar={<Avatar>M</Avatar>}
                label="Keyword"
                clickable
                color="primary"
                onClick={handleClick}
                //onDelete={handleDelete}
                //deleteIcon={<DoneIcon />}
            />
        </div>
    );
}