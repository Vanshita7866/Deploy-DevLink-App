import React from "react";
import { useState , useContext} from 'react';
import "./login_signup.css";
import Header from "./Header";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { signInAuthWithEmailAndPassword } from './utils/firebase'
import { UserContext } from './user.context'

const Login= () => {
  const navigate = useNavigate();
    const { currentUser, setCurrentUser } = useContext(UserContext)

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


    const handleSignOut = () => {
      setCurrentUser(null);
  }
  return <div>
      <Header />
    {
      currentUser === null ?
      <form className="signInForm">
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
       :
       <div class="logInSubmit">
           <p>logged in as {currentUser.user.email}</p>
           <button onClick={handleSignOut}>Sign Out</button>
       </div>
    };
      
        
    
    </div>
  
}

export default Login;
