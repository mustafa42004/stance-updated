'use client'
import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import Lottie from "lottie-react";
import animationData from "../data";

import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import { Controls, Player } from '@lottiefiles/react-lottie-player';

const ProgramAnimation = () => {
    const container = useRef(null)
    const lottiePlay = useRef(null);
    const lottieInstance = useRef(null);
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let ctx = gsap.context(() => {
            const lottieAnimation = container.current.querySelector('.lottie-animation');
              var tl = gsap.timeline({
                scrollTrigger: {
                  trigger: container.current,
                  start: 'top 70%',
                  end: `bottom center`,
                  markers: false,
                  scrub: 1,
                  onEnter: () => {
                      console.log('lot', lottiePlay.current);
                      lottiePlay.current.setSeeker(0);;
                      lottiePlay.current.play();
                      setTimeout(() => {
                        lottiePlay.current.pause();
                      }, 4500)
                  },
                }
              })
            //   lottieInstance.current = lottieAnimation?.getLottie();
        }, container);
        return () => {
          ctx.revert();
        };
      }, []);

  return (
    <div className='lottie-wrap mt-5' ref={container}>
        {/* <Lottie ref={lottiePlay} animationData={animationData} autoplay={true} className="lottie-animation flex justify-center items-center" loop={true} /> */}
        <Player
        src={animationData}
        className="player"
        ref={lottiePlay}
        
      >
      </Player>
    </div>
  )
}

export default ProgramAnimation