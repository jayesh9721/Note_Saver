import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="style">
      <nav className="navbar">
        <div><NavLink to="/">Home</NavLink></div>    
      <div><NavLink to="/notes">Notes</NavLink></div>
    </nav>
    </div>
    
  );
};

export default Navbar;
