import React from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";




export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/"  className="navbar-brand">
          <img
            style={{ width: "2.5vw" }}
            src={require("../Asserts/img/logo.png")}
            alt=""
          />
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav">
            <NavLink to="/" className="nav-item nav-link">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-item nav-link">
              About
            </NavLink>
            <NavLink to="/contact" className="nav-item nav-link">
              Contact
            </NavLink>
          </div>
          <div className="navbar-nav ms-auto">
            <NavLink to="/auth/login" className="nav-item nav-link">
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
