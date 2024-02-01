// import React, { useContext, useState,useRef } from 'react'
// import './Navbar.css'

// import logo from '../Assets/logo.png'
// import cart_icon from '../Assets/cart_icon.png'
// import { Link } from 'react-router-dom'
// import { ShopContext } from '../../Context/ShopContext'
// import nav_drop_down from '../Assets/nav_drop_down.png'

// const Navbar = () => {
//   const [menu,setMenu] = useState('shop')
//   const {getTotalCartItems} = useContext(ShopContext);
//   const menuRef = useRef();

//   const dropdown_toggle = (e) => {
//        menuRef.current.classList.toggle('nav-menu-visible');
//        e.target.classList.toggle('open');
//   }
//   return (
//     <div className='navbar'>
//       <div className="nav-logo">
//         <img src={logo} alt=''/>
//         <p>SHOPPER</p>
//       </div>
//       <img className="nav_dropdown" onClick={dropdown_toggle} src={nav_drop_down} alt="" />
//       <ul ref={menuRef} className="nav-menu">
//         <li onClick={()=>{setMenu('shop')}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==='shop'?<hr/>:<></>}  </li>
//         <li onClick={()=>{setMenu('mens')}}><Link style={{textDecoration: 'none'}} to='/mens'>Men</Link>{menu==='mens'?<hr/>:<></>} </li>
//         <li onClick={()=>{setMenu('womens')}}><Link style={{textDecoration: 'none'}} to='/womens'>Women</Link>{menu==='womens'?<hr/>:<></>} </li>
//         <li onClick={()=>{setMenu('kids')}}><Link style={{textDecoration: 'none'}} to='/kids'>Kid</Link>{menu==='kids'?<hr/>:<></>} </li>
//         <li onClick={()=>{setMenu('sports')}}><Link style={{textDecoration: 'none'}} to='/sports'>Sport</Link>{menu==='sports'?<hr/>:<></>} </li>
//       </ul>
//       <div className="nav-login-cart">
//         <Link to='/login'><button>Login</button></Link>
//         <Link to='/cart'><img src={cart_icon} alt=''/></Link>
//         <div className="nav-cart-count">{getTotalCartItems()}</div>
//       </div>
//     </div>
//   )
// }

// export default Navbar


import React, { useContext, useState, useRef } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.jpg';
import cart_icon from '../Assets/cart_icon.png';
import nav_drop_down from '../Assets/nav_drop_down.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  const [searchInput, setSearchInput] = useState('');
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = (query) => {
    console.log('Searching for:', query);
  };

  
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt=''/>
        <p>SHOPPER</p>
      </div>
      <img className="nav_dropdown" onClick={dropdown_toggle} src={nav_drop_down} alt="" />
      <ul ref={menuRef} className="nav-menu">
      <li onClick={()=>{setMenu('shop')}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==='shop'?<hr/>:<></>}  </li>
       <li onClick={()=>{setMenu('mens')}}><Link style={{textDecoration: 'none'}} to='/mens'>Men</Link>{menu==='mens'?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu('womens')}}><Link style={{textDecoration: 'none'}} to='/womens'>Women</Link>{menu==='womens'?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu('kids')}}><Link style={{textDecoration: 'none'}} to='/kids'>Kid</Link>{menu==='kids'?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu('sports')}}><Link style={{textDecoration: 'none'}} to='/sports'>Sport</Link>{menu==='sports'?<hr/>:<></>} </li>
      </ul>
      <div className="nav-search">
        <input
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={handleSearchInputChange}
        />
        <button onClick={() => handleSearch(searchInput)}>Search</button>
      </div>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
        :<Link to='/login'><button>Login</button></Link>}
        <Link to='/cart'><img src={cart_icon} alt=''/></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
