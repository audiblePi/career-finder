import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ChatIcon from '@material-ui/icons/Chat';
import Paper from '@material-ui/core/Paper';

import ChatHeader from './ChatHeader';
import Messages from './Messages';
import ChatInput from './ChatInput';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(0),
    right: theme.spacing(0),
  },
  paper: {
    position: 'absolute',
    bottom: theme.spacing(10),
    right: theme.spacing(0),
    //padding: theme.spacing(1),
    width: theme.spacing(35),
    //height: theme.spacing(16),
  },
}));

export default function Chat(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <ChatHeader />
        <Messages data={props.chatMessages}/>       
        <ChatInput onMessage={props.onAddMessage}/>
      </Paper>
      <Fab color="primary" className={classes.fab}>
        <ChatIcon />
      </Fab>
    </div>
  );
}