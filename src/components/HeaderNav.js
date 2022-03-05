import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUserInfo } from "../Contexts/UserContext";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

function HeaderNav() {
  const userInfo = useUserInfo();
  const isLoggedIn = userInfo.uid !== null && userInfo.uid !== undefined;
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return isLoggedIn ? (
    <>
      <ul className={isOpen ? "navlinks active" : "navlinks"}>
        {/* <li className="link">
          <Link to="/home">Home</Link>
        </li>
        <li className="link">
          <Link to="/profile/me">Edit Profile</Link>
        </li> */}
        <li className="link">
          <LogoutButton />
        </li>
      </ul>
      <div className="hamburger-toggle" onClick={toggleMenu}>
        <i className="fas fa-bars fa-lg" />
      </div>
    </>
  ) : (
    <LoginButton />
  );
}

export default HeaderNav;
