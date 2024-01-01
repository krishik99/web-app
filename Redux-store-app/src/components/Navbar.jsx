import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {
    Link
  } from "react-router-dom";
import {useAuth} from '../utilities/AuthContext';
import { removeAll } from './CartSlice';
import reduxIcon from '../assets/redux.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  const {loggedIn,setLoggedIn} = useAuth();
  const dispatch = useDispatch();
  console.log(loggedIn)
    const {data:products} = useSelector(state => state.cart)
    const [showMobileMenu,setShowMobileMenu] = useState(false);
    const showMenus = () => {
      setShowMobileMenu((menu)=> !menu);
    }
  return (
    <div className='navbar'>
      <div className='redux-store-logo'><img src={reduxIcon} alt='redux-icon' width='50px' height='30px'/> Redux Store</div>
      <div className='webMenu'>
        {loggedIn && <span className='user-name'>Welcome <b>{loggedIn.name && loggedIn.name.firstname}</b></span>}
        {loggedIn && <Link className='navlinks' to="/home">Products</Link>}
        {loggedIn &&  <Link className='navlinks' to={loggedIn ? '/cart' : '/login'}><span>Cart<sup>{products && products.length}</sup></span></Link>}
        {!loggedIn && <Link className='navlinks' to="/login">Login</Link>}
        {loggedIn && <Link className='navlinks' to="/login" onClick={()=>{setLoggedIn(null);dispatch(removeAll())}}>Logout</Link>}
      </div>
      <div className='bars'>
      {loggedIn && <span className='user-name'>Welcome <b>{loggedIn.name && loggedIn.name.firstname}</b></span>}
      <FontAwesomeIcon icon={faBars} style={{fontSize:'20px',color:'#ffcc6c'}} onClick={showMenus}/>
      {
      <div className='menu-cards' style={{opacity: showMobileMenu ? '1' : '0'}}>
        {loggedIn && <Link className='navlinks' to="/home">Products</Link>}
        {loggedIn &&  <Link className='navlinks' to={loggedIn ? '/cart' : '/login'}><span>Cart<sup>{products && products.length}</sup></span></Link>}
        {!loggedIn && <Link className='navlinks' to="/login">Login</Link>}
        {loggedIn && <Link className='navlinks' to="/login" onClick={()=>{setLoggedIn(null);dispatch(removeAll())}}>Logout</Link>}
      </div>
      }
      </div>
    </div> 
  )
}

export default Navbar