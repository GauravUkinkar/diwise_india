import React from 'react'
import ServiceCol from '../../components/servicecol/ServiceCol'
import { FaCalendarCheck, FaRegCalendarCheck } from "react-icons/fa";
import TwoColumn from '../../components/twoColumn/TwoColumn';
import Hook from '../../components/hook/Hook'
import video1 from "../../assets/service/PublicRelations.mp4";
import { Helmet } from 'react-helmet';
import img1 from "../../assets/service/public/Crisis-Communication-Management.png"
import img2 from '../../assets/service/public/Media-Relations.png'
import img3 from '../../assets/service/public/Strategies-Press-Release-Distribution.png'


function Public() {
  return (
    <>
     <Helmet>
        <title>Public Relations & Media Outreach Services | DIwise - Build Trust & Enhance Brand Reputation</title>
        <meta name="description" content="Boost your brand's reputation with DIwise! Our expert PR services include media relations, press release distribution, and crisis communication management to ensure your brand message reaches the right audience and builds trust globally." />
        <meta name="keywords" content="public relations services, media relations, press release distribution, crisis communication, brand reputation management, PR agency, strategic communication, media outreach, global PR services, brand visibility, crisis management services, public perception, PR experts in Pune, strategic PR solutions" />
      </Helmet>
    <TwoColumn 
    videoSrc={video1}
            videoAlt="PR Video"
            autoPlay={true}
            loop={true}
            muted={true}
 
    heading="Public Relations and "
    highlight="Outreach"    
    para = "Our PR services encompass media relations, press release distribution, crisis management, and strategic communication planning. We work closely with clients to craft compelling narratives that resonate with target audiences and build trust across diverse markets. Our team ensures your brand's message reaches the right platforms, fostering credibility and positive public perception. In times of crisis, we act swiftly with well-prepared strategies to mitigate risks and safeguard your brand's reputation. With a focus on transparency and consistency, we help your brand maintain a strong and reliable presence in an ever-evolving media landscape."
    
    
    
    
    
    /> 


    <ServiceCol
    left_heading="Elevate Your Brand with Our "
    highlight="PR Expertise"  
    para = "Enhance your brand's reputation and reach a global audience with our strategic PR and media outreach services. Our team of PR professionals ensure your message is heard loud and clear across all markets."
    btn = "Get Media Ready"
    icon_top = {img2}
    heading_top = "Media Relations"
    para_top = "Build strong connections with influential media outlets to secure positive coverage and enhance your brand's visibility."
    icon_middle = {img3}
    heading_middle = "Strategies Press Release Distribution"
    para_middle = "Distribute targeted press releases that resonate with your audience and drive meaningful media coverage through our global networks."
    icon_bottom = {img1}
    heading_bottom = "Crisis Communication Management"
    para_bottom = "We provide swift and strategic communication to safeguard your reputation so that you are prepared during difficult times."

    
    
    />
    <Hook/>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Public
