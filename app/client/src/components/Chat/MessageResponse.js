import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
    messageResponse: {
        display: 'flex',
        justifyContent: 'flex-end',
        //padding: theme.spacing(1),
        alignItems: 'center',
        textAlign: 'right',
        '& > *': {
          margin: theme.spacing(1),
        },
    },
}));

export default function MessageResponse(props) {
  const classes = useStyles();

    return (
        <div className={classes.messageResponse}>
            {props.data}<Avatar className={classes.avatar}>E</Avatar>
        </div> 
    );
}