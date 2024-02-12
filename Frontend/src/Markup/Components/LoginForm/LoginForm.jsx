import React,{useState,} from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import  loginService from '../../../services/login.service';
function LoginForm() {

    const navigate = useNavigate();
    const location = useLocation();
    const [employee_email, setEmail] = useState('');
    const [employee_password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [serverError, setServerError] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      // Handle client side validations here 
      let valid = true; // Flag 
      // Email validation
      if (!employee_email) {
        setEmailError('Please enter your email address first');
        valid = false;
      } else if (!employee_email.includes('@')) {
        setEmailError('Invalid email format');
      } else {
        const regex = /^\S+@\S+\.\S+$/;
        if (!regex.test(employee_email)) {
          setEmailError('Invalid email format');
          valid = false;
        } else {
          setEmailError('');
        }
      }
      // Password has to be at least 6 characters long
      if (!employee_password || employee_password.length < 4) {
        setPasswordError('Password must be at least 6 characters long');
        valid = false;
      } else {
        setPasswordError('');
      }
      if (!valid) {
        return;
      }
      // Handle form submission here
      const formData = {
        employee_email,
        employee_password
      };
      console.log(formData);
      // Call the service
      const loginEmployee = loginService.logIn(formData, );
      console.log(loginEmployee);
      loginEmployee.then((response) => response.json())
      
        .then((response) => {
          console.log(response);
          if (response.status === 'success') {
            // Save the user in the local storage
            if (response.data.employee_token) {
              console.log(response.data);
              localStorage.setItem("employee", JSON.stringify(response.data));
            }
            // Redirect the user to the dashboard
            // navigate('/');
            console.log(location);
            if (location.pathname === '/login') {
              // navigate('/admin');
              // window.location.replace('/admin');
              // To home for now 
              window.location.replace('/');
           
            } else {
              window.location.reload();
            }
          } else {
            // Show an error message
            setServerError(response.message);
          }
        })
        .catch((err) => {
          console.log(err);
          setServerError('An error has occurred. Please try again later.' + err);
        });
  
    };
    
  return (
    <div> <section className="login-section">
    <div className="auto-container">
        <div className="row clearfix">
            <div className="column col-lg-12 col-md-6 col-sm-12">
                
                <div className="login-form">
                    <h2>Login to your account</h2>
                
                    <form method="post" action="contact.html" onSubmit={handleSubmit}>
                        <div className="form-group">
                        {serverError && <div className="validation-error" role="alert">{serverError}</div>}
                            <label>Enter Your Email</label>
                            <input type="text" name="employee_email" placeholder="Name or Email " required value={employee_email} onChange={(event) => setEmail(event.target.value)}  />
                            {emailError && <div className="validation-error" role="alert">{emailError}</div>}
                        </div>
                        
                        <div className="form-group">
                            <label>Enter Your Password</label>
                            <input type="password" name="employee_password" placeholder="Password" required value={employee_password} onChange={(event) => setPassword(event.target.value)}/>
                            {passwordError && <div className="validation-error" role="alert">{passwordError}</div>}
                        </div>
                        
                        <div className="form-group">
                            <input type="checkbox" name="shipping-option" id="account-option-1"/>&nbsp; <label for="account-option-1">Remember me</label>
                        </div>

                        <div className="form-group">
                            <button className="theme-btn btn-style-one" type="submit" name="submit-form"><span className="btn-title">LOGIN</span></button>
                        </div>

                        <div className="form-group pass">
                            <a href="/Register" className="psw">you don't have an account? </a>
                        </div>
                    </form>
                </div>
                
            </div>
            
        </div>
    </div>
</section></div>
  )
}

export default LoginForm


