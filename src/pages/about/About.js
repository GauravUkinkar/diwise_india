import React from 'react'
import TwoColumn from '../../components/twoColumn/TwoColumn'
import img from "../../img/img.webp"
import AboutC from '../../components/about/AboutC'
import LogoMarque from '../../components/logoMarque/LogoMarque'
import Founder from '../../components/founder/Founder'
import ServiceCol from '../../components/servicecol/ServiceCol'


function About() {
  return (
    <>
      <TwoColumn
        imageSrc={img}
        heading="About Us"
        highlight="About"
        para="DIwise is a PR Marketing Firm with expertise in research & technology that will understand your needs and surpass your expectations.Image & brand building of either an individual or organization is our forte. We conduct comprehensive research and in-depth analysis, and with our wide range of digital services, we create an impactful online presence for our clients.Our clients are varied and include individuals and organizations with a strong sense to impact society. Our primary focus is on individuals with political & social backgrounds who are ready to wield the power of social media. Our team of experts sits down to strategize a plan aligned with the client’s vision. We do in-depth market research and industry analysis to achieve outstanding results.The KPIs are set up for every client, and our team strives to excel every time."





      />

      <LogoMarque />
      <Founder />

      <div className="two-part parent">
        <div className="two-part-container container">

          <div className="two-part-left">
            <h3>Lorem ipsum dolor sit.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam veritatis quia, magnam dolor quaerat culpa.</p>
            <Link to='#'>Know More</Link>
          </div>

          <div className="two-part-right">

          </div>

        </div>
      </div>





    </>
  )
}

export default About