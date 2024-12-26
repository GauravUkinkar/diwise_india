import React from 'react'
import "./Digital.scss";
import ServiceCol from '../../components/servicecol/ServiceCol'
import { FaCalendarCheck, FaRegCalendarCheck } from "react-icons/fa";
import TwoColumn from '../../components/twoColumn/TwoColumn';
import img from "../../img/img.webp"
import Hook from '../../components/hook/Hook'

function Digital() {
  return (
    <>

<TwoColumn 
    imageSrc={img}
    heading="Digital Marketing and "
    highlight="Search Engine Optimisation"    
    para = "Our comprehensive digital marketing strategies, including Search Engine Optimisation (SEO), content marketing, social media management, and paid advertising, are designed to enhance your visibility, drive global engagement, and boost your bottom line."
    
    
    
    
    
    /> 


    <ServiceCol
    left_heading="Expert Digital Marketing for "
    highlight="Global Impact"  
    para = "DIwise Global offers expert digital marketing services tailored to help your business stand out on a global scale. Our deep understanding of Search Engine Optimisation (SEO) and cutting-edge techniques ensure that your brand is visible, relevant, and engaging to international audiences."
    btn = "Go Global Today"
    icon_top = {<FaRegCalendarCheck />}
    heading_top = "Advanced SEO Techniques"
    para_top = "Drive Organic Growth with our expert SEO that applies cutting-edge strategies to boost your search engine rankings and attract qualified traffic."
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
