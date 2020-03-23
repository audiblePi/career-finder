import React from 'react';

import Message from './Message';
import MessageResponse from './MessageResponse';

const Messages = (props) => {
    return props.data.map( ({ type, message }, key) => {
        
        if (type === 'chatbot')
            return <Message key={key} data={message} />
        
        if (type === 'response')
            return <MessageResponse key={key} data={message} />
    })
};

export default Messages;