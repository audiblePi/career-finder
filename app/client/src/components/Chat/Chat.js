import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ChatIcon from '@material-ui/icons/Chat';
import Paper from '@material-ui/core/Paper';

import ChatHeader from './ChatHeader';
import Messages from './Messages';
// import Message from './Message';
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

const msgs = [
  { 
    id: 1,
    type: "chatbot",
    message: "Hello, Apollo 11. Houston. We're standing by.",
  },
  { 
    id: 2,
    type: "response",
    message: "Roger. Apollo 11.",
  },
];

const getMessages = () => {
  return msgs
}

export default function Chat(props) {
  const [chatMessages, setChatMessages] = useState(
    getMessages()
  );

  const classes = useStyles();
  
  const addMessage = (e, message) => {
    e.preventDefault()
  
    let id = chatMessages.length + 1

    chatMessages.push({
      id: id,
      type: "response", 
      message: message
    })

    //setChatMessages(chatMessages)

    //console.log("newMessage", message)
    console.log("messages", chatMessages)
  }

  useEffect(() => { 
    console.log("component updated"); 
  });

  //console.log(chatMessages)
  
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <ChatHeader />
        <Messages data={chatMessages}/>       
        <ChatInput onMessage={addMessage}/>
      </Paper>
      <Fab color="primary" className={classes.fab}>
        <ChatIcon />
      </Fab>
    </div>
  );
}