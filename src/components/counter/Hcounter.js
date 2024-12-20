import React, { useEffect, useState, useRef } from 'react';
import './Hcounter.scss';
import AOS from "aos";
import "aos/dist/aos.css"; 

const Counter = ({ endValue, label, counter_text, icon, startCounting }) => {
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    if (startCounting) {
      let start = 0;
      const end = endValue;
      const duration = 4000; // Animation duration in milliseconds
      const increment = (end - start) / (duration / 50); // Increment for each frame (50ms interval)

      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(interval);
          setCounter(end);
        } else {
          setCounter(Math.ceil(start));
        }
      }, 50); // Update every 50ms

      return () => clearInterval(interval); // Clean up interval on unmount
    }
  }, [startCounting, endValue]);

  useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration (ms)
        easing: "ease-in-out", // Animation easing
        once: true, // Whether the animation should happen only once
      });
    }, []);



  return (
    <div className="col-md-3 new" ref={counterRef}>
      <div className="counter-box">
        <i className={`fa ${icon}`}></i>
        <span className="counter" data-aos="fade-up" data-aos-delay="200">{counter}<strong> +</strong></span>
        <h4 className="hcounter-heading" data-aos="fade-up" data-aos-delay="400">{label}</h4>
        <p className="hcounter-p" data-aos="fade-up" data-aos-delay="600">{counter_text}</p>
      </div>
    </div>
  );
};

const Hcounter = () => {
  const [startCounting, setStartCounting] = useState(false);
  const counterContainerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null, // use the viewport
      rootMargin: '0px',
      threshold: 0.5, // trigger when 50% of the element is in the viewport
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setStartCounting(true); // Start counting when the section is visible
          observer.unobserve(entry.target); // Stop observing once it's in view
        }
      });
    }, options);

    if (counterContainerRef.current) {
      observer.observe(counterContainerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="hcounter-parent parent" ref={counterContainerRef}>
      <div className="hcounter-container container">
        <Counter
          endValue={214}
          label="Clients"
          counter_text="Our company has 100 experts"
          icon="fa-thumbs-o-up"
          startCounting={startCounting}
        />
        <Counter
          endValue={10}
          label="Years Of Experience"
          counter_text="Our company has 100 experts"
          icon="fa-group"
          startCounting={startCounting}
        />
        <Counter
          endValue={1289}
          label="Audience Reached"
          counter_text="Our company has 100 experts"
          icon="fa-shopping-cart"
          startCounting={startCounting}
        />
      </div>
    </div>
  );
};

export default Hcounter;
