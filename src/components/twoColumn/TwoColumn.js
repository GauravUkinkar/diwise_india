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
        <div className="twocolumn-left">
          <div className="img bg-img-cover">
            {props.imageSrc && (
              <img src={props.imageSrc} alt={props.imageAlt || "Image"} />
            )}
          </div>
        </div>
        <div className="twocolumn-right">
          {renderHeading()}
          {props.para && <p>{props.para}</p>}
          {props.button && <button className="btn">{props.button}</button>}
        </div>
      </div>
    </div>
  );
}

export default TwoColumn;
