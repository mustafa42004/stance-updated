'use client'
import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';


const PhilosophyBanner = () => {
  
  const bannerdata = [
    {
      title: 'Philosophy',
      description: "",
      buttonLink: "",
      buttonLabel: "",
      image: "/assets/images/feature.svg",
      mobileImage: "/assets/images/feature.svg",
    },
  ]
  return (
    <header className="main-header blog-inner-header" >
        {
          bannerdata.map((item,index)=>{
            return(
              <section key={index} className="banner-slide" >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 col-12">
                      <div className='featured-image'>
                         <img src={item.image} />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )
          })
        }
      </header>
  )
}

export default PhilosophyBanner