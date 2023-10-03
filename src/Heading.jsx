import React from "react";



const Heading = ({ level, text }) => {
  const HeadingTag = `h${level}`;
  return <HeadingTag>{text}</HeadingTag>;
};

export default Heading;
