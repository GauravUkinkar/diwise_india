import { useEffect, useState } from "react";
import "./About.scss";
import { IoIosArrowDown } from "react-icons/io";
import img from "../../assets/hero/hero.jpg";
import AOS from "aos";
import "aos/dist/aos.css";


function About() {

  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (ms)
      easing: "ease-in-out", // Animation easing
      once: true, // Whether the animation should happen only once
    });
  }, []);


  return (
    <>
      <div className="about parent" >
        <div className="about-container container" >
          <div className="about-left">
            <div className="img bg-img-cover" data-aos="fade-up" data-aos-delay="200" data-aos-anchor=".about-container">
              <img src={img} />
            </div>
            <h3 data-aos="fade-up" data-aos-delay="400">About <span className='highlight'>Us</span></h3>
            <p data-aos="fade-up" data-aos-delay="600">DIwise is a PR and digital marketing firm specialising in research-driven strategies and innovative technology. We excel in building impactful online identities for individuals and organisations, delivering tailored solutions that align with client visions and surpass expectations. </p>
            <a href="/about" className="cta" data-aos="fade-up" data-aos-delay="200">Discover More</a>
          </div>
          <div className="about-right" data-aos="fade-up" data-aos-delay="200">
            <h2 data-aos="fade-up" data-aos-delay="400">Why <span className='highlight'>Choose Us?</span></h2>
            <p data-aos="fade-up" data-aos-delay="600">At DIwise, we aim to build a unified, efficient team driven by passion, talent, and integrity, delivering exceptional results with every project. Our focus on in-depth research, innovative strategies, and cutting-edge technology ensures we exceed client expectations every time.</p>


            {/* Accordions */}
            <div className="accordion" data-aos="fade-up" data-aos-delay="800">
              {[
                {
                  title: "Technology",
                  content:
                    "Technology is a key to leading in any industry. Our technical team leverages it to provide streamlined processes and highly dependable solutions for our clients.",
                },
                {
                  title: "Integrity",
                  content:
                    "Honesty and fairness are the guidelines by which we measure all our actions. We dedicate ourselves to walking this moral high ground.",
                },
                {
                  title: "Continuous Improvement",
                  content:
                    "Excellence is a continuous process. Keeping up with the latest industrial trends and being up to date with newer technologies is reinforced within the team.",
                },
              ].map((item, index) => (
                <div key={index} data-aos="fade-up" data-aos-delay={400 * index}>
                  <button
                    className="accordion-header"
                    onClick={() => toggleAccordion(index)}
                  >
                    {item.title}
                    <span
                      className={`accordion-icon ${openAccordion === index ? "rotate" : ""
                        }`}
                    >
                      <IoIosArrowDown />
                    </span>
                  </button>
                  {openAccordion === index && (
                    <p className="accordion-content">{item.content}</p>
                  )}
                </div>
              ))}
            </div>

            <p data-aos="fade-up" data-aos-delay="1000">We value long-term relationships, continuous improvement, and collaborative partnerships, positioning ourselves as an integral part of your success story. With DIwise, your vision becomes our mission, and excellence is our promise.</p>





          </div>
        </div>
      </div>

    </>
  )
}

export default About