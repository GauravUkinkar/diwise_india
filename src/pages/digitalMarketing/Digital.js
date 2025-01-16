import React from 'react'
import "./Digital.scss";
import ServiceCol from '../../components/servicecol/ServiceCol'
import { FaCalendarCheck, FaRegCalendarCheck } from "react-icons/fa";
import TwoColumn from '../../components/twoColumn/TwoColumn';
import Hook from '../../components/hook/Hook'
import video1 from "../../assets/service/DigitalMarketing.mp4";

function Digital() {
  return (
    <>

<TwoColumn 
    videoSrc={video1}
                videoAlt="PR Video"
                autoPlay={true}
                loop={true}
                muted={true}
    heading="Digital Marketing and "
    highlight="Search Engine Optimisation"    
    para = "Our comprehensive digital marketing strategies are tailored to help healthcare businesses thrive in a competitive digital landscape. From Search Engine Optimisation (SEO) and content marketing to social media management and paid advertising, we focus on enhancing your online visibility and driving meaningful engagement. Our data-driven approach ensures your brand reaches the right audience globally, increasing website traffic, generating quality leads, and improving conversion rates. With a team of experts utilising the latest tools and trends, we craft strategies that not only elevate your digital presence but also deliver measurable results for sustained growth."
    
    
    
    
    
    /> 


    <ServiceCol
    left_heading="Expert Digital Marketing for "
    highlight="Global Impact"  
    para = "DIwise  offers expert digital marketing services tailored to help your business stand out on a global scale. Our deep understanding of Search Engine Optimisation (SEO) and cutting-edge techniques ensure that your brand is visible, relevant, and engaging to international audiences."
    btn = "Go Global Today"
    icon_top = {<FaRegCalendarCheck />}
    heading_top = "Advanced SEO Techniques"
    para_top = "Drive organic growth with our expert SEO that applies cutting-edge strategies to boost your search engine rankings and attract qualified traffic."
    icon_middle = {<FaCalendarCheck />}
    heading_middle = "Data-Driven Marketing Solutions"
    para_middle = "Maximise ROI by leveraging data-driven insights to optimise your marketing campaigns for precise targeting and measurable improvements."
    icon_bottom = {<FaCalendarCheck />}
    heading_bottom = "Engaging Content Creation"
    para_bottom = "Develop high-quality, relevant content that resonates with your target audience, and establishes your brand as an industry leader."

    
    
    />
     <Hook/>

    
    
    
    
    
    
    </>
  )
}

export default Digital
