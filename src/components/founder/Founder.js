import React from 'react';
import "./Founder.scss";
import pic from "../../img/prajakta_mam.webp";

function Founder() {
  return (
    <div className="founder parent">
      <h2>Meet <span className="highlight">Our Founder</span></h2>
      <div className="founder-container container">
        <div className="founder-left">
          <h3>Prajakta Marwaha</h3>
          <p className="position">(Founder and Managing Director)</p>
          <p className="description">
            As the visionary leader of DIwise Global, Prajakta Marwaha brings unparalleled expertise and a strategic mindset. Her deep understanding of digital marketing and innovative approach drives our team towards exceptional results. Her commitment to understanding client needs and building long-term partnerships ensures sustainable growth and success.
          </p>
          <a href="#" className="cta">Let's Connect</a>
        </div>
        <div className="founder-right bg-img-cover">
          <img src={pic} alt="Prajakta Marwaha" />
        </div>
      </div>
    </div>
  );
}

export default Founder;