import React from 'react'
import ServiceCol from '../../components/servicecol/ServiceCol'
import { FaCalendarCheck, FaRegCalendarCheck } from "react-icons/fa";
import TwoColumn from '../../components/twoColumn/TwoColumn';
import img from "../../img/img.webp"

function Branding() {
  return (
    <>
     <TwoColumn 
    imageSrc={img}
    heading="Branding and "
    highlight="Creative Services"    
    para = "Our expert branding team will develop a strong and distinctive brand identity that resonates with your target audience worldwide. From logo design to content creation, we ensure your brand stands out in the global marketplace."
    
    
    
    
    
    /> 


    <ServiceCol
    left_heading="Elevate Your Brand with"
    highlight="DIwise Global"  
    para = "Our expertise in branding and creative services ensures that your business stands out in a crowded marketplace. From crafting compelling brand identities to producing engaging multimedia content, we are dedicated to helping you make a lasting impression."
    btn = "Grow Your Brand"
    icon_top = {<FaRegCalendarCheck />}
    heading_top = "Brand Strategy"
    para_top = "Our experts will help you develop a comprehensive brand strategy. We'll create a unique brand identity that sets you apart."
    icon_middle = {<FaCalendarCheck />}
    heading_middle = "Logo Design"
    para_middle = "We'll design a memorable and visually appealing logo that captures the essence of your brand along with brand guidelines."
    icon_bottom = {<FaCalendarCheck />}
    heading_bottom = "Content Creation"
    para_bottom = "Our creative team will produce high-quality content that resonates with your target audience like copywriting, design, and multimedia services."

    
    
    />
    
    
    
    
    
    
    </>
  )
}

export default Branding
