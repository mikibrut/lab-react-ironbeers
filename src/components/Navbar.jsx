import React from "react";
import { FaBeer } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/">
            <FaBeer size={60} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;