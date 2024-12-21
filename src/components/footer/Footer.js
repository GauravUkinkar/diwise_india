import React from "react";
import "./Footer.scss";
import logo from "../../assets/white-logo.svg";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

function Footer() {
  return (
    <div className="footer parent bg-img-cover">
      <div className="footer-container container">
        {/* Left Section */}
        <div className="footer-left">
          <img src={logo} alt="Logo" />
          <p>Say Hello!</p>
          <a href="mailto:needhelp@site.com" className="email-link">
            needhelp@site.com
          </a>
        </div>

        {/* Middle Section */}
        <div className="footer-middle">
          <h3>Links</h3>
          <ul>
            <li><a href="/about-us">About us</a></li>
            <li><a href="/team">Meet our team</a></li>
            <li><a href="/case-stories">Case stories</a></li>
            <li><a href="/news">Latest news</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h3>Other Links</h3>
          <ul>
            <li><a href="/faq">Faq</a></li>
            <li><a href="/terms">Terms of use</a></li>
            <li><a href="/disclaimer">Disclaimer</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Last Section */}
        <div className="footer-last">
          <div className="social-icons">
            <a href="https://www.facebook.com/DIwiseLtd" target="_blank">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/diwiseltd/" target="_blank" >
              <FaInstagram />
            </a>
            <a href="https://x.com/i/flow/login?redirect_after_login=%2FDIwiseLtd" target="_blank" >
            <FaXTwitter />
            </a>
            <a href="https://www.linkedin.com/company/diwiseltd/" target="_blank" >
            <FaLinkedinIn />
            </a>
          </div>
          <p>
            <a href="tel:+1800160616481" className="tel-link">
              (800) 160-616481
            </a>
          </p>
          <p>
            <a
              href="https://www.google.com/maps?q=185+10th+Street,+Office+272+Berlin,+DE+21562"
              target="_blank"
              rel="noopener noreferrer"
              className="map-link"
            >
              185 10th Street, Office 272 Berlin, DE 21562
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
