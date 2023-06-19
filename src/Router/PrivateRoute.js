import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex items-center justify-center mx-auto border h-screen">
        <span className="loading loading-ring h-48 w-48 "></span>
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (user) {
    return children;
  }
};

export default PrivateRoute;
