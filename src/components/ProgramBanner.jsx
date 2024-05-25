'use client'
import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';


const ProgramBanner = () => {
  
  const bannerdata = [
    {
      title: 'How <span>our Programs</span> are curated',
      description: "",
      buttonLink: "",
      buttonLabel: "",
      image: "/assets/images/program-banner.svg",
      mobileImage: "/assets/images/program-banner.svg",
    },
  ]
  return (
    <header className="main-header" >
        {
          bannerdata.map((item,index)=>{
            const titleHtml = {__html: item.title};
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
                            item.description &&
                            <p className="para">
                            {item.description}
                            </p>
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

export default ProgramBanner