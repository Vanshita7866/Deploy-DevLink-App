import React from "react";
import { Link } from "react-router-dom"
import { Menu, Container } from "semantic-ui-react";
const containerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "20px",
  margin: "10px",
  marginTop: "110%",
  padding: "10px",
  backgroundColor: "#94e5e7cb",
};

const titleStyle = {
  margin: "0",
};

const listItemStyle = {
  margin: "0 20px",
};

const Header = () => {
  return (
    <Menu>
      <Container style={containerStyle}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h3 style={titleStyle}>DevLink Marketplace</h3>
          <Menu.Item style={listItemStyle}>
            Find Dev
          </Menu.Item>
          <Menu.Item style={listItemStyle}>
            Find Jobs
          </Menu.Item>
          <Menu.Item style={listItemStyle}>
          <Link to='/Login'> Login</Link>
          </Menu.Item>
          <Menu.Item style={listItemStyle}>
          <Link to='/Signup'> Create Account</Link>
          </Menu.Item>
        </div>
      </Container>
    </Menu>
  );
};

export default Header;
