import { useEffect } from "react";
import "./Footer.scss";
import logo from "../../assets/white-logo.svg";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css"; 

function Footer() {
   useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration (ms)
        easing: "ease-in-out", // Animation easing
        once: true, // Whether the animation should happen only once
      });
    }, []);
  return (
    <div className="footer parent bg-img-cover">
      <div className="footer-container container">
        {/* Left Section */}
        <div className="footer-left">
          <img src={logo} alt="Logo" data-aos="fade-up" data-aos-delay="200" />
          <p data-aos="fade-up" data-aos-delay="400">Say Hello!</p>
          <a href="mailto:needhelp@site.com" className="email-link" data-aos="fade-up" data-aos-delay="600">
          test@diwise.in
          </a>
        </div>

        {/* Middle Section */}
        <div className="footer-middle">
          <h3 data-aos="fade-up" data-aos-delay="200">Links</h3>
          <ul>
            <li data-aos="fade-up" data-aos-delay="400"><a href="/">Home</a></li>
            <li data-aos="fade-up" data-aos-delay="600"><a href="/about">About</a></li>
            <li data-aos="fade-up" data-aos-delay="800"><a href="/blog">Blog</a></li>
            <li data-aos="fade-up" data-aos-delay="1000"><a href="/contact">Contact</a></li>
            
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h3 data-aos="fade-up" data-aos-delay="200">Services</h3>
          <ul>
            <li data-aos="fade-up" data-aos-delay="400"><a href="/faq">Business Launchpad</a></li>
            <li data-aos="fade-up" data-aos-delay="600"><a href="/terms">Digital Marketing</a></li>
            <li data-aos="fade-up" data-aos-delay="800"><a href="/disclaimer">Branding and Design</a></li>
            <li data-aos="fade-up" data-aos-delay="1000"><a href="/privacy-policy">Public Relations</a></li>
            <li data-aos="fade-up" data-aos-delay="1200"><a href="/privacy-policy">Website Developement</a></li>
          </ul>
        </div>

        {/* Last Section */}
        <div className="footer-last" data-aos="fade-up" data-aos-delay="200" >
  <div className="social-icons" data-aos="fade-up" data-aos-delay="400">
    <a href="https://www.facebook.com/DIwiseLtd" target="_blank" data-aos="fade-up" data-aos-delay="200">
      <FaFacebookF />
    </a>
    <a href="https://www.instagram.com/diwiseltd/" target="_blank" data-aos="fade-up" data-aos-delay="400">
      <FaInstagram />
    </a>
    <a href="https://x.com/i/flow/login?redirect_after_login=%2FDIwiseLtd" target="_blank" data-aos="fade-up" data-aos-delay="600">
      <FaXTwitter />
    </a>
    <a href="https://www.linkedin.com/company/diwiseltd/" target="_blank" data-aos="fade-up" data-aos-delay="800">
      <FaLinkedinIn />
    </a>
  </div>
  <p>
    <a href="tel:+918482936866" className="tel-link" data-aos="fade-up" data-aos-delay="1200">
      +91 8482936866
    </a>
  </p>
  <p>
    <a
      href="https://www.google.com/maps/place/10+Biz+Park/@18.5752056,73.9098664,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2c147b8b70951:0x8614c143f0b9c8c!8m2!3d18.5752056!4d73.9098664!16s%2Fg%2F11ft03mdm8?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
      target="_blank"
      rel="noopener noreferrer"
      className="map-link"
      data-aos="fade-up"
      data-aos-delay="1200"
    >
      Office no. 214-216, 10 Biz Park, Airport Road, Vimannagar, Pune- 411014
    </a>
  </p>
</div>

      </div>
    </div>
  );
}

export default Footer;
