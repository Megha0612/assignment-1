import React, { Component } from 'react';
import $ from 'jquery';
import img from '../images/Capture.PNG'
import img1 from '../images/inner.svg'
import img2 from '../images/outer.svg'
import img3 from '../images/outer2.svg'
import img4 from '../images/Arc.svg'
import play from '../images/play-button.png'

class Anime extends Component {

    

    render() { 
        return (
            <div class="de_wrapper">
        <div class="de_banner-gif--wrapper">
            <header class="de_header">
                <div class="de_logo">
                    <h1 class="de_site-logo">
                        DeHaat
                    </h1>
                </div>
                <div class="de-nav-items">
                    <ul class="de_navlists">
                        <li class="de-listitems">
                            <a href="#" class="de-navlinks dropdown">
                                Solutions
                            </a>
                            <div class="dropdown-list">
                                <a class="dropdown-list-items" href="#">Solution For Farmer</a>
                                <a class="dropdown-list-items" href="#">Solution For Micro-entrepreneur</a>
                                <a class="dropdown-list-items" href="#">Solution For Institutional Buyers</a>
                            </div>
                        </li>
                        <li class="de-listitems">
                            <a href="#" class="de-navlinks dropdown">
                                About Us
                            </a>
                            <div class="dropdown-list">
                                <a class="dropdown-list-items" href="#">Company</a>
                                <a class="dropdown-list-items" href="#">DeHaat Network</a>
                                <a class="dropdown-list-items" href="#">Contact Us</a>
                            </div>
                        </li>
                        <li class="de-listitems">
                            <a href="#" class="de-navlinks">
                                Farmbook
                            </a>
                        </li>
                        <li class="de-listitems">
                            <a href="#" class="de-navlinks">
                                Engineering Blog
                            </a>
                        </li>
                        <li class="de-listitems">
                            <a href="#" class="de-navlinks">
                                Blog
                            </a>
                        </li>
                    </ul>
                </div>
            </header>

            <div class="de__banner-content">
                <div class="de-banner_content">
                    <div class="de-banner_heading-wrappper">
                        <h1 class="de-banner_heading">
                            From Seeds To Market
                        </h1>
                        <div class="de-arrow-img">
                            <img src={img} alt=""/>
                        </div>
                    </div>
                    <h5 class="de-banner-para">
                        Technologies For Next Agri Revolution
                    </h5>
                    <a class="de-banner_video">
                        <span class="de-banner_play-btn">
                            <img src={play} alt=""/>
                        </span>
                        <span class="de-bannet-play-btn-text">
                            Watch The Video
                        </span>
                    </a>
                </div>

                <div class="de-farmer__img">
                    <img class="de-outerCircle rotate-img1" src={img1} alt=""/>
                    <img class="de-outerCircle rotate-img2" src={img2}/>
                    <img class="de-outerCircle rotate-img3" src={img3}/>
                    <div class="de-farmer-outer-circle"></div>
                    <div class="de-farmer-inner-circle"></div>
                </div>

                <div class="de-banner_arc-container">
                    <img src={img4}/>
                    <div class="de-arc__dot-1">
                        <a href="#" class="de-banner__dot-link">
                            <span class="de-dot1">
                                <span class="de-dot"></span>
                            </span>
                            <p class="de-dot-about1">
                                Know Your Soil
                                <span class="de-banner__hover-text">
                                    soil testing and health card
                                </span>
                            </p>
                        </a>
                    </div>

                    <div class="de-arc__dot-2">
                        <a href="#" class="de-banner__dot-link">
                            <span class="de-dot2">
                                <span class="de-dot"></span>
                            </span>
                            <p class="de-dot-about2">
                                Agri Input
                                <span class="de-banner__hover-text">
                                    seed, nutrition and protection
                                </span>
                            </p>
                        </a>
                    </div>

                    <div class="de-arc__dot-3">
                        <a href="#" class="de-banner__dot-link">
                            <span class="de-dot3">
                                <span class="de-dot"></span>
                            </span>
                            <p class="de-dot-about3">
                                Advisory
                                <span class="de-banner__hover-text">
                                    Helpline & Support
                                </span>
                            </p>
                        </a>
                    </div>

                    <div class="de-arc__dot-4">
                        <a href="#" class="de-banner__dot-link">
                            <span class="de-dot4">
                                <span class="de-dot"></span>
                            </span>
                            <p class="de-dot-about4">
                                Health & Growth
                                <span class="de-banner__hover-text">
                                    Yield Forecast
                                </span>
                            </p>
                        </a>
                    </div>

                    <div class="de-arc__dot-5">
                        <a href="#" class="de-banner__dot-link">
                            <span class="de-dot5">
                                <span class="de-dot"></span>
                            </span>
                            <p class="de-dot-about5">
                                Agri Output
                                <span class="de-banner__hover-text">
                                    harvest & market access
                                </span>
                            </p>
                        </a>
                    </div>

                    <div class="de-arc__dot-6">
                        <a href="#" class="de-banner__dot-link">
                            <span class="de-dot6">
                                <span class="de-dot"></span>
                            </span>
                            <p class="de-dot-about6">
                                Farm Intelligence
                                <span class="de-banner__hover-text">
                                    AI, ML & Analytics
                                </span>
                            </p>
                        </a>
                    </div>

                    <div class="de-arc__dot-7">
                        <a href="#" class="de-banner__dot-link">
                            <span class="de-dot7">
                                <span class="de-dot"></span>
                            </span>
                            <p class="de-dot-about7">
                                Finance
                                <span class="de-banner__hover-text">
                                    Credit & Insurance
                                </span>
                            </p>
                        </a>
                    </div>
                </div>
            </div>            
        </div>
    </div>
            );
        }
    }
    
    export default Anime;