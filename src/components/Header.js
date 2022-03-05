import React from "react";
import { Link } from "react-router-dom";
import HeaderNav from "./HeaderNav";

function Header() {
  return (
    <nav className="navHeader">
      <Link className="logoSection" to="/">
        <i className="fas fa-person-hiking" />
        <h4>Trail Page</h4>
      </Link>
      <HeaderNav />
    </nav>
  );
}

export default Header;
