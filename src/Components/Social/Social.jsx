import React from "react";
import "./social.css";

const Social = (props) => {
  return (
    <div className="social-contact">
      <a href={props.link}>
        <img src={props.icon} className="social-icon" alt="images" />
      </a>
    </div>
  );
};

export default Social;
