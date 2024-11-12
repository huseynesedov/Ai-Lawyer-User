import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

function PrivateRoute() {
  const token = localStorage.getItem('token') || localStorage.getItem('google-token');
  const location = useLocation();

  // Eğer token yoksa login sayfasına yönlendir ve gitmek istenen yeri sakla
  if (!token) {
    return <Navigate to={`/Login?returnUrl=${encodeURIComponent(location.pathname)}`} />;
  }

  // Eğer kullanıcı giriş yapmışsa, içeriği göster
  return <Outlet />;
}

export default PrivateRoute;
