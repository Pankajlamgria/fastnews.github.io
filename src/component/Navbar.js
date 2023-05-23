import React from "react";
// import PropTypes from "prop-types";]

// install v5 of react-router-dom
// npm i react-router-dom@5.2.0
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      <nav
        className={`navbar stickynavbar navbar-expand-lg bg-body-tertiary ${
          props.theme ? "bg-dark" : "bg-light"
        }`}
        data-bs-theme={`${props.theme ? "dark" : " light"}`}
      >
        <div className="container-fluid">
          <Link style={props.theme?{color:"white"}:{color:"black"}} className={`navbar-brand disabled `} to="/">
            Fast News
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  style={props.theme?{color:"white"}:{color:"black"}}
                  id="home"
                  className="nav-link active"
                  to="/"
                  onClick={() => {
                    document.getElementById("newstype").style.color = "grey";
                    document.getElementById("home").style.color = `${props.theme?"white":"black"}`;
                  }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown active">
                <a
                  id="newstype"
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={props.theme?{color:"white"}:{color:"black"}}
                  onClick={() => {
                    document.getElementById("newstype").style.color = `${props.theme?"white":"black"}`;
                    document.getElementById("home").style.color = "grey";
                  }}
                >
                  News-type
                </a>
                <ul className="dropdown-menu">
                  <li id="1" className={`dropdown-item `}>
                    <Link
                      style={props.theme?{color:"white"}:{color:"black"}}
                      to="/"
                      onClick={() => {
                        console.log("done");
                        document.getElementById("1").style.textShadow =
                        `1px 1px ${props.theme?"white":"grey"}`;
                        document.getElementById("2").style.textShadow = "none";
                        document.getElementById("3").style.textShadow = "none";
                        document.getElementById("4").style.textShadow = "none";
                        document.getElementById("5").style.textShadow = "none";
                        document.getElementById("6").style.textShadow = "none";
                      }}
                    >
                      General
                    </Link>
                  </li>
                  <li id="2" className="dropdown-item ">
                    <Link
                      style={props.theme?{color:"white"}:{color:"black"}}
                      to="/sports"
                      onClick={() => {
                        document.getElementById("2").style.textShadow =
                        `1px 1px ${props.theme?"white":"grey"}`;
                        document.getElementById("1").style.textShadow = "none";
                        document.getElementById("3").style.textShadow = "none";
                        document.getElementById("4").style.textShadow = "none";
                        document.getElementById("5").style.textShadow = "none";
                        document.getElementById("6").style.textShadow = "none";
                      }}
                    >
                      Sports
                    </Link>
                  </li>
                  <li id="3" className="dropdown-item ">
                    <Link
                      style={props.theme?{color:"white"}:{color:"black"}}
                      to="/technology"
                      onClick={() => {

                        document.getElementById("3").style.textShadow =
                          `1px 1px ${props.theme?"white":"grey"}`;
                        document.getElementById("1").style.textShadow = "none";
                        document.getElementById("2").style.textShadow = "none";
                        document.getElementById("4").style.textShadow = "none";
                        document.getElementById("5").style.textShadow = "none";
                        document.getElementById("6").style.textShadow = "none";
                      }}
                    >
                      Technology
                    </Link>
                  </li>
                  <li id="4" className="dropdown-item ">
                    <Link
                      style={props.theme?{color:"white"}:{color:"black"}}
                      onClick={() => {
                        document.getElementById("4").style.textShadow =
                        `1px 1px ${props.theme?"white":"grey"}`;
                        document.getElementById("1").style.textShadow = "none";
                        document.getElementById("3").style.textShadow = "none";
                        document.getElementById("2").style.textShadow = "none";
                        document.getElementById("5").style.textShadow = "none";
                        document.getElementById("6").style.textShadow = "none";
                      }}
                      to="/business"
                    >
                      Business
                    </Link>
                  </li>
                  <li id="5" className="dropdown-item ">
                    <Link
                      style={props.theme?{color:"white"}:{color:"black"}}
                      to="/health"
                      onClick={() => {
                        document.getElementById("5").style.textShadow =
                          `1px 1px ${props.theme?"white":"grey"}`;
                        document.getElementById("1").style.textShadow = "none";
                        document.getElementById("3").style.textShadow = "none";
                        document.getElementById("4").style.textShadow = "none";
                        document.getElementById("2").style.textShadow = "none";
                        document.getElementById("6").style.textShadow = "none";
                      }}
                    >
                      Health
                    </Link>
                  </li>
                  <li id="6" className="dropdown-item ">
                    <Link
                      style={props.theme?{color:"white"}:{color:"black"}}
                      to="/entertainment"
                      onClick={() => {
                        document.getElementById("6").style.textShadow =
                        `1px 1px ${props.theme?"white":"grey"}`;
                        document.getElementById("1").style.textShadow = "none";
                        document.getElementById("3").style.textShadow = "none";
                        document.getElementById("4").style.textShadow = "none";
                        document.getElementById("5").style.textShadow = "none";
                        document.getElementById("2").style.textShadow = "none";
                      }}
                    >
                      Entertainment
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          <div className="form-check form-switch darkbtn" >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggelfunc}
            />
            <label className="form-check-label" for="flexSwitchCheckDefault" style={props.theme?{color:"white"}:{color:"black"}} >
              Darkmode  
            </label>
          </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
