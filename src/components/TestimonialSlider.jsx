'use client'
import React, {useRef, useCallback} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import "swiper/css";

import Image from 'next/image';
const TestimonialSlider = () => {
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
                        Testimonial
                        </h3>
                    </div>
                    <div className="col-12">
                        <Swiper
                        ref={sliderRef}
                            className="test-swiper"
                            modules={[Autoplay]}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            slidesPerView={4}
                            spaceBetween={0}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                1024: {
                                    slidesPerView: 3,
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
                                            <div className="test-card">
                                                <div className="test-pf">
                                                    <Image src="/assets/images/quote.svg" className='quote' alt="" width={100} height={100} />
                                                    <Image src="/assets/images/test.png" className='prof' alt="" width={100} height={100} />
                                                </div>
                                                <div className="test-det">
                                                    <p className="para">
                                                    Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s
                                                    </p>
                                                    <div className="test-bt">
                                                        <h3>Viraj Sign</h3>
                                                        <p>Golfer</p>
                                                    </div>
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
                </div>
            </div>
        </section>
    )
}

export default TestimonialSlider