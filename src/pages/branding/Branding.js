import React from 'react'
import ServiceCol from '../../components/servicecol/ServiceCol'
import { FaCalendarCheck, FaRegCalendarCheck } from "react-icons/fa";
import TwoColumn from '../../components/twoColumn/TwoColumn';
import Hook from '../../components/hook/Hook'
import video1 from "../../assets/service/prbranding.mp4";
import { Helmet } from 'react-helmet';
import img1 from "../../assets/service/brand/Brand-Strategy.png"
import img2 from "../../assets/service/brand/Content-Creation.png"
import img3 from '../../assets/service/brand/Logo-design.png'

function Branding() {
  return (
    <>

<Helmet>
        <title>Digital Marketing & SEO Services for Healthcare | DIwise - Global Impact Strategies</title>
        <meta name="description" content="Boost your healthcare business with DIwise! Our expert digital marketing services include advanced SEO, content marketing, and social media management to enhance online visibility, drive quality leads, and achieve sustained growth globally." />
        <meta name="keywords" content="digital marketing services, SEO for healthcare, content marketing, social media management, global marketing strategies, healthcare marketing, online visibility, lead generation, data-driven marketing, DIwise digital marketing, advanced SEO techniques, content creation, international audience engagement, Pune digital marketing services" />
      </Helmet>
     <TwoColumn 
    videoSrc={video1}
    videoAlt="Branding Video"
    autoPlay={true}
    loop={true}
    muted={true}
    heading="Branding and "
    highlight="Creative Services"    
    para = "Our expert branding team specialises in crafting strong, distinctive brand identities that resonate with audiences worldwide. We go beyond designing logos; we build comprehensive visual identities, impactful messaging, and engaging content that align seamlessly with your brand’s vision and values. From developing memorable logos to producing compelling digital and print assets, we ensure every brand touchpoint reflects consistency, clarity, and purpose. Our approach combines strategic insight with creative excellence to position your brand as a global leader. By fostering connections and enhancing brand recall, we aim to leave a lasting impression driving loyalty and success."
    
    
    
    
    
    /> 


    <ServiceCol
    left_heading="Elevate Your Brand with"
    highlight="DIwise "  
    para = "Our expertise in branding and creative services ensures that your business stands out in a crowded marketplace. From crafting compelling brand identities to producing engaging multimedia content, we are dedicated to helping you make a lasting impression."
    btn = "Grow Your Brand"
    icon_top = {img1}
    heading_top = "Brand Strategy"
    para_top = "Our experts will help you develop a comprehensive brand strategy. We'll create a unique brand identity that sets you apart."
    icon_middle = {img3}
    heading_middle = "Logo Design"
    para_middle = "We'll design a memorable and visually appealing logo that captures the essence of your brand along with brand guidelines."
    icon_bottom = {img2}
    heading_bottom = "Content Creation"
    para_bottom = "Our creative team will produce high-quality content that resonates with your target audience like copywriting, design, and multimedia services."

    
    
    />

<Hook/>
    
    
    
    
    
    
    </>
  )
}

export default Branding
