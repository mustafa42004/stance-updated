'use client'
import Image from "next/image"

import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';

const BannerBottom = () => {
    const container2 = useRef(null);
    const sections = useRef([]);
    const dots = useRef([]);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let ctx = gsap.context(() => {
          if (window.innerWidth > 768) {
            console.log('sec', container2.current);
            const img = container2.current.querySelector('img');
            var tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container2.current,
                    start: 'top top',
                    end: `+=2509`,
                    markers: false,
                    pin: true,
                    scrub: 2,
                }
            })
            sections.current.forEach((sec, index)=>{
                const img = sec.querySelector('.pr-img');
                const heading = sec.querySelector('.pr-con h3');
                const para = sec.querySelector('.pr-con p');
                if(1 < index + 1){
                    dots.current.forEach((dot, ind)=>{
                        if(index == ind){
                            tl.from(dot, {
                                duration: 1,
                                opacity: 0.5
                            })
                        }
                    })
                    tl.from(img, {
                        duration: 1,
                        yPercent: 20,
                        opacity: 0
                    })
                    tl.from(heading, {
                        duration: 1,
                        yPercent: 20,
                        opacity: 0
                    }, '-=0.5')
                    tl.from(para, {
                        duration: 1,
                        yPercent: 20,
                        opacity: 0
                    }, '-=0.5')
                }
                if(sections.current.length > index + 1){
                    tl.to(img, {
                        duration: 1,
                        yPercent: -20,
                        opacity: 0
                    })
                    tl.to(heading, {
                        duration: 1,
                        yPercent: -20,
                        opacity: 0
                    }, "-=0.5")
                    tl.to(para, {
                        duration: 1,
                        yPercent: -20,
                        opacity: 0
                    }, "-=0.5")
                }
            })
          
          }
        }, container2);
        return () => {
          ctx.revert();
        };
      }, []);

      const slideContent = [
        {
            imageSrc: "/assets/images/asses.svg",
            imageAlt: "Assess",
            title: "Assess",
            description: "Evaluate your MSK health comprehensively with Stance's advanced diagnostic tools and expert tests, gaining insights into your body's needs while discovering root causes for conditions. Our assessments pave the way for recovery and performance with personalized treatment plans tailored to your unique requirements."
        },
        {
            imageSrc: "/assets/images/rehab.svg",
            imageAlt: "Rehab",
            title: "Rehab",
            description: "Create a personalized recovery and performance plan tailored to your unique requirements. Stance provides expert guidance and tools to help you achieve your health goals effectively."
        },
        {
            imageSrc: "/assets/images/engage.svg",
            imageAlt: "Re-engage",
            title: "Re-engage",
            description: "Implement your personalized plan with Stance's support. Our platform provides the resources and expert advice needed to carry out your plan and achieve your health objectives."
        },
        {
            imageSrc: "/assets/images/enhance.svg",
            imageAlt: "Enhance",
            title: "Enhance",
            description: "Review your progress with regular check-ins and assessments. Stance helps you stay on track by providing insights and adjustments to ensure your continued success."
        }
    ];
    // const intro = useRef(null);
  
    // const setupSTs = (offset) => {
    //   if (window.innerWidth > 768) {
    //     console.log('sec', container2.current);
    //     container2.current.forEach((sec)=>{
    //       const img = sec.querySelector('img');
    //       var tl = gsap.timeline({
    //         scrollTrigger: {
    //           trigger: sec,
    //           start: 'top bottom',
    //           end: `bottom center`,
    //           markers: true,
    //           scrub: 1
    //         }
    //       })
    //       tl.from(img, {
    //         duration: 1,
    //         scale: 2,
    //       })
    //     })
    //   }
    // };
  
    // const initSTs = () => {
    //   ScrollTrigger.getAll().forEach((ST) => ST.kill());
    //   setupSTs();
    // };
  
    // useGSAP(
    //   () => {
    //     gsap.registerPlugin(ScrollTrigger);
    //     initSTs();
    //     ScrollTrigger.addEventListener('refreshInit', initSTs);
    //   },
    //   { scope: container2 }
    // );
  return (
    <>
        <div className="banner-bottom-sec" ref={container2}>
            <div className="dots">
                {
                    [...Array(4)].map((item,index)=>{
                        return(
                         
                                <span key={index} ref={el=> dots.current[index] = el}></span>
                           
                        )
                    })
                }
            </div>
            <div className="btm-wrapper">
                
{[...Array(4)].map((item, index) => {
    const { imageSrc, imageAlt, title, description } = slideContent[index];
    return (
        <section className="btm-sec sec" ref={el => sections.current[index] = el} key={index}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-12">
                        <div className="pr-img">
                            <Image src={imageSrc} alt={imageAlt} width={1200} height={1200} />
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-1 col-12">
                        <div className="pr-con">
                            <h3 className="sec-head green sm">{title}</h3>
                            <p className="para big">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
})}
            </div>
        </div>
    </>
  )
}

export default BannerBottom