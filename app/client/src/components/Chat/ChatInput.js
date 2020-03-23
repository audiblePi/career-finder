import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import InputBase from '@material-ui/core/InputBase';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles(theme => ({
    input: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
    },
    inputBase: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
}));

export default function ChatInput(props) {
    const classes = useStyles();

    const [message, setMessage] = useState('');

    return (
        <div>
            <Divider />
            <div className={classes.input}>
                <InputBase
                    className={classes.inputBase}
                    placeholder="Enter text"
                    name="message" 
                    onChange={(e) => setMessage(e.target.value)}
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
                <IconButton 
                    type="submit" 
                    color="primary" 
                    className={classes.iconButton} 
                    aria-label="search" 
                    onClick={(e) => props.onMessage(e, message)}>
                    <SendIcon />
                </IconButton>
            </div>
        </div>
    );
}