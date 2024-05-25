'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'


const Navbar = () => {
    const [menuOpen, setMenuClose] = useState(false);
    const [isSticky, setSticky] = useState(false);
    const [domloaded, setDomLoaded] = useState(false);

    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        const handleContentLoad = () => {
            // setIsLoading(false);
        };
        window.addEventListener('DOMContentLoaded', handleContentLoad);
        setTimeout(() => {
        console.log('Fetching data (simulated delay)...');
        setIsLoading(false);
        }, 5000);

        return () => {
        window.removeEventListener('DOMContentLoaded', handleContentLoad);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          if (scrollPosition > 50) {
            setSticky(true);
          } else {
            setSticky(false);
          }
        };
        window.addEventListener('scroll', handleScroll);
        setDomLoaded(true)
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const links = [
        {
            name : 'We are Stance',
            link : '/about'
        },
        {
            name : 'Programs',
            link : '/program'
        },
        {
            name : 'Partners',
            link : '/partners'
        },
        {
            name : 'Faq',
            link : '/faq'
        },
        {
            name : 'Philosophy',
            link : '/philosophy'
        },
        {
            name : 'Blogs',
            link : '/blog'
        },
        {
            name : 'Gallery',
            link : '/gallery'
        },
    ]

  return (
    <>
    
        <nav className={`main-nav  ${isSticky ? 'sticky-menu' : ''}`}>
            <div className="container">
                <div className="nav-inner">
                    <div className="l-part">
                        <button className="menu-btn" onClick={()=>setMenuClose(true)}>
                            <Image src={'/assets/images/menu.svg'} width={50} height={50} alt="" />
                        </button>
                        <Link href="/" className='head-logo'>
                            <Image src={'/assets/images/logo.svg'} width={50} height={50} alt="" />
                        </Link>
                    </div>
                    <div className="r-part">
                        <ul className="nav-list">
                            {
                                links.map((link,index) =>{
                                    return(
                                        <li key={index}>
                                            <Link href={link.link}>
                                            {link.name}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                            
                        </ul>
                        <ul className="ot-nav">
                            <li>
                                <a href="/book-now" className='main-btn'>
                                    Join Now
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

        {/* mobile menu */}
        <div className={`mob-menu ${menuOpen && 'active'}`}>
            <Link href="/" className='mob-logo'>
                <Image src={'/assets/images/logo.svg'} width={50} height={50} alt="" />
            </Link>
            <button className="close-btn" onClick={()=>setMenuClose(false)}>
                <Image src={'/assets/images/cross.svg'} width={50} height={50} alt="" />
            </button>
            <ul>
                {
                    links.map((link,index) =>{
                        return(
                            <li key={index}>
                                <Link href={link.link} onClick={()=>setMenuClose(false)}>
                                {link.name}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </>
  )
}

export default Navbar