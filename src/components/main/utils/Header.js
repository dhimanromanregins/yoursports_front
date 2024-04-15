// Header.js

import React from 'react';
import Switcher from './Switcher';
// import { LuChevronDown } from "react-icons/lu";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className='container'>

      <div>
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid font-semibold">
            {/* <img src={Icon2} alt="Your Alt Text Here" className="Icon2-img" /> */}
            <div>
              <a className="navbar-brand  me-1 " href="#">

                <img src="main-logo.png"></img>
              </a>
            </div>



            <button
              className="navbar-toggler ms-auto"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  <a className="navbar-brand me-1 your" href="#">
                    Your
                  </a>
                  <a className="navbar-brand me-auto spotz" href="#">
                    Sportz
                  </a>
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body pl-10">
                <ul className="navbar-nav justify-content-center align-items-center flex-grow-1 pe-3">
                  <li className="nav-item">
                    <NavLink to="/" className="nav-link">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/about" className="nav-link">
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/features" className="nav-link">
                      Features
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/pricing" className="nav-link">
                      Pricing
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/contact" className="nav-link">
                      Contact Us
                    </NavLink>
                  </li>

                  <div className='col-1'>
                  <Switcher />

                  <div id="google_translate_element"></div>

                </div>
             
              
                </ul>
                <div className='col-1'>
                <div className="login-wrapper align-items-center col-1">
                  <div className="login-button">
                    <NavLink to="/login" className="flex items-center login-wrap ">
                      Log In
                      <img src="Vector.png"></img>
                    </NavLink>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>



    </div>


  );
}

export default Header;
