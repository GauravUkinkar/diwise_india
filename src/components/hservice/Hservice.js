import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './Hservice.scss';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { CgArrowLongRight } from 'react-icons/cg';
import { PiArrowBendUpRight } from 'react-icons/pi';



function Hservice() {
    return (
        <>
            <div className="hservice-parent parent">
                <div className="hservice-container container">
                    <h2>Our <span className='highlight'>Service</span></h2>
                    <Swiper
                        spaceBetween={20}
                        centeredSlides={false}
                        slidesPerView={4}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={false}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="hservice_Swiper"
                    >
                        <SwiperSlide>
                            <div className="service-card">
                                <div className="service-card-text-box">
                                    <div className="service-card-img  service-card-img1  bg-img-contain "></div>
                                    <h4 className='service-card-heading'>Business Launchpad</h4>
                                    <p className='s-card-p'>Expand your business globally. We offer comprehensive support, from developing market entry strategies to providing operational consulting.</p>
                                    <Link className='service-btn-icon' ><PiArrowBendUpRight /></Link>
                                    
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="service-card">
                                <div className="service-card-text-box">
                                    <div className="service-card-img  service-card-img2  bg-img-contain"></div>
                                    <h4 className='service-card-heading'>Digital Marketing</h4>
                                    <p className='s-card-p'>Elevate your online presence. From crafting engaging content and managing your social media, we'll drive global visibility and engagement.</p>
                                    <Link className='service-btn-icon' ><PiArrowBendUpRight /></Link>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="service-card">
                                <div className="service-card-text-box">
                                    <div className="service-card-img  service-card-img3  bg-img-contain"></div>
                                    <h4 className='service-card-heading'>Branding & Design</h4>
                                    <p className='s-card-p'>Make your brand unforgettable. Our team of creatives will design your logo, develop your brand story, and produce engaging multimedia content.</p>
                                    <Link className='service-btn-icon' ><PiArrowBendUpRight /></Link>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="service-card">
                                <div className="service-card-text-box">
                                    <div className="service-card-img  service-card-img4  bg-img-contain"></div>
                                    <h4 className='service-card-heading'>Public Realtion</h4>
                                    <p className='s-card-p'>Manage your reputation globally. We help you build and maintain a positive brand reputation, ensuring effective communication.</p>
                                    <Link className='service-btn-icon' ><PiArrowBendUpRight /></Link>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="service-card">
                                <div className="service-card-text-box">
                                    <div className="service-card-img  service-card-img5  bg-img-contain"></div>
                                    <h4 className='service-card-heading'>Website Development</h4>
                                    <p className='s-card-p'>Bring your digital vision to life. We specialise in creating user-friendly, responsive designs with the latest technology to meet your needs.

</p>
                                    <Link className='service-btn-icon' ><PiArrowBendUpRight /></Link>
                                </div>

                            </div>
                        </SwiperSlide>



                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Hservice