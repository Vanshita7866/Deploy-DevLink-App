import "./email.css";
import React from "react";
import { useState } from "react";

const SignupForm = () => {
  const [email, setEmail] = useState('');

	const handleSubmit = async () => {
    console.log("submitted");
		await fetch("http://localhost:8080/", {
			method: 'post',
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				email: email
            })
		})
		.then(response => response.json())
		.then(data => JSON.parse(data))
		.catch(err => {
			console.log("Error: " + err);
        })
	}

	const handleChange = (event) => {
		const { value } = event.target;
		setEmail(value);
	}
  return (
    <div className="signup-form">
      <form action="http://localhost:8080/" method="post">
        <div className="form-group">
          <label htmlFor="email">SIGN UP HERE FOR OUR DAILY INSIDERS:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your Email"
            onChange={handleChange}
          />
          <button type="submit" onClick={handleSubmit}>Subscribe</button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
