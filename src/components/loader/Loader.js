import React, { useEffect, useState } from "react";
import "./Loader.scss";

function Loader() {
  const [text, setText] = useState("");
  const fullText = "DIwise\u00A0";

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150); // Typing speed

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="loader-container">
      <div className="loader">
        <span id="typing-text">{text}</span>
        <span className="cursor">|</span>
      </div>
    </div>
  );
}

export default Loader;
