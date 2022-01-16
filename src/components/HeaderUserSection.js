import React from "react";
import userService from "../services/UserService";
import LoginButton from "./LoginButton";
import UserProfileButton from "./UserProfileButton";

export default function HeaderUserSection() {
  const user = userService();
  if (user.isLoggedIn()) {
    return <UserProfileButton UserService={user} />;
  } else {
    return <LoginButton user={user} />;
  }
}
