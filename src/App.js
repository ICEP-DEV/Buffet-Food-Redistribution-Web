<<<<<<< HEAD
=======
// import React, { useState, createContext } from 'react';
// import { Link, Routes, Route, useNavigate } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Home from './pages/Home';
// import Menu from './pages/Menu';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import SignUp from './pages/SignUp';
// import Login from './pages/Login';
// import RecepientSignUp from './pages/RecepientSignUp';
// import LandingPage from './Landing-page/LandingPage';
// import FoodListing from './pages/FoodListing';
// import RecipientLandingPage from './Landing-page/RecipientLandingPage';
// import ProfileApp from './Dashboard/profileApp';
// import UserProfile from './Dashboard/UserProfile';
// import Routez from './Landing-page/routes';
// import RequestPage from './pages/request';

// // Create UserContext
// export const UserContext = createContext(null);

// function App() {
//   const [user, setUser] = useState(null); // State to hold user information
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     setUser(null);
//     navigate('/');
//   };

//   const loggedInButtons = user ? (
//     <>
//       {user.userType === 'recipient' && (
//         <Nav.Link as={Link} to='/RecipientLandingPage' className='text-uppercase text-white'>
//           Landing Page (Recipient)
//         </Nav.Link>
//       )}
//       {user.userType === 'donor' && (
//         <Nav.Link as={Link} to='/home' className='text-uppercase text-white'>
//           Landing Page (Donor)
//         </Nav.Link>
//       )}
//     </>
//   ) : null;

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       <Navbar expand="lg" className='fixed-top bg-dark shadow'>
//         <Container>
//           <Navbar.Brand>
//             <Link to="/" className='navbar-brand text-success fw-semibold'>
//               FoodShare Network
//             </Link>
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls='basic-navbar-nav' />
//           <Navbar.Collapse id='basic-navbar-nav'>
//             <Nav className='me-auto justify-content-end w-100 fw-normal'>
//               <Nav.Link as={Link} to='/' className='text-uppercase text-white'>Home</Nav.Link>
//               {!user && (
//                 <>
//                   <Nav.Link as={Link} to='/about' className='text-uppercase text-white'>About</Nav.Link>
//                   <Nav.Link as={Link} to='/contact' className='text-uppercase text-white'>Contact</Nav.Link>
//                   <Nav.Link as={Link} to='/login' className='text-uppercase text-white'>Login</Nav.Link>
//                 </>
//               )}
//               {!user ? (
//                 <DropdownButton title="SIGN UP" variant="outline-success" className="btn-lg">
//                   <Dropdown.Item as={Link} to="/signup">As Donor</Dropdown.Item>
//                   <Dropdown.Item as={Link} to="/recepientsignup">As Recipient</Dropdown.Item>
//                 </DropdownButton>
//               ) : (
//                 <>
//                   <Nav.Link as={Link} to='/profile' className='text-uppercase text-white'>
//                     {user.prefixUsername}
//                   </Nav.Link>
//                   <Nav.Link onClick={handleLogout} className='text-uppercase text-white'>
//                     Logout
//                   </Nav.Link>
//                 </>
//               )}
//               {loggedInButtons}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/home' element={<LandingPage />} />
//         <Route path='/menu' element={<Menu />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/contact' element={<Contact />} />
//         <Route path='/signup' element={<SignUp />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/recepientsignup' element={<RecepientSignUp />} />
//         <Route path='/foodlisting' element={<FoodListing />} />
//         <Route path='/RecipientLandingPage' element={<RecipientLandingPage />} />
//         <Route path='/profile' element={<ProfileApp />} />
//         <Route path='/UserProfile' element={<UserProfile />} />
//         <Route path="/request/:id" element={<RequestPage />} />
//       </Routes>

//       <Routez />

//       <footer className='bg-dark text-white fixed-bottom mt-5'>
//         <p className='p-3 m-0 text-center'>Copyright @ made by Food Share Network</p>
//       </footer>
//     </UserContext.Provider>
//   );
// }

// export default App;


>>>>>>> 2649c5c08ce08a34509cbb822b9c5785e5950a4e
import React, { useState, createContext } from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import RecepientSignUp from './pages/RecepientSignUp';
import LandingPage from './Landing-page/LandingPage';
import FoodListing from './pages/FoodListing';
import RecipientLandingPage from './Landing-page/RecipientLandingPage';
import UserProfile from './Dashboard/UserProfile';
<<<<<<< HEAD
import PrivacyPolicyContent from './pages/PrivacyPolicyContent';
=======
import Routez from './Landing-page/routes';
import RequestPage from './pages/request';

// Import FontAwesome for social media icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
>>>>>>> 2649c5c08ce08a34509cbb822b9c5785e5950a4e

// Create UserContext
export const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState(null); // State to hold user information
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

<<<<<<< HEAD
  const loggedInButton = user ? (
    <>
      {user.userType === 'recipient' && (
        <Nav.Link as={Link} to='/RecipientLandingPage' className='active text-uppercase text-white'>
          Landing Page 
        </Nav.Link>
      )}
      {user.userType === 'donor' && (
        <Nav.Link as={Link} to='/home' className='active text-uppercase text-white'>
          Landing Page
=======
  const loggedInButtons = user ? (
    <>
      {user.userType === 'recipient' && (
        <Nav.Link as={Link} to='/RecipientLandingPage' className='text-uppercase text-white'>
          Landing Page (Recipient)
        </Nav.Link>
      )}
      {user.userType === 'donor' && (
        <Nav.Link as={Link} to='/home' className='text-uppercase text-white'>
          Landing Page (Donor)
>>>>>>> 2649c5c08ce08a34509cbb822b9c5785e5950a4e
        </Nav.Link>
      )}
    </>
  ) : null;

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Navbar expand="lg" className='fixed-top bg-dark shadow'>
        <Container>
          <Navbar.Brand>
            <Link to="/" className='navbar-brand text-success fw-semibold'>
              FoodShare Network
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100 fw-normal'>
              <Nav.Link as={Link} to='/' className='text-uppercase text-white'>Home</Nav.Link>
              {!user && (
                <>
                  <Nav.Link as={Link} to='/about' className='text-uppercase text-white'>About</Nav.Link>
                  <Nav.Link as={Link} to='/contact' className='text-uppercase text-white'>Contact</Nav.Link>
                  <Nav.Link as={Link} to='/login' className='text-uppercase text-white'>Login</Nav.Link>
                </>
              )}
              {user ? loggedInButton : null}
              {!user ? (
                <DropdownButton title="SIGN UP" variant="outline-success" className="btn-lg">
                  <Dropdown.Item as={Link} to="/signup">As Donor</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/recepientsignup">As Recipient</Dropdown.Item>
                </DropdownButton>
              ) : (
                <>
                  <Nav.Link as={Link} to='/profile' className='text-uppercase text-white'>
                    {user.prefixUsername}
                  </Nav.Link>
                  <Nav.Link onClick={handleLogout} className='text-uppercase text-white'>
                    Logout
                  </Nav.Link>
                </>
              )}
              {loggedInButtons}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<LandingPage />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/recepientsignup' element={<RecepientSignUp />} />
        <Route path='/foodlisting' element={<FoodListing />} />
        <Route path='/RecipientLandingPage' element={<RecipientLandingPage />} />
<<<<<<< HEAD
        <Route path='/profileApp' element={<UserProfile />} />
        <Route path="/privacy" element={<PrivacyPolicyContent />} />
=======
        <Route path='/profile' element={<ProfileApp />} />
        <Route path='/UserProfile' element={<UserProfile />} />
        <Route path="/request/:id" element={<RequestPage />} />
>>>>>>> 2649c5c08ce08a34509cbb822b9c5785e5950a4e
      </Routes>

      <Routez />

      <footer className='bg-dark text-white fixed-bottom'>
        <div className="container py-3">
          <div className="row justify-content-center align-items-center">
            <div className="col-auto">
              <p className='m-0'>Copyright @ made by Food Share Network</p>
            </div>
            <div className="col-auto">
              <a href="https://facebook.com" className="text-white social-icon mx-2"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
              <a href="https://twitter.com" className="text-white social-icon mx-2"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
              <a href="https://instagram.com" className="text-white social-icon mx-2"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
            </div>
          </div>
        </div>
      </footer>
    </UserContext.Provider>
  );
}

export default App;
