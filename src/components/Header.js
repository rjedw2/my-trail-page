import React from "react";
import logo from "../assets/owlLogo.png";
import UserSection from "./HeaderUserSection";

const appName = "Trail Page";

export default function Header() {
  return (
    <div className="AppHeader">
      <div className="AppLogo">
        <img alt="Trail Page Logo" src={logo} />
      </div>
      <h3 className="AppName">{appName}</h3>
      <div className="Spacer"></div>
      <UserSection />
    </div>
  );
}
