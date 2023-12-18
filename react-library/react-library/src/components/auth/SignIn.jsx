import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.config";
import '../../styles/SignIn.css';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { db } from '../../firebase.config';


/* eslint-disable react/prop-types */
const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
   
    const signIn = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("userCredential:", userCredential);
                navigate("/");
            }).catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className='site-content'>
        <div className='sign-in-container '>
            <form onSubmit={signIn}>
                <h1>Log In into your account</h1>
                <input type="email"
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}>
                </input>
                <input
                    type="password"
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}>
                </input>
                <button type='submit'>Log In </button>
            </form>
            <p>Don't have an account? <NavLink to="/signup">Sign Up</NavLink></p>
        </div>
        </div>
    );
};

export default SignIn;
