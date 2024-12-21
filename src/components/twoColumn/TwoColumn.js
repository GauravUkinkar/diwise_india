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

  return (
    <div className="twocolumn parent">
      <div className="twocolumn-container container">
        <div className="twocolumn-left" data-aos="fade-right" data-aos-delay="200">
          <div className="img bg-img-cover">
            {props.imageSrc && (
              <img src={props.imageSrc} alt={props.imageAlt || "Image"} />
            )}
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
