import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
    message: {
        display: 'flex',
        alignItems: 'center',
        //padding: theme.spacing(1),
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    avatar:{
        // width: theme.spacing(3),
        // height: theme.spacing(3),
    },
}));

export default function Message(props) {
    const classes = useStyles();

    return (
        <div className={classes.message}>
            <Avatar className={classes.avatar}>H</Avatar>{props.data}
        </div>
    );
}