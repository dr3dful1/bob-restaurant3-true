import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
 <nav className="navbar navbar-expand-lg navbar-light   navbox ">
     
      <ul className="navbar-nav mr-auto navTextDiv">
        <li className="nav-item">
          <Link className="nav-link navText" href="#" to={{pathname:'/'}}>Home <span class="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link navText" href="#" to={{pathname:'/Menu'}}> Menu </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link navText" href="#" to={{pathname:'/History'}}> About Us</Link>
        </li>
      </ul>
   
</nav>
    )
}

export default Navbar;