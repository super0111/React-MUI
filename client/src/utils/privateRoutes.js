import React, { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

 const PrivateRoutes = () => {
  const [ auth, setAuth ] = useState(localStorage.getItem('token') || null);

  return auth ? <Outlet /> : <Navigate to="/login" />;
 }

export default PrivateRoutes