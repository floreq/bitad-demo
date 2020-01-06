import React from "react";
import LineEndedWithCircles from "./LineEndedWithCircles";
import AthLogo from "./../assets/images/ath-logo.svg";
import BitadLogo from "./../assets/images/bitad-logo-2020.svg";
import ResetLogo from "./../assets/images/reset-logo.svg";

function Hero() {
  return (
    <div className="hero">
      <div className="middle">
        <img src={BitadLogo} alt="Bitad Logo" />
        <LineEndedWithCircles topText="10 EDYCJA" bottomText="20.03" />
        <h2>Rejestracja już wkrótce</h2>
      </div>
      <div>
        <div className="bottom">
          <img src={AthLogo} alt="Ath Logo" />
          <img src={ResetLogo} alt="Reset Logo" />
        </div>
        <div className="poly-bg-wrapper">
          <div className="middle-triangle"></div>
          <div className="congruent-triangles"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
