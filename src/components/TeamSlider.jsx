'use client'
import React,{useRef, useCallback} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from 'swiper/modules';
import { Navigation, Scrollbar } from 'swiper/modules';
import "swiper/css";

import Image from 'next/image';
import Link from 'next/link';
const TeamSlider = () => {
    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);
    return (
        <section className="sec test-sec">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h3 className="sec-head">
                        Flawless Team
                        </h3>
                        <p className="para">
                        Experience That Matters..!!
                        </p>
                    </div>
                    <div className="col-12">
                        <div className="team-slider">
                            <Swiper
                            ref={sliderRef}
                                scrollbar={{
                                    hide: false,
                                    draggable: true,
                                }}
                                className="team-swiper"
                                modules={[Autoplay,Scrollbar]}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                slidesPerView={4}
                                spaceBetween={0}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1.3,
                                        spaceBetween: 20,
                                    },
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                        spaceBetween: 40,
                                    },
                                }}
                                // onBeforeInit={(swiper) => {
                                // }}
                                // ref={sliderRef}
                            >
                                {
                                    [...Array(5)].map((item,index)=>{
                                        return(
                                            <SwiperSlide key={index}>
                                                <div className="team-card">
                                                    <Image src="/assets/images/team.jpg" width={1500} height={1500} alt="" />
                                                    <div className="con">
                                                        <div className="tp">
                                                            <h3>
                                                            Riya Choudry
                                                            </h3>
                                                            <h4>Team Lead, Automation</h4>
                                                        </div>
                                                        <p className="para">
                                                        Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s
                                                        </p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                            <div className="tech-nav">
                                <button className='tech-prev' onClick={handlePrev}>
                                    <Image src="/assets/images/prev.svg" width={50} height={50} />
                                </button>
                                <button className='tech-next' onClick={handleNext}>
                                    <Image src="/assets/images/next.svg" width={50} height={50} />
                                </button>
                            </div>
                        </div>
                            <Link href="/" className='main-btn center'>
                                <span>Explore Now</span>
                            </Link>
                            
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamSlider