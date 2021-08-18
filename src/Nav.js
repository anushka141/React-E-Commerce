import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "white",
  };
  return (
    <nav>
      <Link style={navStyle} to='/'>
        <h3>Logo</h3>
      </Link>
      <ul className="nav-links">
        <li>Home</li>
        <Link style={navStyle} to="/wishlist">
          <li>Wishlist</li>
        </Link>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>
      <textarea className="nav-search" name="" id="" cols="30" rows="10">
        Search
      </textarea>
      <h3>Cart</h3>
      <Link style={navStyle} to="/login">
        <button className="nav-button">LOGIN</button>
      </Link>
    </nav>
  );
}

export default Nav;
