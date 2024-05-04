import React from 'react'
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
import ChatContainer from './ChatContainer';

const Chat = ({user, message, setMessage}) => {
    return(
            <ChatContainer>
                <ChatHeader user={user}/>
                <ChatInput message={message} setMessage={setMessage}/>
            </ChatContainer>
    );
}

export default Chat;
