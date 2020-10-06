import React from 'react';
// import './LoginPage.css';
import  './LoginPage.scss'
import {auth,provider} from './firebase';


function LoginPage({setUser}) {

  const SignIn = ()=>{

    auth.signInWithPopup(provider)
    .then(result=>setUser(result.user))
    .catch(err=>alert(err.message))     
  }


    return (
        <div className="login__page">
             <div className="login__container">
                  <h1>Your ToDo List </h1>
                  <button onClick={SignIn}>
                  <i className="fab fa-google"></i>
                  Sign in with Google
                  
                  </button>
             </div>
            
        </div>
    )
}

export default LoginPage
