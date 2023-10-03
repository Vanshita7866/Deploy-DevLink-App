import React from "react";
import { useState } from 'react';
import "./login_signup.css";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { signInAuthWithEmailAndPassword } from './utils/firebase'

const Login= () => {
  const navigate = useNavigate();

    const [contact, setContact] = useState({
        email: '',
        password: '',
    })

    const { email, password} = contact;

    const handleChange = (event) => {
        const { name, value } = event.target
        setContact((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await signInAuthWithEmailAndPassword(email, password)
            console.log(response)
            alert("You are now signed in.");
            navigate('/');
        }
        catch (error) {
            console.log('error in logging in', error.message);
        }
    }
  return (
    <div>
      <header></header>
      <main>
        <section className="signInForm">
          <form>
          <Link to='/SignUp' class='signUp'>Sign Up</Link><br />
            <div className="formGroup">
              <label htmlFor="email">Your email</label>
              <input type="email" id="emailInput" name="email" onChange={handleChange} value={contact.email}/>
            </div>
            <div className="formGroup">
              <label htmlFor="password">Your password</label>
              <input type="password" id="passwordInput" name="password" onChange={handleChange} value={contact.password} />
            </div>
            <button id="logInSubmit" type="submit"value="Login" onClick={handleSubmit}>
              Login
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Login;
