import React from 'react'
import ServiceCol from '../../components/servicecol/ServiceCol'
import { FaCalendarCheck, FaRegCalendarCheck } from "react-icons/fa";
import TwoColumn from '../../components/twoColumn/TwoColumn';
import img from "../../img/img.webp"

function Public() {
  return (
    <>
    <TwoColumn 
    imageSrc={img}
    heading="Public Relations and "
    highlight="Outreach"    
    para = "Our global PR services include media relations, press release distribution, and crisis management. We help you build and maintain a positive brand reputation across multiple markets, ensuring effective communication and crisis preparedness."
    
    
    
    
    
    /> 


    <ServiceCol
    left_heading="Elevate Your Brand with Our "
    highlight="PR Expertise"  
    para = "Enhance your brand's reputation and reach a global audience with our strategic PR and media outreach services. Our team of PR professionals ensure your message is heard loud and clear across all markets."
    btn = "Get Media Ready"
    icon_top = {<FaRegCalendarCheck />}
    heading_top = "Media Relations"
    para_top = "Build strong connections with influential media outlets to secure positive coverage and enhance your brand's visibility."
    icon_middle = {<FaCalendarCheck />}
    heading_middle = "Strategies Press Release Distribution"
    para_middle = "Distribute targeted press releases that resonate with your audience and drive meaningful media coverage through our global networks."
    icon_bottom = {<FaCalendarCheck />}
    heading_bottom = "Crisis Communication Management"
    para_bottom = "We provide swift and strategic communication to safeguard your reputation so that you are prepared during difficult times."

    
    
    />
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Public
