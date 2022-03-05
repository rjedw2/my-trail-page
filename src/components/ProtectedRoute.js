import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useUserInfo } from "../Contexts/UserContext";

function ProtectedRoute({ Component, ...rest }) {
  const { isAuthenticated } = useUserInfo();
  return (
    <Route {...rest}>
      {isAuthenticated ? <Component /> : <Redirect to="/welcome" />}
    </Route>
  );
}

export default ProtectedRoute;
