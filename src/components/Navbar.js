import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light  ">
  <a className="navbar-brand" href="#">Taste of Carribbean</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" href="#" to={{pathname:'/'}}>Home <span class="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="#" to={{pathname:'/Menu'}}> Menu </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="#" to={{pathname:'/History'}}> History </Link>
      </li>

      {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li> */}
      {/* <li className="nav-item">
        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li> */}
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    )
}

export default Navbar;