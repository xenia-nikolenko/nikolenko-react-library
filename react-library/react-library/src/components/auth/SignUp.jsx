import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../../firebase.config'; 
import { useNavigate } from "react-router-dom";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const signUp = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("===> USER:", user)

            if (user) {
                console.log("USER ID on signup", user.uid)
                console.log("typeof uid", typeof user.uid)
                const userData = {
                    
                    email: email,
                    nickname: "",
                    books: [],
                    
                };

                //const docRef = await addDoc(collection(db, 'users'), userData);
                const docRef = await setDoc(doc(db, 'users', user.uid), userData);

                console.log("User data added to Firestore with ID:", docRef.id);
                setEmail('');
                setPassword('');
                navigate("/");
            }
        } catch (error) {
            console.error('Error creating document:', error);
        }
    }

    return (
        <div className='site-content'>
            <div className='sign-in-container'>
                <form onSubmit={signUp}>
                    <h1>Create account</h1>
                    <input
                        type="email"
                        placeholder='Enter your email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder='Enter your password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type='submit'>Sign up</button>
                </form>
            </div>
        </div>
    );
};


export default SignUp;
