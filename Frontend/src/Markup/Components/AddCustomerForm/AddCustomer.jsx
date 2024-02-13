import React, { useState } from 'react'
// import employee.service.js
import customerService from '../../../services/customer.service';
//import the useAuth hook
import  {useAuth}  from "../../../Contexts/AuthContext.jsx";
 function AddCustomer() {
  const [customer_email, setEmail] = useState('');
  const [customer_first_name, setFirstName] = useState('');
  const [customer_last_name, setLastName] = useState('');
  const [customer_phone_number, setPhoneNumber] = useState('');
  const [customer_hash, setPassword] = useState('');
  const [active_customer_status, setActive_employee] = useState(1);
//   const [company_role_id, setCompany_role_id] = useState(1);

  // Errors 
  const [emailError, setEmailError] = useState('');
  const [firstNameRequired, setFirstNameRequired] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState('');

   //Create a variable to hold the user's token
   let loggedInEmployeeToken = '';
   // Destructure the auth hook and get the token 
   const  {employee}  = useAuth();
   if (employee && employee.employee_token) {
     loggedInEmployeeToken = employee.employee_token;
   }
  const handleSubmit = (e) => {
    // prevent the default behavior of the form
    e.preventDefault();
    let valid = true; // flag
    if (!customer_first_name) {
      setFirstNameRequired('First name is required');
      valid = false;
    } else {
      setFirstNameRequired('');
    }
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(customer_email)) {
      setEmailError('Invalid email format');
      valid = false;
    } else {
      setEmailError('');
    }
     // Password has to be at least 6 characters long
    //  if (!customer_password || customer_password.length < 6) {
    //   setPasswordError('Password must be at least 6 characters long');
    //   valid = false;
    // } else {
    //   setPasswordError('');
    // }
     // If the form is not valid, do not submit 
    //  if (!valid) {
    //   return;
    // }
    const formData = {
      customer_email,
      customer_first_name,
      customer_last_name,
      customer_phone_number,
      customer_hash,
      active_customer_status
    //   company_role_id
    };
    const newCustomer = customerService.createCustomer(formData,loggedInEmployeeToken);
    newCustomer.then((response) => response.json())
    .then((data) => {
      // console.log(data);
      // If Error is returned from the API server, set the error message
      if (data.error) {
        setServerError(data.error)
      } else {
        // Handle successful response 
        setSuccess(true);
        setServerError('')
        // Redirect to the employees page after 2 seconds 
        // For now, just redirect to the home page 
        setTimeout(() => {
          // window.location.href = '/admin/employees';
          window.location.href = '/';
          alert('customer added successfully');
        }, 2000);
      }
    })
    .catch((error) => {
      const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      setServerError(resMessage);
    });
  }
  return (
    <div>
         <div className="sec-title text-center">
             <br />
             <br />
             
                    <h2>Add a New Customer</h2>
                    <span className="devider"><span></span></span>
                   
                </div>
         <div className="contact-form-two">
                    <form method="post" id="contact-form" onSubmit={handleSubmit} >
                        <div className="row clearfix">
                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                            {serverError && <div className="validation-error" role="alert">{serverError}</div>}
                                <input type="text" name="customer_email" placeholder="customer email" required value={customer_email} onChange={event => setEmail(event.target.value)} />
                                {emailError && <div className="validation-error" role="alert">{emailError}</div>}
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                <input type="text" name="customer_first_name" placeholder="Customer First Name" required  value={customer_first_name} onChange={event => setFirstName(event.target.value)}/>
                                {firstNameRequired && <div className="validation-error" role="alert">{firstNameRequired}</div>}
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                <input type="text" name="customer_last_name" placeholder="Employee Last Name" value={customer_last_name} onChange={event => setLastName(event.target.value)} required  />
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                <input type="text" name="phone" placeholder="Employee Phone Number" value={customer_phone_number} onChange={event => setPhoneNumber(event.target.value)} required />
                            </div>

                            {/* <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                <input type="email" name="email" placeholder="Employee" required=""/>
                                <select name="employee role" id="" className='form-control' value={company_role_id} onChange={event => setCompany_role_id(event.target.value)} >
                                    <option value="admin">Employee</option>
                                    <option value="manager">Manager</option>
                                    <option value="employee">Admin</option>

                                </select>
                            </div> */}

                            <div className="col-lg-12 col-md-12 col-sm-12 form-group ">
                                <input type="text" name="subject" placeholder="customer hash"  value={customer_hash} onChange={event => setPassword(event.target.value)} required/>
                                {passwordError && <div className="validation-error" role="alert">{passwordError}</div>}
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 form-group ">
                                <input type="text" name="subject" placeholder="active employee"  value={active_customer_status} onChange={event => setActive_employee(event.target.value)} required/>
                               
                            </div> 
                            
                            
                            <div className="col-lg-12 col-md-12 col-sm-12 form-group ">
                                <button className="theme-btn btn-style-two" type="submit" name="submit-form" data-loading-text="Please wait..."><span className="btn-title">Add Customer</span></button>
                            </div>
                        </div>
                    </form>
                </div>
    </div>
  )
}

export default AddCustomer