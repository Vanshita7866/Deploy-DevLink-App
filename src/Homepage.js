import React from 'react';
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Header from "./Header";
import Slideshow from "./slideshow";
import SignupForm from "./email";
import CardList from "./Cardlist";
import Customer from "./customer";
import Heading from "./Heading";
import Footer from "./footer";
function Homepage() {
    return (
      <div>
        <Header />
        <Slideshow />
        <Heading level={3} text="Featured Freelancers" />
        <CardList />
        <Heading level={3} text="Featured Customers" />
        <Customer />
        <SignupForm />
        <Footer />
      </div>
    );
  }
  
  export default Homepage;