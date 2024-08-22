//src/PrivateRoutes/PrivateRoute.js

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

// import React from 'react';
// import { Navigate, Outlet, useLocation } from 'react-router-dom';
// import { useContext } from 'react';
// import { UserContext } from '../App'; // Adjust path as necessary

// const PrivateRoute = () => {
//   const { user } = useContext(UserContext);
//   const location = useLocation();

//   // Redirect to login if not logged in, passing the current location as state
//   return user ? <Outlet /> : <Navigate to='/login' state={{ from: location }} />;
// };

// export default PrivateRoute;
