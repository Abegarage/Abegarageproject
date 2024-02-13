import React from 'react'

function Home() {
  return (
    <div>
   
        <div class="mobile-menu">
            <div class="menu-backdrop"></div>
            <div class="close-btn"><span class="icon flaticon-cancel-1"></span></div>
            
          
            <nav class="menu-box">
                <div class="nav-logo"><a href="/"><img src="images/logo.png" alt="" title=""/></a></div>
                
                <ul class="navigation clearfix">     </ul>
            </nav>
        </div>
    <section className="banner-section">
        <span className="float-text">Welcome</span>
        <div className="banner-carousel owl-carousel owl-theme">
            <div className="slide-item">
                <div className="content-box">
                    <div className="content">
                        <div className="auto-container">
                            <div className="row">
                                <div className="content-column col-lg-4 col-md-12">                                 
                                    <span className="title">Best Carfixing Services Provider</span>
                                    <h1>Auto Repair &amp; <span>Maintenance</span></h1>
                                    <div className="text">We provide always our best equestrian training for our clients.</div>
                                    <div className="btn-box">
                                        <a href="services.html" className="theme-btn btn-style-one"><span className="btn-title">Check Service</span></a>
                                    </div>
                                </div>
                                <div className="image-column col-lg-8 col-md-12">
                                    <div className="image-box">
                                        <figure className="image"><img src="images/main-slider/image-1.png" alt=""/></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
{/* 
            <div className="slide-item">
                <div className="content-box">
                    <div className="content">
                        <div className="auto-container">
                            <div className="row">
                                <div className="content-column col-lg-4 col-md-12">
                                    <span className="title">Best Carfixing Services Provider</span>
                                    <h1>Give Your Car <br/><span>A Fresh Look</span></h1>
                                    <div className="text">We provide always our best equestrian training for our clients.</div>
                                    <div className="btn-box">
                                        <a href="services.html" className="theme-btn btn-style-one"><span className="btn-title">Check Service</span></a>
                                    </div>
                                </div>
                                <div className="image-column col-lg-8 col-md-12">
                                    <div className="image-box">
                                        <figure className="image"><img src="images/main-slider/image-2.png" alt=""/></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="slide-item">
                <div className="content-box">
                    <div className="content">
                        <div className="auto-container">
                            <div className="row">
                                <div className="content-column col-lg-4 col-md-12">
                                    <span className="title">Best Carfixing Services Provider</span>
                                    <h1>Professional<br/><span>Car Services</span></h1>
                                    <div className="text">We provide always our best equestrian training for our clients.</div>
                                    <div className="btn-box">
                                        <a href="services.html" className="theme-btn btn-style-one"><span className="btn-title">Check Service</span></a>
                                    </div>
                                </div>
                                <div className="image-column col-lg-8 col-md-12">
                                    <div className="image-box">
                                        <figure className="image"><img src="images/main-slider/image-3.png" alt=""/></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    </section>

  
    <section className="about-us">
        <div className="auto-container">
            <div className="row clearfix">
                
                <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                    <div className="inner-column">
                        <h2>Success Experiences</h2>
                        <div className="about-years"><span>1990</span><h3> 40+ Years of experience <br/>in Auto Services.</h3></div>
                        <div className="text-box">
                            <strong>We are  a team of professional and skilled experts in all domestic spheres. We offer a wide range of services and at the same time</strong>
                            <p>We have facility to produce advance work various industrial applications based on specially developed technol-ogy. We are also ready to developement by according to users changing needs. Infrastructure related installation projects. General repair & industrial and machinery.</p>
                            <p>We have facility to produce advance work various industrial applications based on specially developed technol-ogy. We are also ready to developement by according to users changing needs. Infrastructure.</p>
                        </div>
                        <div className="btn-box">
                            <a href="about.html" className="theme-btn btn-style-one"><span className="btn-title">Read More</span></a>
                        </div>
                    </div>
                </div>

                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column">
                        <span className="float-text">ABOUT US</span>
                        <figure className="image"><a href="https://i.pinimg.com/736x/0e/50/c2/0e50c2395ce120082508aa6ac80ef16b.jpg" className="lightbox-image" data-fancybox="images"><img src="images/resource/about-img-1.jpg" alt=""/></a></figure>
                        <figure className="image-2"><a href="images/resource/about-img-2.jpg" className="lightbox-image" data-fancybox="images"><img src="images/resource/about-img-2.jpg" alt=""/></a></figure>
                    </div>
                </div>
            </div>
        </div>
    </section>
  
    </div>
  )
}
export default Home