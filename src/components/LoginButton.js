import React from "react";

export default function LoginButton({ user }) {
  function handleLogin(e) {
    e.preventDefault();
    user.login();
  }
  return (
    <div className="LoginButton" onClick={handleLogin}>
      Sign In
    </div>
  );
}
