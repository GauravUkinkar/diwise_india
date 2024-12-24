import React from 'react';
import "./LogoMarque.scss";
import logo1 from "../../assets/logo/akka.webp";
import logo2 from "../../assets/logo/aligner.webp";
import logo3 from "../../assets/logo/axonic.webp";
import logo4 from "../../assets/logo/deeva.webp";
import logo5 from "../../assets/logo/hcc.webp";
import logo6 from "../../assets/logo/ml.webp";
import logo7 from "../../assets/logo/nvm.webp";
import logo8 from "../../assets/logo/onkar.webp";
import logo9 from "../../assets/logo/team.webp";
import logo10 from "../../assets/logo/tij.webp";
import logo11 from "../../assets/logo/travel.webp";
import logo21 from "../../assets/logo/akka.webp";
import logo12 from "../../assets/logo/aligner.webp";
import logo13 from "../../assets/logo/axonic.webp";
import logo14 from "../../assets/logo/deeva.webp";
import logo15 from "../../assets/logo/hcc.webp";
import logo16 from "../../assets/logo/ml.webp";
import logo17 from "../../assets/logo/nvm.webp";
import logo18 from "../../assets/logo/onkar.webp";
import logo19 from "../../assets/logo/team.webp";
import logo20 from "../../assets/logo/tij.webp";
import logo22 from "../../assets/logo/travel.webp";



function LogoMarque() {
  const data = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo21, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20, logo22];

  return (
    <div className="logo-marque-parent">
      <div className="logo-marque-container">
        <div className="logo-marque-box" data-aos="zoom-in-up" data-aos-delay="200">
          {data.map((img, index) => (
            <img  key={index} src={img} alt={`Logo ${index}`} />
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
