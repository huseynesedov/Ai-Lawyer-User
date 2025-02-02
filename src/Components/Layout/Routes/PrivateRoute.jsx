import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

function PrivateRoute() {
  const token = localStorage.getItem('token') || localStorage.getItem('google-token');
  const location = useLocation();

  if (!token) {
    return <Navigate to={`/Login?returnUrl=${encodeURIComponent(location.pathname)}`} />;
  }

  return <Outlet />;
}

export default PrivateRoute;
