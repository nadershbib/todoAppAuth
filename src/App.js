import React, { useState } from 'react';
import './App.css';
import LoginPage from './LoginPage'
import ToDoPage from './ToDoPage'
function App() {

   const [user,setUser] = useState(null);
   console.log(user);


    

   










  return (
             user ? (
                 <ToDoPage user={user} />
             ):(
               <LoginPage setUser={setUser} />
             )
           

   
  )
}

export default App;
