import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'
import useAxios from "../../service/useAxios"

const Navbar = ({ setShowLogin }) => {
  const {axiosWithToken} =useAxios()

  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token ,setToken,setUser} = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = async() => {
    const response= await axiosWithToken.post("/auth/logout")
    if(!response.data.error){
      localStorage.removeItem("token")
      localStorage.removeItem("user");
      setToken("");
      setUser("")
      navigate('/')

    }
   
  }
  const handleTop=()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  const handleHome=()=>{
    setMenu("home")
    handleTop()
    
  }
  const dashboard=()=>{
    navigate('/dasboard')

  }

  return (
    <div className='navbar'>
      <Link onClick={()=>handleTop()} to='/'><img className='logo'  src={assets.logo} alt="" /></Link>
      <ul className="navbar-menu">
        <Link  to="/" onClick={() => handleHome()} className={`${menu === "home" ? "active" : ""}`}>home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={`${menu === "menu" ? "active" : ""}`}>menu</a>
        <a href='#app-download' onClick={() => setMenu("mob-app")} className={`${menu === "mob-app" ? "active" : ""}`}>mobile app</a>
        <a href='#footer' onClick={() => setMenu("contact")} className={`${menu === "contact" ? "active" : ""}`}>contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <Link to='/cart' className='navbar-search-icon'>
          <img src={assets.basket_icon} alt="" />
          <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
        </Link>
        {!token ? <button style={{textWrap:"nowrap"}} onClick={() => setShowLogin(true)}>sign in</button>
          : <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className='navbar-profile-dropdown'>
              <li onClick={()=>navigate('/myorders')}> <img src={assets.bag_icon} alt="bag" /> <p>Orders</p></li>
              <hr />
              <li onClick={logout}> <img src={assets.logout_icon} alt="" /> <p>Logout</p></li> 
              <hr />
              <li onClick={dashboard}> <img src={assets.logout_icon} alt="" /> <p>Dasboard</p></li> 
              
            </ul>
          </div>
        }

      </div>
    </div>
  )
}

export default Navbar
