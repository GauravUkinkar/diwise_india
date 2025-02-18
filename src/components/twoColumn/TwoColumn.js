import React from 'react';
import "./TwoColumn.scss";

function TwoColumn(props) {
  const renderHeading = () => {
    if (!props.heading) return null;

    // If `highlight` prop is provided, wrap the specific word with a span
    if (props.highlight) {
      const parts = props.heading.split(props.highlight);
      return (
        <h2>
          {parts[0]}
          <span className="highlight">{props.highlight}</span>
          {parts[1]}
        </h2>
      );
    }

    // If no `highlight` prop, just render the heading normally
    return <h2>{props.heading}</h2>;
  };

  const renderMedia = () => {
    if (props.videoSrc) {
      return (
        <video 
          className="media" 
          src={props.videoSrc} 
          alt={props.videoAlt || "Video"} 
          playsInline 
          controls 
          autoPlay={props.autoPlay || false} 
          loop={props.loop || false} 
          muted={props.muted || false}
        />
      );
    } else if (props.imageSrc) {
      return (
        <img 
          className="media" 
          src={props.imageSrc} 
          alt={props.imageAlt || "Image"} 
        />
      );
    }
    return null;
  };

  return (
    <div className="twocolumn parent">
      <div className="twocolumn-container container">
        <div className="twocolumn-left" data-aos="fade-up" data-aos-delay="200">
          <div className="media-wrapper bg-img-cover">
            {renderMedia()}
          </div>
        </div>
        <div className="twocolumn-right" data-aos="fade-up" data-aos-delay="200">
          {renderHeading()}
          {props.para && <p data-aos="fade-up" data-aos-delay="200">{props.para}</p>}
          {props.button && <button className="btn" data-aos="fade-up" data-aos-delay="400">{props.button}</button>}
        </div>
      </div>
    </div>
  );
}

export default TwoColumn;
