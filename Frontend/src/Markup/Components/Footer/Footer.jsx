import React from 'react'
import logo from "../../../assets/mainImage/logomain.png";
import man2 from "../../../assets/mainImage/man-2.png";
function Footer() {
  return (
    <div>
        
    <footer class="main-footer">
        <div class="auto-container">
            <div class="widgets-outer">
            
                <div class="widgets-section">
                    <div class="row clearfix">
                        
                        <div class="footer-column col-lg-4 col-md-12 col-sm-12">
                            <div class="footer-widget logo-widget">
                                <div class="logo"><a href="index.html"><img src={logo} alt="" /></a></div>
                                <div class="text">We offer full range of garage services to vehicle owners in Tucson. professionals know how to handle a wide range of car services.</div>
                                <div class="copyright">© Copyright 2019 <br/>All Rights Reserved by <a href="#">Bold_Touch</a></div>
                            </div>
                        </div>

                        
                        <div class="footer-column col-lg-4 col-md-6 col-sm-12">
                            <div class="footer-widget links-widget">
                                <h2 class="widget-title">Our Services</h2>
                                <div class="widget-content">
                                    <ul class="list clearfix">
                                        <li><a href="#">Engine Diagnostic & Repair</a></li>
                                        <li><a href="#">Maintenance Inspection</a></li>
                                        <li><a href="#">Electrical System Diagnostic</a></li>
                                        <li><a href="#">Wheel Alignment & Installation</a></li>
                                        <li><a href="#">Air Conditioner Service & Repair</a></li>
                                        <li><a href="#">Speed And Engine Testing</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>                          

                        
                        <div class="footer-column col-lg-4 col-md-6 col-sm-12">
                            <div class="footer-widget contact-widget">
                                <h2 class="widget-title">Get In Touch</h2>
                                <div class="widget-content">
                                    <ul class="contact-info-list">
                                        <li><span class="fa fa-location-arrow"></span> 42 Ben Street, Town Hall<br/> Florida 33166 USA</li>
                                        <li><span class="fa fa-envelope-open"></span><a href="#">support@Abeautorepair.com</a></li>
                                        <li><span class="fa fa-phone"></span><a href="#">(051) 456 7890</a></li>
                                    </ul>
                                </div>

                                <ul class="social-icon-two">
                                    <li><a href="#"><span class="fab fa-facebook-f"></span></a></li>
                                    <li><a href="#"><span class="fab fa-twitter"></span></a></li>
                                    <li><a href="#"><span class="fab fa-linkedin-in"></span></a></li>
                                    <li><a href="#"><span class="fab fa-vimeo-v"></span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="man-image"><img src={man2} alt=""/></div>
            </div>
        </div>
    </footer>

    </div>
  )
}

export default Footer