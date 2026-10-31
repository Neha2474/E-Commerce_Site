import React, { useState, useContext } from 'react'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

    const [menu, setMenu] = useState("shop")
    const {getTotalCartItems} = useContext(ShopContext)

  return (
    <div className='navbar' style={{display:"flex", justifyContent:"space-around"}} >
        <div className='nav-logo'>
            <img src={logo} alt=""/>
            <p>SHOPPER</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}} className={menu === "shop" ? "shop-active" : ""}>
                <Link style={{textDecoration:'none'}} to="/"  className={menu === "shop" ? "shop-link-active" : ""}>Shop</Link>
            </li>

            <li onClick={()=>{setMenu("men")}} className={menu === "men" ? "shop-active" : ""}> 
                <Link style={{textDecoration:'none'}} to="/men" className={menu === "shop" ? "shop-link-active" : ""} >Men</Link>
            </li>

            <li onClick={()=>{setMenu("women")}} className={menu === "women" ? "shop-active" : ""}> 
                <Link style={{textDecoration:'none'}} to="/women" className={menu === "shop" ? "shop-link-active" : ""} >Women</Link> 
            </li>

            <li onClick={()=>{setMenu("kids")}} className={menu === "kids" ? "shop-active" : ""}> 
                <Link style={{textDecoration:'none'}} to="/kids" className={menu === "shop" ? "shop-link-active" : ""} >Kids</Link>
            </li>
        </ul>
        <div className='nav-login-cart'>
            <Link to='/login'><button>Login</button></Link> 
            <Link to='/cart' ><img src={cart_icon} alt="" /></Link> 
            <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar
