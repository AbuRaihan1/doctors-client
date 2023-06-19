import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) return <>loading...</>
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (user) {
    return children;
  }
};

export default PrivateRoute;
