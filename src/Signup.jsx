import React from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./login_signup.css";
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from './utils/firebase'


const Signup = () => {
  const navigate = useNavigate();

    const [contact, setContact] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { displayName, email, password, confirmPassword } = contact;

    const handleChange = (event) => {
        const { name, value } = event.target
        setContact ((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocFromAuth(user, { displayName });
            alert("Account created successfully, you can now log in.");
            navigate('/Login');
        }
        catch (error) {
            console.log('error in creating user', error.message);
            if (error.message === "Firebase: Error (auth/email-already-in-use).") {
                alert("An account has already been made using this email.");
            }
        }
    }
  return (
    <div>
      <form className="signInForm">
        <h2>Create a DevLink Account</h2>
        <div className="formGroup">
          <label htmlFor="name">Name*</label>
          <input type="text" id="nameInput" name="displayName" onChange={handleChange} value={contact.displayName} />
        </div>
        <div className="formGroup">
          <label htmlFor="email">Email*</label>
          <input type="email" id="emailInput" name="email" onChange={handleChange} value={contact.email}/>
        </div>
        <div className="formGroup">
          <label htmlFor="password">Password*</label>
          <input type="password" id="passwordInput" name="password" onChange={handleChange} value={contact.password}/>
        </div>
        <div className="formGroup">
          <label htmlFor="confirmPassword">Confirm Password*</label>
          <input
            type="password"
            id="confirmPasswordInput"
            name="confirmPassword"
            onChange={handleChange} value={contact.confirmPassword}
          />
        </div>
        <button id="logInSubmit" type="submit" value="Create" onClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
};

export default Signup;
