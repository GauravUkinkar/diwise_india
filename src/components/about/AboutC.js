import { useEffect, useState } from "react";
import "./About.scss";
import { IoIosArrowDown } from "react-icons/io";
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
      <div className="img bg-img-cover" data-aos="fade-right" data-aos-delay="200"></div>
      <h3 data-aos="fade-right" data-aos-delay="400">Lorem <span className='highlight'>ipsum</span></h3>
      <p data-aos="fade-right"  data-aos-delay="600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam odit commodi possimus ad officiis autem voluptatibus maiores distinctio quia veritatis aliquam vitae perspiciatis ab facilis tempore porro nobis inventore similique optio, deleniti quod esse.</p>
      <a href="" className="cta" data-aos="fade-right" data-aos-delay="200">Discover More</a>

    </div>
    <div className="about-right" data-aos="fade-up" data-aos-delay="200">
      <h2 data-aos="fade-up" data-aos-delay="400">Why <span className='highlight'>Choose Us?</span></h2>
      <p data-aos="fade-up" data-aos-delay="600">Lorem, ipsum.10lorem20Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam odit commodi possimus ad officiis autem voluptatibus maioresLorem, ipsum.10lorem20Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam odit commodi possimus ad officiis autem voluptatibus maiores</p>


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
                    "Honesty and fairness are the guidelines By which we measure all our actions. We dedicate ourselves to walking this moral high ground.",
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
                      className={`accordion-icon ${
                        openAccordion === index ? "rotate" : ""
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

            <p data-aos="fade-up" data-aos-delay="1000">Lorem, ipsum.10lorem20Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam odit commodi possimus ad officiis autem voluptatibus maiores Lorem, ipsum.10lorem20Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam odit commodi possimus ad officiis autem voluptatibus maiores</p>
          

      


    </div>
    </div>
  </div>
  
  </>
  )
}

export default About