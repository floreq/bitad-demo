import React from "react";

function LineEndedWithCircles(props) {
  return (
    <div className="line-component">
      <h1>{props.topText}</h1>
      <div className="line-wrapper">
        <div className="circle"></div>
        <div className="line"></div>
        <div className="circle"></div>
      </div>
      <h2>{props.bottomText}</h2>
    </div>
  );
}

export default LineEndedWithCircles;
