'use client'
import {useState, useEffect, useLayoutEffect, useRef, useCallback} from 'react'
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
import PartnersBanner from "@/components/PartnersBanner"
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from 'swiper/modules';
import { Navigation, Scrollbar } from 'swiper/modules';
import "swiper/css";

import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import TeamSlider from '@/components/TeamSlider'

const AboutPage = () => {
    const sliderRef = useRef(null);
 
  return (
    <>
      <Head>
        <title>Stance Health</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PartnersBanner />
    <section className='partners-sec'>
        <div className='container-fluid'>
          <div className="row">
            <div className='col-md-12'>
               <div className='partners-slider'>
               <Swiper
                            ref={sliderRef}
                                className="partners-swiper"
                                modules={[Autoplay ,FreeMode ]}
                                
                                autoplay={{
                                    delay: 1000,
                                    disableOnInteraction: false,
                                }}
                                slidesPerView={6}
                                spaceBetween={0}
                                freeMode={true}
                                loop={true}
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
                                        slidesPerView: 6,
                                        spaceBetween: 40,
                                    },
                                }}
                                // onBeforeInit={(swiper) => {
                                // }}
                                // ref={sliderRef}
                            >

                                            <SwiperSlide>
                                                <div className="partners-img">
                                                    <Image src="/assets/images/p-1.svg" width={160} height={65} alt="" />
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="partners-img">
                                                    <Image src="/assets/images/p-2.svg" width={160} height={65} alt="" />
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="partners-img">
                                                    <Image src="/assets/images/p-3.svg" width={160} height={65} alt="" />
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="partners-img">
                                                    <Image src="/assets/images/p-4.svg" width={160} height={65} alt="" />
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="partners-img">
                                                    <Image src="/assets/images/p-5.svg" width={160} height={65} alt="" />
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="partners-img">
                                                    <Image src="/assets/images/p-6.svg" width={160} height={65} alt="" />
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="partners-img">
                                                    <Image src="/assets/images/p-7.svg" width={160} height={65} alt="" />
                                                </div>
                                            </SwiperSlide>

                            </Swiper>
               </div>
            </div>
          </div>
        </div>
    </section>
      <section className='side-img-sec sec'>
        <img className="vec-grad" src="/assets/images/grad.svg" />
        <div className="container">
           <div className="row items-center">
           <div className="col-md-6">
               <div className='side-con'>
               <h3 className="sec-head">
               Building Long-Term Partnerships
              </h3>
              <ul>
                <li><img src="/assets/images/tick.svg" />Medical Professionals: We specialize in elevating services for Orthopedic Specialists, Physiotherapists & Hospitals. Our focus on Assessments, Outcome -Centric Treatment protocols, and At-home engagement improve quality of care. </li>
                <li><img src="/assets/images/tick.svg" />Sports Academies and Clubs: Amateur Clubs or Professional - leagues, we help in ensuring athletes reach their potential. Building sport specific protocols, we have had experience in mentoring entire teams while also focusing on individual athlete performance. </li>
                <li><img src="/assets/images/tick.svg" />Corporate Entities: By combining in-office MSK Assessments, High-Quality experts and technology-first at-home solutions, we ensure your employees are always building themselves for a better tomorrow.</li>
              </ul>
               </div>
             </div>
             <div className="col-md-6">
               <div className='side-img side-img-right'>
               
               <img src='/assets/images/side-img-2.png' />
               </div>
             </div>
             
           </div>
        </div>
      </section>

    </>
  )
}

export default AboutPage