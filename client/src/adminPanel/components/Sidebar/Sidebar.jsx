import React from 'react'
import  './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
      <NavLink to='/' className="sidebar-option">
            <img src={assets.add_icon} alt="" />
            <p>AnaSayfa</p>
        </NavLink>
        <NavLink to='/admin/add' className="sidebar-option">
            <img src={assets.add_icon} alt="" />
            <p>Add Items</p>
        </NavLink>
        <NavLink to='/admin/list' className="sidebar-option">
            <img src={assets.order_icon} alt="" />
            <p>List Items</p>
        </NavLink>
        <NavLink to='/admin/orders' className="sidebar-option">
            <img src={assets.order_icon} alt="" />
            <p>Orders</p>
        </NavLink>
        <NavLink to='/admin/users' className="sidebar-option">
            <img src={assets.order_icon} alt="" />
            <p>Kullanıcı işlemleri</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
