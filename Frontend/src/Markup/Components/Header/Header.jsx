import React from 'react'
import logo from "../../../assets/mainImage/logomain.png";
function Header() {
  return (
    <div>
         
    <header class="main-header">
        
        <div class="header-top">
            <div class="auto-container clearfix">
                <div class="top-left">
                    <div class="text">Monday To Saturday 8:00AM - 6:00PM</div>
                </div>

                <div class="top-right">
                    <ul class="social-icon-one clearfix">
                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                        <li><a href="#"><i class="fab fa-skype"></i></a></li>
                        <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                    </ul>

                </div>
            </div>
        </div>
        
        <div class="header-upper">
            <div class="auto-container">
                <div class="clearfix">
                    <div class="pull-left logo-outer">
                        <div class="logo"><a href="index.html"><img src={logo} alt="" title=""/></a></div>
                    </div>
                    <div class="pull-right upper-right clearfix">
                        
                        <div class="upper-column info-box">
                            <div class="icon-box"><span class="fa fa-phone-volume"></span></div>
                            <ul>
                                <li><strong>Call us on</strong><a href="tel:">(051) 234 5679</a></li>
                            </ul> 
                        </div>

                        
                        <div class="upper-column info-box">
                            <div class="icon-box"><span class="fa fa-envelope"></span></div>
                            <ul>
                                <li><strong>Send your Email at</strong><a href="mailto:support@example.com">Abeautorepair@email.com</a> </li>
                            </ul>
                        </div>

                        
                        <div class="upper-column info-box">
                            <div class="icon-box"><span class="fa fa-globe"></span></div>
                            <ul>
                                <li>Structure Avenue, <br/>Melbourne City, Austalia</li>
                            </ul> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        <div class="header-lower">
            <div class="auto-container">
                <div class="main-box clearfix">
                    
                    <div class="nav-outer clearfix">
                       
                        <div class="mobile-nav-toggler"><span class="icon flaticon-menu"></span></div>

                        
                        <nav class="main-menu navbar-expand-md navbar-light">
                            <div class="collapse navbar-collapse clearfix" id="navbarSupportedContent">
                                <ul class="navigation clearfix">
                                    <li class="current dropdown"><a href="/">Home</a>

                                    </li>
                                    <li class="dropdown"><a href="about.html">About</a>
                                        <ul>
                                            <li><a href="about.html">About Us</a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown"><a href="services.html">Services</a>
                                        <ul>
                                            <li><a href="services.html">All Services</a></li>
                                            <li><a href="service-detail.html">Engine Diagnostic</a></li>
                                            <li><a href="service-detail.html">Electrical System</a></li>
                                            <li><a href="service-detail.html">Wheel Alignment</a></li>
                                            <li><a href="service-detail.html">Air Conditioner</a></li>
                                            <li><a href="service-detail.html">Break Repair</a></li>
                                            <li><a href="service-detail.html">Speed Testing</a></li>
                                        </ul>
                                    </li>


                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                        </nav>
                        <div class="outer-box">

                            
                            <div class="cart-btn">

                                <a href="/login" id="appointment-btn" class="theme-btn btn-style-one"><span class="btn-title">login <i class="far fa-arrow-alt-circle-right"></i></span></a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        <div class="sticky-header">
            <div class="auto-container clearfix">
                
                <div class="logo pull-left">
                    <a href="index.html" title=""><img src={logo} alt="" title=""/></a>
                </div>
                
                <div class="nav-outer pull-right">
                 
                    <nav class="main-menu">
                        <div class="navbar-collapse show collapse clearfix">
                             <ul class="navigation clearfix"></ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>


        
        <div class="mobile-menu">
            <div class="menu-backdrop"></div>
            <div class="close-btn"><span class="icon flaticon-cancel-1"></span></div>
            
            
            <nav class="menu-box">
                <div class="nav-logo"><a href="/"><img src={logo} alt="" title=""/></a></div>
                
                <ul class="navigation clearfix"></ul>
            </nav>
        </div>
    </header>
    
    </div>

  )
}

export default Header




