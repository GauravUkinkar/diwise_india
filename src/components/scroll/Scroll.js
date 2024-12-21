import React, { useState, useEffect } from 'react';
import './Scroll.scss';

function Scroll() {
  const [scrollTop, setScrollTop] = useState(0);

  // Function to handle scroll progress
  const handleScroll = () => {
    const scrollableHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPosition = document.documentElement.scrollTop;

    const progress = (scrollPosition / scrollableHeight) * 100;
    setScrollTop(progress);
  };

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling behavior
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="scroll" onClick={scrollToTop}>
        <div
          className="progress-circle"
          style={{
            background: `conic-gradient(var(--accent, orange) ${scrollTop}%, #ccc ${scrollTop}%)`,
          }}
        >
          <span className="arrow-up">↑</span>
        </div>
      </div>
    </>
  );
}

export default Scroll;
