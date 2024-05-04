import React from 'react';
import { useState } from 'react';
import Login from "./Login";
import Chat from "./Chat";

const Main = () => {
    const [newUser, setNewUser] = useState("");
    const [user, setUser ] = useState("");
    const [message, setMessage ] = useState("");
  
  
    function handleChange({currentTarget : input}){
      setNewUser(input.value);
    }
  
    function logNewUser(){
      setUser(newUser);
    }
    return(
        
        <main content ="content">
            <div className="container mt-3"> 
                {user && (
                <Chat user={user} message={message} setMessage={setMessage}/>
                )} 
                {!user && (
                <Login newUser={newUser} handleChange={handleChange} logNewUser={logNewUser}/>
                )}
                
            </div>
        </main>
    )
}

export default Main;
