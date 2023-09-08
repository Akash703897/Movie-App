import React from 'react'
import "./Header.css"
import {Link } from "react-router-dom"
const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
      
      <Link to="/"> <img className="header_icon" src="https://th.bing.com/th/id/OIP.uWNk4C1vs6qw1opYc4q82QHaDv?w=310&h=177&c=7&r=0&o=5&dpr=1.3&pid=1.7" ></img></Link>
      <Link to ="/Movies/popular"  style={{textDecoration:"none"}}><span>Popular</span></Link>
      <Link to ="/Movie/top_rated" style={{textDecoration:"none"}}><span>Top Rated</span></Link>
      <Link to ="/Movie/upcoming" style={{textDecoration:"none"}}><span>Upcoming</span></Link>
      </div>
    </div>
  )
}

export default Header

