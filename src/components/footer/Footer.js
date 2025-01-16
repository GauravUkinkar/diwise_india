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
      duration: 500, // Faster animation (500ms)
      easing: "ease-in-out", // Smooth animation
      once: true, // Trigger animation only once
    });
  }, []);

  return (
    <>


      {/* footer */}
      <div id="footer-anchor"></div>
      <div className="footer parent bg-img-cover">
        <div className="footer-container container">
          {/* Left Section */}
          <div className="footer-left">
            <img
              src={logo}
              alt="Logo"
              data-aos="fade-up"
              data-aos-delay="100" // Faster delay
              data-aos-anchor="#footer-anchor"
            />
            <p
              data-aos="fade-up"
              data-aos-delay="200" // Faster delay
              data-aos-anchor="#footer-anchor"
            >
              Say Hello!
            </p>
            <a
              href="mailto:
info@diwise.in"
              className="email-link"
              data-aos="fade-up"
              data-aos-delay="300" // Faster delay
              data-aos-anchor="#footer-anchor"
            >
              test@diwise.in
            </a>
          </div>

          {/* Middle Section */}
          <div className="footer-middle">
            <h3
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="#footer-anchor"
            >
              Links
            </h3>
            <ul>
              <li
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-anchor="#footer-anchor"
              >
                <a href="/">Home</a>
              </li>
              <li
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-anchor="#footer-anchor"
              >
                <a href="/about">About</a>
              </li>
              <li
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-anchor="#footer-anchor"
              >
                <a href="/blog">Blog</a>
              </li>
              <li
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-anchor="#footer-anchor"
              >
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="footer-right">
            <h3
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="#footer-anchor"
            >
              Services
            </h3>
            <ul>
              <li
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-anchor="#footer-anchor"
              >
                <a href="/businessLaunchpad">Business Launchpad</a>
              </li>
              <li
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-anchor="#footer-anchor"
              >
                <a href="/digitalMarketing">Digital Marketing</a>
              </li>
              <li
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-anchor="#footer-anchor"
              >
                <a href="/brandingAndDesign">Branding and Design</a>
              </li>
              <li
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-anchor="#footer-anchor"
              >
                <a href="/publicRelations">Public Relations</a>
              </li>
              <li
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-anchor="#footer-anchor"
              >
                <a href="/websiteDevelopment">Website Development</a>
              </li>
            </ul>
          </div>

          {/* Last Section */}
          <div
            className="footer-last"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-anchor="#footer-anchor"
          >
            <div
              className="social-icons"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor="#footer-anchor"
            >
              <a
                href="https://www.facebook.com/DIwiseLtd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/diwiseltd/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://x.com/i/flow/login?redirect_after_login=%2FDIwiseLtd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.linkedin.com/company/diwiseltd/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <p>
              <a href="tel:+918482936866" className="tel-link">
                +91  84829 36866
              </a>
            </p>
            <p>
              <a
                href="https://www.google.com/maps/place/10+Biz+Park/@18.5752056,73.9098664,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2c147b8b70951:0x8614c143f0b9c8c!8m2!3d18.5752056!4d73.9098664!16s%2Fg%2F11ft03mdm8?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="map-link"
              >
                Office no. 214-216, 10 Biz Park, Airport Road, Vimannagar, Pune - 411014
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
