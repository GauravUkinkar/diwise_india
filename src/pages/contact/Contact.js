import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Contact.scss";
import { PiPhoneLight } from "react-icons/pi";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMail, AiTwotoneMail } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

function Contact() {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
      easing: "ease-in-out", // Easing for the animation
    });
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://admin.backend.diwise.in/contact/addContact`,
        contactData
      );
      // setContactData({
      // name: "",
      // email: "",
      // contact: "",
      // message: "",
      // })
      console.log(response, "ddddd");
      alert("Form Submitted Successfully");
    } catch (error) {
      alert("Something Wrong");
    }
  };

  return (
    <>
      <Helmet>
        <title>Diwise contact us now for support</title>

        <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
        <meta
          name="keywords"
          content="contact, contact us, contact now, support, quick support, just fill, contact diwise, support diwise"
        />
        <meta
          name="description"
          content="Fill up the form and click submit button. | Diwise- Contact Form"
        />
      </Helmet>
      <div className="contact-parent parent">
        <div
          className="contact-container container  "
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          <div className="contact-left">
            <div className="left-cont">
              <h2
                className="contact-heading"
                data-aos-duration="500"
                data-aos-delay="300"
              >
                Let’s Connect and <span className="highlight">Collaborate</span>
              </h2>
              <p
                className="contact-p"
                data-aos-duration="500"
                data-aos-delay="500"
              >
                Contact us to create impactful strategies for your brand's
                digital success.
              </p>
              <form className="contact-form" onSubmit={onSubmit}>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={contactData.name}
                  onChange={(e) =>
                    setContactData({ ...contactData, name: e.target.value })
                  }
                />

                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={contactData.email}
                  onChange={(e) =>
                    setContactData({ ...contactData, email: e.target.value })
                  }
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  name="contact"
                  value={contactData.contact}
                  onChange={(e) => {
                    const value = e.target.value;
                    // Allow only numbers and limit to 10 characters
                    if (/^\d*$/.test(value)) {
                      setContactData({
                        ...contactData,
                        contact: e.target.value,
                      });
                    }
                  }}
                  maxLength="10"
                />
                <textarea
                  rows={3}
                  placeholder="Message"
                  name="message"
                  value={contactData.message}
                  onChange={(e) =>
                    setContactData({ ...contactData, message: e.target.value })
                  }
                ></textarea>
                <button className="cta cta1">Submit</button>
              </form>
            </div>
          </div>

          <div
            className="contact-right"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="500"
          >
            <div className="orange-box"></div>
            <div className="right-cont">
              <h3
                data-aos="fade-up"
                data-aos-dalay="500"
                data-aos-duration="500"
              >
                Info
              </h3>
              <div className="contact-icon-box">
                <a href="mailto:info@diwise.uk">
                  {" "}
                  <span>
                    <AiOutlineMail />{" "}
                  </span>
                  <span>info@diwise.uk</span>
                </a>
              </div>
              {/* <div className="contact-icon-box">
                <a href="mailto: diwiseltd27@gmail.com">
                  {" "}
                  <span>
                    <AiOutlineMail />{" "}
                  </span>
                  <span> diwiseltd27@gmail.com</span>
                </a>
              </div> */}
              <div className="contact-icon-box">
                <a href="tel:+91 76666 01972">
                  {" "}
                  <span>
                    <PiPhoneLight />
                  </span>
                  <span> +91 76666 01972</span>
                </a>
              </div>
              <div className="contact-icon-box">
                <a
                  href="https://www.google.com/maps/place/10+Biz+Park/@18.5752055,73.9072754,17z/data=!4m7!3m6!1s0x3bc2c147b8b70951:0x8614c143f0b9c8c!8m2!3d18.5752056!4d73.9098664!15sCiVvZmZpY2UgTm86MjE0IDEwIEJpeiBQYXJrIHZpbWFuIG5hZ2FyWiciJW9mZmljZSBubyAyMTQgMTAgYml6IHBhcmsgdmltYW4gbmFnYXKSARpyZXRhaWxfc3BhY2VfcmVudGFsX2FnZW5jeZoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VST05qZFFUM0pCUlJBQuABAA!16s%2Fg%2F11ft03mdm8?entry=tts&g_ep=EgoyMDI0MDUwOC4wKgBIAVAD"
                  target="_blank"
                >
                  {" "}
                  <span>
                    <CiLocationOn />
                  </span>
                  <span className="office_address">
                    Office No. 214-216, 10 Biz Park, Near Symbiosis Law
                    College,&nbsp; Airport Road, Vimannagar, Pune - 411014
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
