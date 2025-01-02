import React from 'react'
import TwoColumn from '../../components/twoColumn/TwoColumn'
import img from "../../img/img.webp"
import AboutC from '../../components/about/AboutC'
import LogoMarque from '../../components/logoMarque/LogoMarque'
import Founder from '../../components/founder/Founder'
import ServiceCol from '../../components/servicecol/ServiceCol'
import { Link } from 'react-router-dom'
import './About.scss';


function About() {
  return (
    <>
      <TwoColumn
        imageSrc={img}
        heading="About DIwise"
        highlight="About"
        para="DIwise is a PR and digital marketing firm specializing in research-driven strategies and innovative technology. We excel in building strong, impactful online identities for individuals and organisations through comprehensive research, in-depth analysis, and a wide range of digital services.
Our diverse clientele includes individuals and organisations driven by a vision to create meaningful social impact, with a special focus on political and social leaders ready to harness the power of social media. Our expert team collaborates closely with clients to craft strategies aligned with their goals, ensuring measurable results through well-defined KPIs and an unwavering commitment to excellence.
"





      />

      <LogoMarque />
      <Founder />

{/* diwise-uk--and global------- */}
      <div className="two-part parent">
        <div className="two-part-container container">

          <div className="two-part-left">
            <h3>Diwise global</h3>
            <p className='two-part-p'>Based on a worldwide vision, DIwise Global serves as a dynamic business launchpad, offering expert digital marketing solutions to help brands thrive across international markets.</p>
            <Link className='cta' to='#'>Know More</Link>
          </div>

          <div className="two-part-left">
            <h3>Diwise uk</h3>
            <p className='two-part-p'>Positioned in the UK, DIwise specialises in tailored digital marketing strategies, acting as a launchpad for businesses to establish a strong market presence and drive growth.</p>
            <Link className='cta' to='#'>Know More</Link>
          </div>

        </div>
      </div>





    </>
  )
}

export default About