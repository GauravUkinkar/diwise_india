import React from 'react'
import ServiceCol from '../../components/servicecol/ServiceCol'
import { FaCalendarCheck, FaRegCalendarCheck } from "react-icons/fa";
import TwoColumn from '../../components/twoColumn/TwoColumn';
import img from "../../img/img.webp"
import Hook from '../../components/hook/Hook'

function Branding() {
  return (
    <>
     <TwoColumn 
    imageSrc={img}
    heading="Branding and "
    highlight="Creative Services"    
    para = "Our expert branding team specialises in crafting strong, distinctive brand identities that resonate with audiences worldwide. We go beyond designing logos; we build comprehensive visual identities, impactful messaging, and engaging content that align seamlessly with your brand’s vision and values. From developing memorable logos to producing compelling digital and print assets, we ensure every brand touchpoint reflects consistency, clarity, and purpose. Our approach combines strategic insight with creative excellence to position your brand as a global leader. By fostering connections and enhancing brand recall, we aim to leave a lasting impression driving loyalty and success."
    
    
    
    
    
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

<Hook/>
    
    
    
    
    
    
    </>
  )
}

export default Branding
