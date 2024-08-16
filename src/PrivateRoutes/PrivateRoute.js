// src/PrivateRoutes/PrivateRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../App'; // Adjust path as necessary

const PrivateRoute = () => {
  const { user } = useContext(UserContext);

  // Redirect to login if not logged in
  return user ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoute;

