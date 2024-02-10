import React from 'react'
import AdminMenu from '../../Components/AdminMenu/AdminMenu'
import AddEmployeeForm from '../../Components/AddEmployeeForm/AddEmployeeForm'
function AddEmployee() {
  return (
    <div>
        <div className='container-fluid admin-page'>
          <div className='row'>
            <div className='col-md-3 admin-left-side' >
             <AdminMenu/>
            </div>
            <div className='col-md-9 admin-right-side'>
          
              <AddEmployeeForm/>
            </div>
          </div>

        </div>
    </div>
  )
}
export default AddEmployee