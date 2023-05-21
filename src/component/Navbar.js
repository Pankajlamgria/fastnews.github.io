import React from "react";
// import PropTypes from "prop-types";]

// install v5 of react-router-dom
// npm i react-router-dom@5.2.0
import { Link } from "react-router-dom";

const Navbar=()=> {
    
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className={`navbar-brand disabled `} to="/">
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
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
        
        <div className="mx-3">
          <nav aria-label="breadcrumb ">
            <ol className="breadcrumb">
              <li id="1" className={`breadcrumb-item `}>
                <Link to="/"  onClick={()=>{
                  console.log("done")
                  document.getElementById("1").style.textShadow="1px 1px grey"
                  document.getElementById("2").style.textShadow="none"
                  document.getElementById("3").style.textShadow="none"
                  document.getElementById("4").style.textShadow="none"
                  document.getElementById("5").style.textShadow="none"
                  document.getElementById("6").style.textShadow="none"
                }} >General</Link>  
              </li>
              <li id="2" className="breadcrumb-item " >
                <Link to="/sports" onClick={()=>{
                  document.getElementById("2").style.textShadow="1px 1px grey"
                  document.getElementById("1").style.textShadow="none"
                  document.getElementById("3").style.textShadow="none"
                  document.getElementById("4").style.textShadow="none"
                  document.getElementById("5").style.textShadow="none"
                  document.getElementById("6").style.textShadow="none"
                }}>Sports</Link>
              </li>
              <li id="3" className="breadcrumb-item ">
                <Link to="/technology"  onClick={()=>{
                  document.getElementById("3").style.textShadow="1px 1px grey"
                  document.getElementById("1").style.textShadow="none"
                  document.getElementById("2").style.textShadow="none"
                  document.getElementById("4").style.textShadow="none"
                  document.getElementById("5").style.textShadow="none"
                  document.getElementById("6").style.textShadow="none"
                }}>Technology</Link>
              </li>
              <li id="4" className="breadcrumb-item ">
                <Link  onClick={()=>{
                  document.getElementById("4").style.textShadow="1px 1px grey"
                  document.getElementById("1").style.textShadow="none"
                  document.getElementById("3").style.textShadow="none"
                  document.getElementById("2").style.textShadow="none"
                  document.getElementById("5").style.textShadow="none"
                  document.getElementById("6").style.textShadow="none"
                }} to="/business" >Business</Link>
              </li>
              <li id="5" className="breadcrumb-item ">
                <Link to="/health"  onClick={()=>{
                  document.getElementById("5").style.textShadow="1px 1px grey"
                  document.getElementById("1").style.textShadow="none"
                  document.getElementById("3").style.textShadow="none"
                  document.getElementById("4").style.textShadow="none"
                  document.getElementById("2").style.textShadow="none"
                  document.getElementById("6").style.textShadow="none"
                }}>Health</Link>
              </li>
              <li id="6" className="breadcrumb-item ">
                <Link to="/entertainment"  onClick={()=>{
                  document.getElementById("6").style.textShadow="1px 1px grey"
                  document.getElementById("1").style.textShadow="none"
                  document.getElementById("3").style.textShadow="none"
                  document.getElementById("4").style.textShadow="none"
                  document.getElementById("5").style.textShadow="none"
                  document.getElementById("2").style.textShadow="none"
                }}>Entertainment</Link>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    );
  }


export default Navbar;
