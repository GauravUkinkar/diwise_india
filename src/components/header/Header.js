import React, { useEffect, useState } from 'react'
import './Header.scss';
import { Link } from 'react-router-dom';

function Header() {
const[isScrolled, setIsScrolled]= useState(false);

useEffect(() =>{
const handleScroll = ()=>{

}


},[])

    return (
        <>
            <div className='header-parent parent' >
                <div className="header-left">
                    <div className="logo bg-img-contain"></div>
                </div>

                <div className="nav-links">
                    <Link>Home</Link>
                    <Link>About</Link>
                    <Link>Services</Link>
                    <Link>Blog</Link>
                    <Link>Contact</Link>
                </div>


                <div className="contact-box">
                    <Link className="btn">Contact</Link>

                </div>
            </div>


        </>
    )
}

export default Header