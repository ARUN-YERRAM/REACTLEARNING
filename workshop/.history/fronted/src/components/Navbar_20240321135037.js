Navbar.js

import { Link } from "react-router-dom";
import React from "react";
const Navbar = () => {
    return ( 
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="https://kmit.in/">KMIT</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/home" >Home</Link>
        </li>
        <li class="nav-item">
            <Link to="/houses">Houses</Link>
        </li>
        <li class="nav-item">
          <Link to="/aboutproject">About Project</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
            
        </>
     );
}
 
export default Navbar;