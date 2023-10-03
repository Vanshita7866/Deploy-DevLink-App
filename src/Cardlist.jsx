import React from "react";
import Card from "./card";
import stafflist from "./stafflist";
import { Button } from "semantic-ui-react";
import "./card.css";



const CardList = () => {
  return (
    <div>
      <div className="row">
        {stafflist.map((staff) => (
          <Card
            key={staff.key}
            avatar={staff.avatar}
            name={staff.name}
            position={staff.position}
            rating={staff.rating}
          />
        ))}
      </div>
      <Button className="ui button">See More</Button>
    </div>
  );
};

export default CardList;
