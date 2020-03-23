import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: '2px 4px',
    '& > *': {
        marginLeft: theme.spacing(1),
    },
  },
  iconButton: {
    flex: '1',
    justifyContent: 'flex-end',
  },
}));

export default function ChatHeader() {
  const classes = useStyles();

  return (
    <div>
        <div className={classes.root}>
            <span>Chat</span>
            <IconButton type="submit" color="primary" className={classes.iconButton} aria-label="search">
                <CloseIcon />
            </IconButton>
        </div>
        <Divider />
    </div>
  );
}