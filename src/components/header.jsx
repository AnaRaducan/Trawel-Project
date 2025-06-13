import React from "react";
import "./header.css";
import img5 from "../img/img5.jpg";

function Header() {
  return (
    <header
      className="header"
      style={{ backgroundImage: `url(${img5})` }}
    >
      <div className="nav-bar">
        <div className="logo">Trawel</div>
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#destination">Destinations</a>
          <a href="#footer">About</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
