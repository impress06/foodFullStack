import  { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import MyOrders from './pages/MyOrders/MyOrders'
import Verify from './pages/Verify/Verify'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Navbartwo from './adminPanel/components/Navbar/Navbar'

import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './adminPanel/components/Sidebar/Sidebar';
import Add from './adminPanel/pages/Add/Add';
import List from './adminPanel/pages/List/List'
import Orders from './adminPanel/pages/Orders/Orders'
import UserDashboard from "./pages/UserDashboard/UserDasboard"


const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <ToastContainer />
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : null}
      <Routes>
        <Route path='/admin/*' element={<AdminLayout />} />
        <Route path='/*' element={<MainLayout setShowLogin={setShowLogin} />} />
      </Routes>
    </>
  )
}

const MainLayout = ({ setShowLogin }) => {
  return (
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />
        <Route path='/myorders' element={<MyOrders />} />
        <Route path='/verify' element={<Verify />} />
        <Route path='/dasboard' element={<UserDashboard/>} />
      </Routes>
      <Footer />
    </div>
  )
}

const AdminLayout = () => {
  return (
    <div className='app'>
    <ToastContainer />
    <Navbartwo />
    <hr />
    <div className="app-content">
      <Sidebar />
      <Routes>
        <Route path="add" element={<Add />} />
        <Route path="list" element={<List />} />
        <Route path="orders" element={<Orders />} />
      </Routes>
    </div>
  </div>
  )
}

export default App
