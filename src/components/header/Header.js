import React, { useEffect, useState } from 'react'
import './Header.scss';
import { Link } from 'react-router-dom';
import { HiOutlinePhone } from 'react-icons/hi';
import { MdOutlineMail } from 'react-icons/md';
import { IoLocationOutline } from "react-icons/io5";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  return (
    <>
      <div className={`header-parent parent ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-left">
          <div className="logo bg-img-contain"></div>
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <div className="dropdown">
            <Link to="#" className="dropdown-toggle">Services</Link>
            <div className="dropdown-menu">
              <Link to="/service1">Service 1</Link>
              <Link to="/service2">Service 2</Link>
              <Link to="/service3">Service 3</Link>
            </div>
          </div>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>


        <div className="contact-box">
          <div className="grid-icon bg-img-contain " type="button" data-bs-toggle="offcanvas" data-bs-target="#demo"></div>
          <Link className="cta">Contact Us</Link>

        </div>
      </div>

      <div class="offcanvas offcanvas-end" id="demo">
        <div class="offcanvas-header">
          <div className="canvas-logo bg-img-contain"></div>
          {/* <h1 class="offcanvas-title">About Us</h1> */}
          <button type="button" class="btn-close close-canvas" data-bs-dismiss="offcanvas"></button>
        </div>
        <div class="offcanvas-body">
          <h2>About Us</h2>
          <p>We work with forward-thinking companies to craft and produce impactful solutions through website & mobile app experiences. You will work closely with skilled Dolor in reprehenderit in voluptate velit esse cillum.</p>
          <h5>Contact us</h5>
          <div className="icon-box">
            <span className='icons'><MdOutlineMail /></span><p className='address'>

              info@diwise.in</p>
          </div>
          <div className="icon-box">
            <span className='icons'><HiOutlinePhone /></span><p className='address'>
              +91 8482936866</p>
          </div>
          <div className="icon-box">
            <span className='icons'><IoLocationOutline /></span><p className='address'>
              Office No. 214-216, 10 Biz Park,Near Symbiosis Law College, Airport Road,Vimannagar, Pune- 411014</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header