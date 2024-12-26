import React from 'react';
import "./ServiceCol.scss";

function ServiceCol(props) {
    return (
        <div className="servicecol parent">
            <div className="servicecol-container container">
                {/* Left Section */}
                <div className="servicecol-left">
                    <h2 data-aos="fade-up" data-aos-delay="200">{props.left_heading} <span className="highlight">{props.highlight}</span></h2>
                    <p data-aos="fade-up" data-aos-delay="400">{props.para}</p>
                    <a href="#" className="cta" data-aos="fade-up" data-aos-delay="400">{props.btn}</a>
                </div>

                {/* Right Section */}
                <div className="servicecol-right">
                    {/* Top Section */}
                    <div className="servicecol-right-top" data-aos="fade-left" data-aos-delay="200">
                        <div className="servicecol-right-top-left">
                            <div className="icon">{props.icon_top}</div>
                        </div>
                        <div className="servicecol-right-top-right">
                            <h3>{props.heading_top}</h3>
                            <p>{props.para_top}</p>
                        </div>
                    </div>

                    {/* Middle Section */}
                    <div className="servicecol-right-middle"  data-aos="fade-left" data-aos-delay="400">
                        <div className="servicecol-right-middle-left">
                            <div className="icon">{props.icon_middle}</div>
                        </div>
                        <div className="servicecol-right-middle-right">
                            <h3>{props.heading_middle}</h3>
                            <p>{props.para_middle}</p>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="servicecol-right-bottom"  data-aos="fade-left" data-aos-delay="600">
                        <div className="servicecol-right-bottom-left">
                            <div className="icon">{props.icon_bottom}</div>
                        </div>
                        <div className="servicecol-right-bottom-right">
                            <h3>{props.heading_bottom}</h3>
                            <p>{props.para_bottom}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceCol;
