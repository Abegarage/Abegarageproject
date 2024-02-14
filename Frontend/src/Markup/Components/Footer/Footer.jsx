import React from 'react'
import logo from "../../../assets/mainImage/logomain.png";
import man2 from "../../../assets/mainImage/man-2.png";
function Footer() {
  return (
    <div>
        
    <footer className="main-footer">
        <div className="auto-container">
            <div className="widgets-outer">
            
                <div className="widgets-section">
                    <div className="row clearfix">
                        
                        <div className="footer-column col-lg-4 col-md-12 col-sm-12">
                            <div className="footer-widget logo-widget">
                                <div className="logo"><a href="index.html"><img src={logo} alt="" /></a></div>
                                <div className="text">We offer full range of garage services to vehicle owners in Tucson. professionals know how to handle a wide range of car services.</div>
                                <div className="copyright">© Copyright 2019 <br/>All Rights Reserved by <a href="#">Bold_Touch</a></div>
                            </div>
                        </div>

                        
                        <div className="footer-column col-lg-4 col-md-6 col-sm-12">
                            <div className="footer-widget links-widget">
                                <h2 className="widget-title">Our Services</h2>
                                <div className="widget-content">
                                    <ul className="list clearfix">
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

                        
                        <div className="footer-column col-lg-4 col-md-6 col-sm-12">
                            <div className="footer-widget contact-widget">
                                <h2 className="widget-title">Get In Touch</h2>
                                <div className="widget-content">
                                    <ul className="contact-info-list">
                                        <li><span className="fa fa-location-arrow"></span> 42 Ben Street, Town Hall<br/> Florida 33166 USA</li>
                                        <li><span className="fa fa-envelope-open"></span><a href="#">support@Abeautorepair.com</a></li>
                                        <li><span className="fa fa-phone"></span><a href="#">(051) 456 7890</a></li>
                                    </ul>
                                </div>

                                <ul className="social-icon-two">
                                    <li><a href="#"><span className="fab fa-facebook-f"></span></a></li>
                                    <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                                    <li><a href="#"><span className="fab fa-linkedin-in"></span></a></li>
                                    <li><a href="#"><span className="fab fa-vimeo-v"></span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="man-image"><img src={man2} alt=""/></div>
            </div>
        </div>
    </footer>

    </div>
  )
}

export default Footer