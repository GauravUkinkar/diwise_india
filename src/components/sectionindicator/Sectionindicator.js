import React from 'react'
import './Sectionindicator.scss';

function Sectionindicator(props) {
  return (
   <>
   <div className="section-indicator">
    <h2 className='section-text'>{props.section_indicator}</h2>
   </div>
   </>
  )
}

export default Sectionindicator