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
  <div style={{ width: '100%', height: '100vh' }} className="video-section">
    <ReactPlayer
      url={video}
      playing={true}       // Video starts playing automatically
      playsinline={true}   // Ensure inline playback on mobile devices
      autoplay={true}      // Auto play the video
      loop={true}          // Loop the video continuously
      controls={false}     // Hide video controls
      width="100%"         // Ensure it fills the full width
      height="100%"        // Ensure it fills the full height
      className="react-player"
    />
  </div>
</div>


        </>

    )
}

export default Herosection