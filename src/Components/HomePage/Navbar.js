import React from 'react'
import { Router } from 'react-router-dom';
import '../../style/HomePage/NavBar.css' 


function Navbar() {
  return (
    <Router>
    <div className = "nav-header">
      <div className="logo">
        <a href="/" ><h1>Veggigo</h1></a>
      </div>
      <input type="text" className="search-bar" placeholder="Enter the vegitable name you want to search"/>
      <ul className = "options">
        <a href= "/"><li>Home</li></a>
        <li>My Orders</li>
        <a href="./LoginPage.js">
        <li>Login</li></a>
        
      </ul>
    </div>
    </Router>
  )
}

export default Navbar;