import React from "react";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const token = document.cookie.replace(
    /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );

  return token ? <Element {...rest} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
