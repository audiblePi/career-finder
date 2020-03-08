import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'inline-block',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function Keyword() {
    const classes = useStyles();

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    return (
        <div className={classes.root}>
            <Chip
                label="Keyword"
                clickable
                color="primary"
                onClick={handleClick}
            />
        </div>
    );
}