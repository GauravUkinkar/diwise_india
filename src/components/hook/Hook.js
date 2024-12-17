import React from 'react'
import { Link } from 'react-router-dom'
import './Hook.scss';

function Hook() {
  return (
   <>
   
    <div className="hook-parent parent bg-img-cover">
        <div className="hook-container container">
            <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, sit?</h3>
            <Link className='btn'>Know More</Link>
        </div>

</div>
   </>
  )
}

export default Hook