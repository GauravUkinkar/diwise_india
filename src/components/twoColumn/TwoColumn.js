import React from 'react'
import "./TwoColumn.scss";

function TwoColumn(props) {
  return (
    <>
    <div className="twocolumn parent">
        <div className="twocolumn-container container">
            <div className="twocolumn-left">
                <div className="img bg-img-cover">

                </div>
            </div>
            <div className="twocolumn-right">
                <h2>{props.heading}</h2>
                <p>{props.para}</p>
                <button className='btn'>{props.button}</button>
            </div>
            
        </div>
    </div>

    
    
    
    
    </>
  )
}

export default TwoColumn
