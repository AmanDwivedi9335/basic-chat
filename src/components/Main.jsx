import React from 'react';
import { useState , useEffect } from 'react';
import Login from "./Login";
import Chat from "./Chat";

const Main = ( {socket} ) => {
    const [newUser, setNewUser] = useState("");
    const [user, setUser ] = useState({});
    const [users, setUsers ] = useState([]);
    const [message, setMessage ] = useState("");
    const [messages, setMessages ] = useState([]);
    
    useEffect(()=>{
        socket.on("users", (users) => {
            const messagesArr = [];
            for (const {userId , username} of users) {
                const newMessage = {type: "userStatus" , userId , username};
                messagesArr.push(newMessage);
            }
            sendMessage([...messages, ...messagesArr]);
            setUsers(users);


        });
        socket.on("session", ({userId , username}) => {
            setUser({userId , username});
            console.log(user);
        });
        socket.on("user connected", ({userId , username}) => {
            const newMessage = {type: "userStatus" , userId , username};
            setMessages([...messages, newMessage]);

        });
        socket.on("new message", ({userId , username , message})=>{
            const newMessage =  {type : "message", userId: userId, username: username, message};
            setMessages([...messages, newMessage]);
        })
        
    }, [socket, messages, users, user]);
  
  
    function handleChange({currentTarget : input}){
      setNewUser(input.value);
    }
  
    function logNewUser(){
      setUser(newUser);
      socket.auth = {username : newUser};
      socket.connect();
    }

    function sendMessage(){
        socket.emit("new message", message);

        const newMessage =  {type : "message", userId: user.userId, username: user.username, message};
        setMessages([...messages, newMessage]);
        setMessage("");

    }
    // console.log(user.userId + "is user id");
    return(
        <main content ="content">
            <div className="container mt-3"> 
                {socket.auth && (
                <Chat user={user} message={message} messages={messages} setMessage={setMessage} sendMessage={sendMessage}/>
                )} 
                {!socket.auth && (
                <Login newUser={newUser} handleChange= {handleChange} logNewUser= {logNewUser}/>
                )}
                
            </div>
        </main>
    )
}

export default Main;
