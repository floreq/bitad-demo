import React from "react";
import LineEndedWithCircles from "./LineEndedWithCircles";
import PolyBg from "./PolyBg";
import AthLogo from "./../assets/images/ath-logo.svg";
import BitadLogo from "./../assets/images/bitad-logo-2020.svg";
import ResetLogo from "./../assets/images/reset-logo.svg";

function Hero() {
  return (
    <div className="hero">
      <div className="middle">
        <img src={BitadLogo} alt="Bitad Logo" />
        <LineEndedWithCircles
          topText="28.03.2020"
          bottomText="Rejestracja już wkrótce"
        />
      </div>
      <div className="bottom">
        <img src={AthLogo} alt="Ath Logo" />
        <img src={ResetLogo} alt="Reset Logo" />
      </div>
      <PolyBg />
    </div>
  );
}

export default Hero;
