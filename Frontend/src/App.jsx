import {Routes, Route} from 'react-router-dom'
import image from "./assets/mainImage/logomain.png";
import './App.css'
import Home from './Markup/pages/Home'
import Login from './Markup/pages/Login'
import AddEmployee from './Markup/pages/Admin/AddEmployee'
import Unauthorization from './Markup/pages/Unauthorization.jsx'
//import the css files
import "./assets/templaet_assets/css/responsive.css"
import "./assets/templaet_assets/css/style.css"
import "./assets/templaet_assets/css/bootstrap.css"
// import "./assets/templaet_assets/css/jquery-ui.css"
// import "./assets/templaet_assets/css/owl.css"
// import "./assets/templaet_assets/css/flaticon.css"
// import "./assets/templaet_assets/css/jquery.mCustomScrollbar.min.css"
// import "./assets/templaet_assets/css/font-awesome.min.css"
import "./assets/style/custom.css"
import Header from './Markup/components/Header/Header.jsx'
import Footer from './Markup/components/Footer/Footer.jsx'
import Register from './Markup/Components/Register/Register.jsx';
//import privatAuthRoute from './Markup/Components/Autho/PrivateAuthRoute.jsx'
import PrivateAuthRoute from './Markup/Components/Autho/PrivateAuthRoute.jsx'
import AddCustomer from './Markup/pages/Admin/AddCustomer.jsx';
import Customers from './Markup/pages/Admin/Customers.jsx'
import Employees from './Markup/pages/Admin/Employees.jsx';
import Orders from './Markup/pages/Admin/Orders.jsx';
import EmployeesList from './Markup/Components/EmployeesList/EmployeesList.jsx';
function App() {
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/add-employee" element={<AddEmployee />} />
        <Route path="/register" element={<Register />} />
        <Route path="/unauthorized" element={<Unauthorization />} />
        {/* <Route path="/admin/customers" element={<Customers />} /> */}
        <Route path="/admin/customers" element={<PrivateAuthRoute roles={[2, 3]}><Customers /></PrivateAuthRoute>} />
        <Route path="/admin/employees" element={<Employees />} />
        <Route path="/admin/employees" element={<PrivateAuthRoute roles={[1,2,3]}><EmployeesList /></PrivateAuthRoute>} />
        {/* <Route path="/admin/employees" element={<PrivateAuthRoute roles={[1,2, 3]}><Employees /></PrivateAuthRoute>} /> */}
        {/* <Route path="/admin/orders" element={<Orders />} /> */}
        <Route path="/admin/orders" element={<PrivateAuthRoute roles={[1, 2, 3]}><Orders /></PrivateAuthRoute>} />
        <Route path="/admin/add-customer" element={<AddCustomer />} />
        
      </Routes>
      <Footer />
    </>
  )
}

export default App
