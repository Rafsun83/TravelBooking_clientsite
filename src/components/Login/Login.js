import React from 'react';
import UseAuth from '../../Hooks/UseAuth';
import './Login.css'
const Login = () => {
    const { signInUsingGoogle } = UseAuth();
    return (
        <div className="login-form">
            <h3>Plaese Login</h3>
            <button onClick={signInUsingGoogle} >sign in using google</button>

        </div>
    );
};

export default Login;