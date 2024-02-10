import React from 'react'

function AdminMenu() {
  return (
    <div>
        <div className='admin-menu'>
            <h2>Admin Menu</h2>
        
        </div>
        <div className='list-group'>
         <a href="/admin" className='list-group-item' >Dashboard</a>
         <a href="/admin/orders" className='list-group-item'>Orders</a>
         <a href="/admin/order" className='list-group-item'>New Order</a>
         <a href="/admin/add-employee" className='list-group-item'>Add Employee</a>
         <a href="/admin/employees" className='list-group-item'>Employees</a>
         <a href="/admin/add-customer" className='list-group-item'>Add Customer</a>
         <a href="/admin/customers" className='list-group-item'>Customers</a>
         <a href="/admin/services" className='list-group-item'>Services</a>

        </div>
    </div>
  )
}

export default AdminMenu