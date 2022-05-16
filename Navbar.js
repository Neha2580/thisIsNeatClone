import React from "react";
import {link} from 'react-router-dom';
function Navbar() {
    return(
  
        <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
         <div className="logo"> <a class="navbar-brand " href="#"  >Neat</a></div>
          {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button> */}
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">LOCATION</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">SERVICES</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">RESOURCES</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">BLOG</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">REVIEWS</a>
              </li>
            </ul>
           <div className="quote"> <form class="d-flex" role="search">
        <button class="button btn btn-outline-secondary" type="submit">GET A QUOTE</button>
      </form></div>
          </div>
        </div>
      </nav>
  
    );
}

export default Navbar;