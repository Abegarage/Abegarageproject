import React from 'react'

function AddEmployeeForm() {
  return (
    <div>
         <div class="sec-title text-center">
             <br />
             <br />
             
                    <h2>Add a New Employee</h2>
                    <span class="devider"><span></span></span>
                   
                </div>
         <div class="contact-form-two">
                    <form method="post" action="sendemail.php" id="contact-form">
                        <div class="row clearfix">
                            <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                <input type="text" name="username" placeholder="Employee email" required=""/>
                            </div>

                            <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                <input type="text" name="username" placeholder="Employee First Name" required=""/>
                            </div>

                            <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                <input type="text" name="username" placeholder="Employee Last Name" required=""/>
                            </div>

                            <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                <input type="text" name="phone" placeholder="Employee Phone Number" required=""/>
                            </div>

                            <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                {/* <input type="email" name="email" placeholder="Employee" required=""/> */}
                                <select name="employee role" id="" className='form-control'>
                                    <option value="admin">Employee</option>
                                    <option value="manager">Manager</option>
                                    <option value="employee">Admin</option>

                                </select>
                            </div>

                            <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                <input type="text" name="subject" placeholder="Employee Password" required=""/>
                            </div>
                            
                            
                            
                            <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                <button class="theme-btn btn-style-two" type="submit" name="submit-form"><span class="btn-title">Add Employee</span></button>
                            </div>
                        </div>
                    </form>
                </div>
    </div>
  )
}

export default AddEmployeeForm