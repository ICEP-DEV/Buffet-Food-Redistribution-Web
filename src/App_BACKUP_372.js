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
import Routez from './Landing-page/routes';
import LandingPage from './Landing-page/LandingPage';
import FoodListing from './pages/FoodListing';
import RecipientLandingPage from './Landing-page/RecipientLandingPage';
// import ProfileApp from './Dashboard/profileApp';
import UserProfile from './Dashboard/UserProfile';

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
=======
  const loggedInButton = (
    <Nav.Link as={Link} to='/home' className='active text-uppercase text-white'>
      Landing Page
    </Nav.Link>
  );

>>>>>>> 5487506f4e1b3dec433aeb3497534bb14593ddd7
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
            <Nav className='me-auto justify-content-end w-100 fw-bold'>
              <Nav.Link as={Link} to='/' className='active text-uppercase text-white'>Home</Nav.Link>
              {!user && (
                <>
                  <Nav.Link as={Link} to='/about' className='active text-uppercase text-white'>About</Nav.Link>
                  <Nav.Link as={Link} to='/contact' className='active text-uppercase text-white'>Contact</Nav.Link>
                  <Nav.Link as={Link} to='/login' className='active text-uppercase text-white'>Login</Nav.Link>
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
        <Route path='/foodlisting' element={<FoodListing  />} />
        <Route path='/RecipientLandingPage' element={<RecipientLandingPage />} />
        <Route path='/profileApp' element={<profileApp />} />
        <Route path='/UserProfile' element={<UserProfile />} />
      </Routes>
      <Routez />

      <footer className='bg-dark text-white'>
        <p className='p-3 m-0 text-center '>copyright @ made by Food Share Network</p>
      </footer>
    </UserContext.Provider>
  );
}

export default App;
