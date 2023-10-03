import React from "react";
import Card from "./card";
import customerlist from "./customerlist";
import { Button } from "semantic-ui-react";
import "./card.css";



const Customer = () => {
  return (
    <div>
      <div className="row">
        {customerlist.map((customer) => (
          <Card
            key={customer.key}
            avatar={customer.avatar}
            name={customer.name}
            position={customer.position}
            rating={customer.rating}
          />
        ))}
      </div>
      <button className="ui button">See all customers</button>
    </div>
  );
};

export default Customer;
