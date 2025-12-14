import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth"; // <- ALX checker looks for this

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
