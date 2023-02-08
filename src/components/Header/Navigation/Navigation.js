import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  const navigate = useNavigate();
  return (
    <div className="nav-container">
      <div onClick={() => navigate("/")} className="logo"></div>
      <nav className="nav">
        <NavLink
          className="nav-link"
          style={({ isActive }) => ({
            color: isActive ? "orange" : "#black",
          })}
          to="/"
        >
          Home
        </NavLink>
        <a className="nav-link" href="#about">
          About
        </a>
        <a className="nav-link" href="#menu">
          Menu
        </a>
        <NavLink
          className="nav-link"
          style={({ isActive }) => ({
            color: isActive ? "orange" : "black",
          })}
          to="/reservations"
        >
          Reservations
        </NavLink>
      </nav>
    </div>
  );
}

export default Navigation;
