import {Routes, Route} from 'react-router-dom'
import image from "./assets/mainImage/logomain.png";
import './App.css'
import Home from './Markup/pages/Home'
import Login from './Markup/pages/Login'
import AddEmployee from './Markup/pages/Admin/AddEmployee'
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

function App() {
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/add-employee" element={<AddEmployee />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
