import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ChatIcon from '@material-ui/icons/Chat';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import Divider from '@material-ui/core/Divider';

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
  message: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1),
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  messageResponse: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.spacing(1),
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  response: {
    textAlign: 'right',
    marginLeft: 'auto',
  },
  avatar:{
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  input: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    //width: 400,
  },
  inputBase: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
}));

export default function Chat() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={3}>

        {/* messages */}
        <div className={classes.message}>
            <Avatar className={classes.avatar}>h</Avatar>I love you
        </div>
        <div className={classes.messageResponse}>
            I know <Avatar className={classes.avatar}>u</Avatar>
        </div>

        {/* input form */}
        <Divider />

        <div className={classes.input}>
          <InputBase
            className={classes.inputBase}
            placeholder="Enter text"
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <IconButton type="submit" color="primary" className={classes.iconButton} aria-label="search">
            <SendIcon />
          </IconButton>

        </div>
      </Paper>

      {/* closed state icon? */}
      <Fab color="primary" className={classes.fab}>
        <ChatIcon />
      </Fab>
    </div>
  );
}