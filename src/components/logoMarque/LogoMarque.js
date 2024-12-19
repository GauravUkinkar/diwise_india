import React from 'react';
import "./LogoMarque.scss";
import logo1 from "../../assets/logo/akka.webp";
import logo2 from "../../assets/logo/aligner.webp";
import logo3 from "../../assets/logo/axonic.webp";
import logo4 from "../../assets/logo/deeva.webp";
import logo5 from "../../assets/logo/hcc.webp";
import logo6 from "../../assets/logo/medical.webp";
import logo7 from "../../assets/logo/nvm.webp";
import logo8 from "../../assets/logo/onkar.webp";
import logo9 from "../../assets/logo/team.webp";
import logo10 from "../../assets/logo/tij.webp";
import logo11 from "../../assets/logo/travel.webp";



function LogoMarque() {
  const data = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11];

  return (
    <div className="logo-marque-parent">
      <div className="logo-marque-container">
        <div className="logo-marque-box">
          {data.map((img, index) => (
            <img key={index} src={img} alt={`Logo ${index}`} />
          ))}
          {data.map((img, index) => (
            <img key={index + data.length} src={img} alt={`Logo ${index + data.length}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LogoMarque;
