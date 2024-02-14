import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../../assets/mainImage/logomain.png";
import { useAuth } from '../../../Contexts/authContext';
import loginService from '../../../services/login.service';
function Header() {
    // console.log(useAuth());
    const {isLogged, setIsLogged, employee} = useAuth();
    //logout event handler
    const logOut=()=>{
        //call the logout function from the login service
        loginService.logOut();
        //set the isLogged state to false
        setIsLogged(false);
    }
  return (
    <div>
         
    <header className="main-header">
        
        <div className="header-top">
            <div className="auto-container clearfix">
                <div className="top-left">
                    <div className="text">Monday To Saturday 8:00AM - 6:00PM</div>
                </div>

                <div className="top-right">
                    <ul className="social-icon-one clearfix">
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                        <li><a href="#"><i className="fab fa-skype"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                    </ul>

                </div>
            </div>
        </div>
        
        <div className="header-upper">
            <div className="auto-container">
                <div className="clearfix">
                    <div className="pull-left logo-outer">
                        <div className="logo"><a href="index.html"><img src={logo} alt="" title=""/></a></div>
                    </div>
                    <div className="pull-right upper-right clearfix">
                  {isLogged ?(
                     
                  <div className="upper-column info-box d-flex align-item-center">
                            <div className="icon-box fs-5"><span className=""></span></div>
                            <ul className='fs-5'>
                                <li><strong>Welcome  {employee?.employee_first_name}</strong><a href=""></a></li>
                            </ul> 
                        </div>
                        ):(
                        <>
                        <div className="upper-column info-box">
                            <div className="icon-box"><span className="fa fa-phone-volume"></span></div>
                            <ul>
                                
                                
                                <li><strong>Call us on</strong><a href="tel:">(051) 234 5679</a></li>
                            </ul> 
                        </div>
                        
                        <div className="upper-column info-box">
                            <div className="icon-box"><span className="fa fa-envelope"></span></div>
                            <ul>
                                <li><strong>Send your Email at</strong><a href="mailto:support@example.com">Abeautorepair@email.com</a> </li>
                            </ul>
                        </div>

                        
                        <div className="upper-column info-box">
                            <div className="icon-box"><span className="fa fa-globe"></span></div>
                            <ul>
                                <li>Structure Avenue, <br/>Melbourne City, Austalia</li>
                            </ul> 
                            
                        </div>
                        </>
                       )}
                    </div>
                </div>
            </div>
        </div>
       
        <div className="header-lower">
            <div className="auto-container">
                <div className="main-box clearfix">
                    
                    <div className="nav-outer clearfix">
                       
                        <div className="mobile-nav-toggler"><span className="icon flaticon-menu"></span></div>

                        
                        <nav className="main-menu navbar-expand-md navbar-light">
                            <div className="collapse navbar-collapse clearfix" id="navbarSupportedContent">
                                <ul className="navigation clearfix">
                                    <li className="current dropdown"><a href="/">Home</a>

                                    </li>
                                    <li className="dropdown"><a href="about.html">About</a>
                                        <ul>
                                            <li><a href="about.html">About Us</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><a href="services.html">Services</a>
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
                        <div className="outer-box">

                        {isLogged ?(
                            <div className="cart-btn">
                              <Link to ="/" id="appointment-btn" className="theme-btn btn-style-one"><span className="btn-title" onClick={logOut}>logout 
                              <i className="far fa-arrow-alt-circle-left"></i></span>
                              </Link>
                            </div> 
                            ):(                         
                            <div className="cart-btn">
                              <Link to ="/login" id="appointment-btn" className="theme-btn btn-style-one"><span className="btn-title">login 
                              <i className="far fa-arrow-alt-circle-right"></i></span>
                              </Link>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        <div className="sticky-header">
            <div className="auto-container clearfix">
                
                <div className="logo pull-left">
                    <a href="index.html" title=""><img src={logo} alt="" title=""/></a>
                </div>
                
                <div className="nav-outer pull-right">
                 
                    <nav className="main-menu">
                        <div className="navbar-collapse show collapse clearfix">
                             <ul className="navigation clearfix"></ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>


        
        <div className="mobile-menu">
            <div className="menu-backdrop"></div>
            <div className="close-btn"><span className="icon flaticon-cancel-1"></span></div>
            
            
            <nav className="menu-box">
                <div className="nav-logo"><a href="/"><img src={logo} alt="" title=""/></a></div>
                
                <ul className="navigation clearfix"></ul>
            </nav>
        </div>
    </header>
    
    </div>

  )
}

export default Header




