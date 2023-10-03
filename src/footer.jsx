import React from "react";
import { Icon, List } from "semantic-ui-react";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footercontainer">
      <div className="fordevs">
        <h2>For Devs</h2>
        <ul>
          <li>
            <a href="index.html">How it works</a>
          </li>
          <li>
            <a href="index.html">How to create a profile</a>
          </li>
          <li>
            <a href="index.html">Find jobs</a>
          </li>
        </ul>
      </div>
      <div className="clients">
        <h2>For Clients</h2>
        <ul>
          <li>
            <a href="index.html">How it works</a>
          </li>
          <li>
            <a href="index.html">How to post a job</a>
          </li>
          <li>
            <a href="index.html">Find dev</a>
          </li>
        </ul>
      </div>
      <div className="socials">
        <h2>Stay Connected</h2>
        <List horizontal link inverted>
          <List.Item>
            <a href="https://www.facebook.com">
              <Icon name="facebook" />
            </a>
          </List.Item>
          <List.Item>
            <a href="https://www.twitter.com">
              <Icon name="twitter" />
            </a>
          </List.Item>
          <List.Item>
            <a href="https://www.instagram.com">
              <Icon name="instagram" />
            </a>
          </List.Item>
        </List>
      </div>
      <div className="devlink">
        <h2>DEVLink</h2>
        <ul>
          <li>
            <a href="index.html">Privacy Policy</a>
          </li>
          <li>
            <a href="index.html">Terms</a>
          </li>
          <li>
            <a href="index.html">Code of Conduct</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
