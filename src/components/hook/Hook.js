import React, { useEffect } from "react";
import "./Hook.scss";
import AOS from "aos";
import "aos/dist/aos.css";

function Hook() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (ms)
      easing: "ease-in-out", // Animation easing
      once: true, // Whether the animation should happen only once
    });
  }, []);

  return (
    <>
      <div className="hook parent">
        {/* Fading div */}
        <div className="fade-overlay"></div>
        <div
          className="hook-container container bg-img-contain"
          data-aos="zoom-in-up"
        >
          <h2>
            Got an <span className="highlight">Idea?</span>
          </h2>
          <a href="/contact" className="cta">
            Tell Us
          </a>
        </div>
      </div>
    </>
  );
}

export default Hook;
