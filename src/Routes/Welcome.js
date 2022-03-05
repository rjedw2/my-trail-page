import React from "react";
import LoginButton from "../components/LoginButton";

export default function Welcome() {
  return (
    <div className="welcome">
      <h2>Share your adventure</h2>
      <p>
        TrailPage is a place to share your hiking experiences with friends,
        family, and other hikers.
      </p>
      <div className="welcomeButtons">
        <LoginButton />
      </div>
    </div>
  );
}
