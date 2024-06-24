// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import AdminLogin from './components/AdminLogin';
// import AdminDash from './AdminDash';
// // import Home from './components/Home';
// import Profile from './components/Profile';

// const AdminApp = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLoginSuccess = () => {
//     setIsLoggedIn(true);
//   };

//   return (
//     <Router>
//       <Routes>
//         {isLoggedIn ? (
//           <Route path="/*" element={<AdminDash />} />
//         ) : (
//           <Route path="/" element={<AdminLogin onLoginSuccess={handleLoginSuccess} />} />
//         )}
//       </Routes>
//     </Router>
//   );
// };

// export default AdminApp;


// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
import AdminDash from './AdminDash';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            isAuthenticated ? <Navigate to="/AdminDash" /> : <AdminLogin onLoginSuccess={handleLoginSuccess} />
          }
        />
        <Route
          path="/AdminDash"
          element={
            isAuthenticated ? <AdminDash /> : <Navigate to="/login" />
          }
        />
        <Route
          path="*"
          element={<Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
