'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Footer = () => {
  return (
    <footer className="main-footer">
        <div className="container">
            <div className="ft-top-bar">
                <div className="row contact-info-row">
                    <div className="col-lg-4 col-12">
                        <Link href="/" className="con-det">
                            <Image src="/assets/images/f-call.svg" alt="" width={24} height={24} />
                            <span>+1 (877) 719-7923</span>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-12">
                        <Link href="/" className="con-det">
                            <Image src="/assets/images/f-mail.svg" alt="" width={24} height={24} />
                            <span>info@stancehealth.com</span>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-12">
                        <Link href="/" className="con-det">
                            <Image src="/assets/images/f-loc.svg" alt="" width={24} height={24} />
                            <span>2603 New Ramon STE 200 
San Ramon CA 94583
Lender NMLS #225</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="ft-main-wrap pb-0">
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <Link href="/" className="ft-logo">
                            <Image src="/assets/images/logo.svg" alt="" width={24} height={24} />
                        </Link>
                        <h3 className="mt-30 ft-head">Follow Us</h3>
                        <ul className="soc-list">
                            <li>
                                <Link href="/">
                                <Image src="/assets/images/facebook.svg" alt="" width={24} height={24} />
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                <Image src="/assets/images/twitter.svg" alt="" width={24} height={24} />
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                <Image src="/assets/images/insta.svg" alt="" width={24} height={24} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <h3 className="ft-head">
                            For Borrowers
                        </h3>
                        <ul className="ft-list">
                            <li>
                                <Link href="/">
                                Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                Own A Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                Denied A Mortgage?
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                Get Approved Today
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                Mortgage Approval Now
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <h3 className="ft-head">
                            Company Information
                        </h3>
                        <ul className="ft-list">
                            <li>
                                <Link href="/">
                                Our Team
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                Career
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6 col-12">
                        <h3 className="ft-head">
                            Other Links
                        </h3>
                        <ul className="ft-list">
                            <li>
                                <Link href="/">
                                Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                Disclaimer
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p className="btm-text">
                        © 2024 Stance - All rights reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>

  )
}

export default Footer