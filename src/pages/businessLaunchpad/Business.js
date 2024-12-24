import React from 'react'
import ServiceCol from '../../components/servicecol/ServiceCol'
import { FaCalendarCheck, FaRegCalendarCheck } from "react-icons/fa";
import TwoColumn from '../../components/twoColumn/TwoColumn';
import img from "../../img/img.webp"

function Business() {
  return (
    <>
    <TwoColumn 
    imageSrc={img}
    heading="Business Formation and "
    highlight="Advisory"    
    para = "Our experienced consultants provide expert guidance on setting up operations in international markets. We help you navigate legal compliance, develop effective market strategies, hire best of talent and optimise your operations for global success."
    
    
    
    
    
    /> 


    <ServiceCol
    left_heading="Propel Your Business to Global Heights with "
    highlight="DIwise Global"  
    para = "Our expert consulting services empower businesses to conquer international markets with confidence. From navigating legal complexities to developing effective market entry strategies, we provide comprehensive support that ensures your business thrives on a global scale."
    btn = "Consult With Us"
    icon_top = {<FaRegCalendarCheck />}
    heading_top = "Tailored Market Entry Strategies"
    para_top = "Navigate new markets as our experts develop customised strategies helping you establish a strong foothold in international markets."
    icon_middle = {<FaCalendarCheck />}
    heading_middle = "Legal Compliance"
    para_middle = "Ensure compliance with international regulations, tax laws, and industry standards, minimising risks and ensuring smooth operations."
    icon_bottom = {<FaCalendarCheck />}
    heading_bottom = "Operational Optimisation"
    para_bottom = "Streamline your business with our consulting services, enhance efficiency, and drive sustainable growth."

    
    
    />
    
    
    
    
    
    </>
  )
}

export default Business
