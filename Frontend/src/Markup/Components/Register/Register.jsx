import React from 'react'

function Register() {
  return (
    
   <div> <section class="login-section">
         <div class="auto-container">
          <div class="row clearfix"></div>
           <div class="login-form register-form">
                    <h2>Register</h2>
                    
                    <form method="post" action="contact.html"> 
                         <div class="form-group">
                            <label>User Name</label>
                            <input type="text" name="username" placeholder="Your Name" required/>
                        </div> 

                        <div class="form-group">
                            <label>Email Address</label>
                            <input type="email" name="email" placeholder="Your Email" required/>
                        </div>
                        
                        <div class="form-group">
                            <label>Your Password</label>
                            <input type="password" name="password" placeholder="Password" required/>
                        </div>
                        
                        <div class="form-group text-right">
                            <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">Register</span></button>
                        </div>
                    </form>      
                </div> 
                
             </div>
            
        </section></div>     
   
    
  )
}

export default Register