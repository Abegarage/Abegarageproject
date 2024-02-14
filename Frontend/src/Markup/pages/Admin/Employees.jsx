import React from 'react'
import LoginForm from '../../Components/LoginForm/LoginForm'
import { useAuth } from '../../../Contexts/AuthContext'
import EmployeesList from '../../Components/EmployeesList/EmployeesList'
import AdminMenu from '../../Components/AdminMenu/AdminMenu'
function Employees() {
    const {isLogged,isAdmin} = useAuth();
    if(isLogged){
        if(isAdmin){
            return (
                <div className='container-fluid admin-page'>
                <div className='row'>
                  <div className='col-md-3 admin-left-side' >
                   <AdminMenu/>
                  </div>
                  <div className='col-md-9 admin-right-side'>
                
                    <EmployeesList/>
                  </div>
                </div>
                </div>
            );
        
    }else{
  return (
    <div>
        <h1>you are not authorized to view this page</h1>
    </div>

  );
    }
  } else {
  return(
    <div>
   <LoginForm/>
    </div>
  );
}
}

export default Employees