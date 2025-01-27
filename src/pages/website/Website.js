import React from 'react'
import ServiceCol from '../../components/servicecol/ServiceCol'
import { FaCalendarCheck, FaRegCalendarCheck } from "react-icons/fa";
import TwoColumn from '../../components/twoColumn/TwoColumn';
import img from "../../img/img.webp"
import Hook from '../../components/hook/Hook'
import video1 from "../../assets/service/WebDevelopment.mp4";
import { Helmet } from 'react-helmet';

function Website() {
  return (
    <>

<Helmet>
        <title>Custom Web & Mobile App Development Services | DIwise - Transform Your Digital Vision</title>
        <meta name="description" content="Create powerful digital solutions with DIwise! Our custom web and mobile app development services focus on exceptional design, seamless functionality, and user-friendly experiences to help your business grow globally." />
        <meta name="keywords" content="web development services, custom web development, mobile app development, iOS app development, Android app development, UX design, responsive web design, user experience design, mobile applications, digital solutions, scalable web apps, custom digital solutions, mobile app development company, web design agency in Pune" />
      </Helmet>
       <TwoColumn 
    videoSrc={video1}
        videoAlt="Website Video"
        autoPlay={true}
        loop={true}
        muted={true}
    heading="Web and App "
    highlight="Development"    
    para = "We specialise in creating custom web and mobile applications that seamlessly blend stunning design with exceptional functionality. Our team is dedicated to delivering outstanding user experiences through intuitive interfaces, responsive designs, and optimised performance across all devices. By leveraging cutting-edge technology, industry best practices, and a deep understanding of user behaviour, we craft digital solutions tailored to your business objectives. From dynamic websites to feature-rich mobile apps, our solutions are built for scalability, reliability, and global accessibility. Partner with us to transform your digital vision into a powerful, results-driven reality that drives growth and engagement."
    
    /> 


    <ServiceCol
    left_heading="DIwise Custom Web and App"
    highlight="Solutions for Growth"  
    para = "Our team of skilled developers crafts cutting-edge web and mobile applications. From sleek websites to powerful mobile apps, we ensure your digital presence is engaging, user-friendly, and aligned with your business goals."
    btn = "Enhance Your Reach"
    icon_top = {<FaRegCalendarCheck />}
    heading_top = "Custom Web Development"
    para_top = "Create a website that perfectly reflects your brand identity. Our expert developers craft responsive, user-friendly designs for your audience."
    icon_middle = {<FaCalendarCheck />}
    heading_middle = "Mobile App Development"
    para_middle = "Enhance your user experience with custom mobile apps. Our team develops innovative iOS and Android applications that deliver across all devices."
    icon_bottom = {<FaCalendarCheck />}
    heading_bottom = "User Experience (UX) Design"
    para_bottom = "Prioritise user satisfaction with our expert UX design services. We create intuitive functional interfaces for a positive user experience."

    
    
    />


    <Hook/>


    
    
    
    
    
    
    
    
    </>
  )
}

export default Website
