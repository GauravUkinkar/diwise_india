import React from 'react'
import Sectionindicator from '../sectionindicator/Sectionindicator'
import TwoColumn from '../twoColumn/TwoColumn'
import img from "../../img/img.webp"

function About(props) {
  return (
  <>
  {/* <Sectionindicator 
  section_indicator='About'
  /> */}
   <TwoColumn
    imageSrc={img}
    highlight="About"
    heading="About Us"
    para = "DIwise is a PR Marketing Firm with expertise in research & technology that will understand your needs and surpass your expectations.Image & brand building of either an individual or organization is our forte. We conduct comprehensive research and in-depth analysis, and with our wide range of digital services, we create an impactful online presence for our clients.Our clients are varied and include individuals and organizations with a strong sense to impact society. "
    button = "Discover More"
    
    
    
    />
  </>
  )
}

export default About