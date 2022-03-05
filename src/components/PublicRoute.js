import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useUserInfo } from "../Contexts/UserContext";

function PublicRoute({ Component, ...rest }) {
  const { isAuthenticated } = useUserInfo();
  return (
    <Route {...rest}>
      {!isAuthenticated ? <Component /> : <Redirect to="/" />}
    </Route>
  );
}

export default PublicRoute;
