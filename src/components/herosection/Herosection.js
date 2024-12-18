import './Herosection.scss';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import Header from '../header/Header';


function Herosection() {
    return (
        <>
            <div className="hero-parent parent">
           
                <Swiper
                    spaceBetween={0}
                    centeredSlides={true}
                    autoplay={{
                        delay: 250000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="heroSwiper"
                >
                    <SwiperSlide>
                        <div className="overlay"></div>
                        <div className="slide slide-img1 bg-img-cover">
                         <div className="slide-text-box container">   
                            <h2 className='slide-heading'>We are <br/>Digital Marketing<br/> Creative Gigg</h2>
                            <Link className='cta'>Know More</Link>
                            </div>   
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="overlay"></div>
                        <div className="slide slide-img1 bg-img-cover">
                         <div className="slide-text-box container">   
                            <h2 className='slide-heading'>We2 are <br/>Digital Marketing<br/> Creative Gigg</h2>
                            <Link className='cta'>Know More</Link>
                            </div>   
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="overlay"></div>
                        <div className="slide slide-img1 bg-img-cover">
                         <div className="slide-text-box container">   
                            <h2 className='slide-heading'>We3 are <br/>Digital Marketing<br/> Creative Gigg</h2>
                            <Link className='cta'>Know More</Link>
                            </div>   
                        </div>

                    </SwiperSlide>
                    
                </Swiper>
            </div>
        </>
    )
}

export default Herosection