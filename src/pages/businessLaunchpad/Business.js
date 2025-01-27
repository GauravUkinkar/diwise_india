import React from 'react'
import ServiceCol from '../../components/servicecol/ServiceCol'
import { FaCalendarCheck, FaRegCalendarCheck } from "react-icons/fa";
import TwoColumn from '../../components/twoColumn/TwoColumn';
import Hook from '../../components/hook/Hook'
import video1 from "../../assets/service/Buissnesssetup.mp4";
import { Helmet } from 'react-helmet';

function Business() {
  return (
    <>

<Helmet>
        <title>Global Business Consulting Services | DIwise - Empowering Sustainable Growth</title>
        <meta name="description" content="Unlock your business potential with DIwise! Our global consulting services include tailored market entry strategies, legal compliance, and operational optimization to help your business thrive internationally. Let’s grow your brand and digital presence with confidence." />
        <meta name="keywords" content="global business consulting, market entry strategies, legal compliance, operational optimization, international business growth, brand building, digital presence, business advisory, global market strategies, sustainable growth, DIwise consulting, business formation services, international markets, Pune business consulting" />
      </Helmet>

    <TwoColumn 
    videoSrc={video1}
                videoAlt="PR Video"
                autoPlay={true}
                loop={true}
                muted={true}
    heading="Business Formation and "
    highlight="Advisory"    
    para = "Our experienced consultants offer comprehensive guidance for establishing and expanding operations in international markets. With deep expertise in global business dynamics, we assist in navigating complex legal compliance requirements, ensuring your operations adhere to local and international regulations. Our team works closely with you to develop effective market entry strategies, identify growth opportunities, and address potential challenges. We also support you in attracting and hiring top talent to build a strong workforce and optimise operational processes for maximum efficiency. Our goal is to empower your business for sustainable growth and long-term success on the global stage."
    
    
    
    
    
    /> 


    <ServiceCol
    left_heading="Propel Your Business to Global Heights with "
    highlight="DIwise "  
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
      <Hook/>
    
    
    
    
    
    </>
  )
}

export default Business
