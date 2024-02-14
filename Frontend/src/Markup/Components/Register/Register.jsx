import React from 'react'

function Register() {
  return (
    
   <div> <section className="login-section">
         <div className="auto-container">
          <div className="row clearfix"></div>
           <div className="login-form register-form">
                    <h2>Register</h2>
                    
                    <form method="post" action="contact.html"> 
                         <div className="form-group">
                            <label>User Name</label>
                            <input type="text" name="username" placeholder="Your Name" required/>
                        </div> 

                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" name="email" placeholder="Your Email" required/>
                        </div>
                        
                        <div className="form-group">
                            <label>Your Password</label>
                            <input type="password" name="password" placeholder="Password" required/>
                        </div>
                        
                        <div className="form-group text-right">
                            <button className="theme-btn btn-style-one" type="submit" name="submit-form"><span className="btn-title">Register</span></button>
                        </div>
                    </form>      
                </div> 
                
             </div>
            
        </section></div>     
   
    
  )
}

export default Register