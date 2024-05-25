'use client'
import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';


const PartnersBanner = () => {
  
  const bannerdata = [
    {
      title: 'Partner with us',
      description: "Our Multi-disciplinary approach can help you maximize outcomes for your tribe. We collaborate with Doctors, Hospitals, Sports Academies & Corporates.",
      buttonLink: "#",
      buttonLabel: "Get in Touch",
      image: "/assets/images/partners.svg",
      mobileImage: "/assets/images/partners.svg",
    },
  ]
  return (
    <header className="main-header" >
        {
          bannerdata.map((item,index)=>{
            const titleHtml = {__html: item.title};
            const descHtml = {__html: item.description}
            return(
              <section key={index} className="banner-slide" >
                <picture>
                  <source srcset={item.mobileImage} media="(max-width:600px)" />
                  <Image src={item.image} width={1920} height={1080} alt="" />
                </picture>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <div className="banner-con">
                        <h1 dangerouslySetInnerHTML={titleHtml} />
                        {
                            <p className='para' dangerouslySetInnerHTML={descHtml} />
                           
                        }
                        {
                            item.buttonLabel &&
                            <Link href={item.buttonLink} className="main-btn">
                            <span>{item.buttonLabel}</span>
                            </Link>
                        }
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

export default PartnersBanner