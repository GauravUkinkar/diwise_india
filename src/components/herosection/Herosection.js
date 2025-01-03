import './Herosection.scss';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import Header from '../header/Header';
import ReactPlayer from 'react-player';
// import video from '../../assets/hero/dvideo.webm'
import video from '../../assets/hero/dvideo.webm'
import video2 from '../../assets/hero/mob-video.webm'


function Herosection() {
    return (
        <>
            {/* <div className="hero-parent parent">

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
                    <div className="swiper-overlay"></div>
                        <div className="slide slide-img1 bg-img-cover">
                       
                            <div className="slide-text-box container">
                                <h2 className='slide-heading' data-aos="fade-up" data-aos-delay="200">DIwise Your <br />Step Towards<br /> <span className='highlight2' data-aos="fade-up" data-aos-delay="200">Digital Success</span></h2>
                                <Link className='cta' data-aos="fade-up" data-aos-delay="400">Know More</Link>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-overlay"></div>
                        <div className="slide slide-img1 bg-img-cover">
                            <div className="slide-text-box container">
                                <h2 className='slide-heading' data-aos="fade-up" data-aos-delay="200">Your Strategic <br />Partner for<br /> <span className='highlight2' data-aos="fade-up" data-aos-delay="200">Digital Excellence</span></h2>
                                <Link className='cta' data-aos="fade-up" data-aos-delay="400">Know More</Link>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-overlay"></div>
                        <div className="slide slide-img1 bg-img-cover">
                            <div className="slide-text-box container">
                                <h2 className='slide-heading' data-aos="fade-up" data-aos-delay="200">Innovative Strategies for<br /> Brands That Dare to<br /> <span className='highlight2' data-aos="fade-up" data-aos-delay="200">Stand Out!</span></h2>
                                <Link className='cta' data-aos="fade-up" data-aos-delay="400">Know More</Link>
                            </div>
                        </div>

                    </SwiperSlide>

                </Swiper>
            </div> */}


            <div className="herosection-parent">
                <div className="video-section desktop">
                    <ReactPlayer
                        url={video}
                        playing={true}       // Video starts playing automatically
                        playsinline={true}   // Ensure inline playback on mobile devices
                        muted={true}         // Mute video to comply with autoplay policies
                        loop={true}          // Loop video
                        controls={false}     // Hide player controls
                        width="100%"         // Full width
                        height="100%"        // Full height
                        className="react-player"
                    />
                </div>
                <div className="video-section mobile">
                    <ReactPlayer
                        url={video2}
                        playing={true}       // Video starts playing automatically
                        playsinline={true}   // Ensure inline playback on mobile devices
                        muted={true}         // Mute video to comply with autoplay policies
                        loop={true}          // Loop video
                        controls={false}     // Hide player controls
                        width="100%"         // Full width
                        height="100%"        // Full height
                        className="react-player"
                    />
                </div>
            </div>


        </>

    )
}

export default Herosection