import React, { useEffect, useState } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { HiOutlinePhone } from 'react-icons/hi';
import { MdOutlineMail } from 'react-icons/md';
import { IoLocationOutline } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb";
import { useInView } from "react-intersection-observer";

import AOS from "aos";
import "aos/dist/aos.css";
import { CgClose } from 'react-icons/cg';


function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCanvasOpen, setIsCanvasOpen] = useState(false);
  const [mobilenav, setMobilNav] = useState(false);


  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 22000);
      setMobilNav(false);
    };


    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  useEffect(() => {
    const pageScroll = () => {
      setIsScrolled(window.scrollY > 10);
      setMobilNav(false);
    };


    window.addEventListener('scroll', pageScroll);
    return () => window.removeEventListener('scroll', pageScroll);
  }, []);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleCanvas = () => {
    setIsCanvasOpen(!isCanvasOpen);
  };


  const toggleMobileNav = () => {
    setMobilNav(!mobilenav)
  };

  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);


  return (
    <>
      <div className={`header-parent parent ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-left">
          <a href="/"> <div className="logo bg-img-contain"></div></a>
        </div>

        <div className="nav-links">
          <Link to="/" onClick={scrollToTop}>Home</Link>
          <Link to="/about" onClick={scrollToTop}>About</Link>
          <div className="dropdown">
            <span
              className="dropdown-toggle"
              onClick={toggleDropdown}
            >
              Services
            </span>
            <div
              className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}
            >
              <Link to="/businessLaunchpad" onClick={scrollToTop}>Business Launchpad</Link>
              <Link to="/digitalMarketing"onClick={scrollToTop} >Digital Marketing</Link>
              <Link to="/brandingAndDesign" onClick={scrollToTop}>Branding and Design</Link>
              <Link to="/publicRelations" onClick={scrollToTop}>Public Relations</Link>
              <Link to="/websiteDevelopment" onClick={scrollToTop}>Website Development</Link>
            </div>
          </div>
          <Link to="/blog" onClick={scrollToTop}>Blog</Link>
          <Link to="/contact" onClick={scrollToTop}>Contact</Link>
        </div>

        <div className="contact-box">
          <div
            className="grid-icon bg-img-contain"
            type="button"
            onClick={toggleCanvas}
          ></div>
          <Link to="/contact" className="cta" onClick={scrollToTop}>Contact Us</Link>
        </div>
      </div>

      <div className={`overlay ${isCanvasOpen ? 'show' : ''}`} onClick={toggleCanvas}></div>
      <div className={`offcanvas offcanvas-end offcanvas-header-parent ${isCanvasOpen ? 'show' : ''}`}>
        <div className="offcanvas-header">
          <div className="canvas-logo bg-img-contain"></div>
          <button
            type="button"
            className="btn-close close-canvas"
            onClick={toggleCanvas}
          ></button>
        </div>
        <div className="offcanvas-body canvas-body">
          <h4
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="500">About Us</h4>
          <p data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="500">DIwise is a PR Marketing Firm with expertise in research & technology that will understand your needs and surpass your expectations.
          </p>
          <h4 className='contact-us'> Contact us</h4>
          <a href="mailto:info@diwise.in" className="icon-boxh">
            <span className="iconsh"><MdOutlineMail /></span>
            <p className="address">info@diwise.in</p>
          </a>
          <a href="mailto: diwiseltd27@gmail.com" className="icon-boxh">
            <span className="iconsh"><MdOutlineMail /></span>
            <p className="address"> diwiseltd27@gmail.com</p>
          </a>
          <a href="tel:+918482936866" className="icon-boxh">
            <span className="iconsh"><HiOutlinePhone /></span>
            <p className="address">+91 84829 36866</p>
          </a>
          <a className="icon-boxh" href="https://www.google.com/maps/place/10+Biz+Park/@18.5752056,73.9098664,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2c147b8b70951:0x8614c143f0b9c8c!8m2!3d18.5752056!4d73.9098664!16s%2Fg%2F11ft03mdm8?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank">
            <span className="iconsh"><IoLocationOutline /></span>
            <p className="address">Office No. 214-216, 10 Biz Park, Near Symbiosis Law College, Airport Road, Vimannagar, Pune- 411014</p>
          </a>
        </div>
      </div>


      <div className="mobile-nav-parent">

        <div className="mobile-nav-comtainer">
          <a href="/"> <div className="nav-logo bg-img-contain"></div></a>

          {mobilenav ? <span onClick={toggleMobileNav} className='menu-icon'><CgClose /></span> :
            <span onClick={toggleMobileNav} className='menu-icon'><TbMenu2 /></span>

          }


        </div>

        {mobilenav &&
          <div className="nav-links">
            <Link
              to="/"
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-delay="100"
              onClick={toggleMobileNav}
          
            >
              Home
            </Link>

            <Link
              to="/about"
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-delay="200"
              onClick={toggleMobileNav}
            >
              About
            </Link>

            <div
              className="dropdown"
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-delay="300"
            >
              <span className="dropdown-toggle" onClick={toggleDropdown}>
                Services
              </span>
              <div className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
                <Link to="/businessLaunchpad" onClick={toggleMobileNav}>
                  Business Launchpad
                </Link>
                <Link to="/digitalMarketing" onClick={toggleMobileNav}>
                  Digital Marketing
                </Link>
                <Link to="/brandingAndDesign" onClick={toggleMobileNav}>
                  Branding and Design
                </Link>
                <Link to="/publicRelations" onClick={toggleMobileNav}>
                  Public Relations
                </Link>
                <Link to="/websiteDevelopment" onClick={toggleMobileNav}>
                  Website Development
                </Link>
              </div>
            </div>

            <Link
              to="/blog"
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-delay="400"
              onClick={toggleMobileNav}
            >
              Blog
            </Link>

            <Link
              to="/contact"
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-delay="500"
              onClick={toggleMobileNav}
            >
              Contact
            </Link>
          </div>
        }
      </div>
    </>
  );
}

export default Header;

