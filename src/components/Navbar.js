import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                home
              </a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">
                about
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link" href="/">
                {props.about}
              </a>
            </li> */}
            {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li> */}
            {/* <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li> */}
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
          {/* <div className="d-flex ">
            <button type="button" onClick={()=>{
              props.togglemode('primary')
            }} class="btn btn-primary mx-3" style={{
              height:"30px",
              width:"30px"
            }}>
              
            </button>
            <button type="button" onClick={()=>{
              props.togglemode('success')
            }} class="btn btn-success mx-3" style={{
              height:"30px",
              width:"30px"
            }}>
              
            </button>
            <button type="button" onClick={()=>{
              props.togglemode('danger')
            }} class="btn btn-danger mx-3" style={{
              height:"30px",
              width:"30px"
            }}>
              
            </button>
            <button type="button" onClick={()=>{
              props.togglemode('warning')
            }} class="btn btn-warning mx-3" style={{
              height:"30px",
              width:"30px"
            }}>
            
            </button>
          </div> */}
          <div className="form-check form-switch">
            <input
              onClick={()=>{props.togglemode(null)}}
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className={`form-check-label text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              enable dark mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = { title: PropTypes.string, about: PropTypes.string };

Navbar.defaultProps = {
  title: "set title here",
  about: "set about here",
};
