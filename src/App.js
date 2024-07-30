

// import React, { useState, createContext } from 'react';
// import { Routes, Route, Link, useNavigate } from 'react-router-dom';
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
// import UserProfile from './Dashboard/UserProfile';
// import AdminDash from './AdminDashboard/AdminDash';
// import ForgotPassword from './pages/ForgotPassword';
// import PrivacyPolicyContent from './pages/PrivacyPolicyContent';
// import CustomForm from './Landing-page/CustomForm';
// import Reviewfeedback from './Dashboard/Reviewfeedback';
// import RecipientProfile from './Landing-page/RecipientProfile';
// import Historys from './Landing-page/Historys';
// import Donordashboard from './Dashboard/Donordashboard';
// import ProfileApp from './Dashboard/profileApp';
// import FoodForm from './Landing-page/FoodForm';
// import ProfileSettings from './Dashboard/ProfileSettings'

// // Create UserContext
// export const UserContext = createContext(null);

// function App() {
  

//   const recipientData = {
//     name: 'John Doe',
//     profilePicture: 'https://via.placeholder.com/150',
//     email: 'john.doe@example.com',
//     phone: '+1234567890',
//     address: '1234 Elm Street, Springfield, IL',
//     bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna velit.'
//   };
  

  
//   const [user, setUser] = useState(null); // State to hold user information
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   // Login success handler
//   const handleLoginSuccess = () => {
//     setIsLoggedIn(true);
//     // You can add additional logic here if needed
//   };

//   // Logout handler
//   const handleLogout = () => {
//     setUser(null);
//     setIsLoggedIn(false);
//     localStorage.removeItem('token'); // Remove token on logout
//     navigate('/'); // Redirect to home page
//   };

//   // Conditional rendering of landing page link based on user type
//   const loggedInButton = user ? (
//     <>
//       {user.userType === 'recipient' && (
//         <Nav.Link as={Link} to='/RecipientLandingPage' className='active text-uppercase text-white'>
//           Home
//         </Nav.Link>
//       )}
//       {user.userType === 'donor' && (
//         <Nav.Link as={Link} to='/home' className='active text-uppercase text-white'>
//           Home
//         </Nav.Link>
//       )}
//       {user.userType === 'admin' && (
//         <Nav.Link as={Link} to='/adminDash' className='active text-uppercase text-white'>
//           Home
//         </Nav.Link>
//       )}
//     </>
//   ) : null;

//   const [feedbackList, setFeedbackList] = useState([]);

//   const updateFeedbackList = (updatedFeedback) => {
//     setFeedbackList(updatedFeedback);
//   };
//   // food form function
//   const [foodItems, setFoodItems] = useState([]);

//   // Function to add a new food item to the menu
//   const addFoodItem = (itemName, itemQuantity, itemDescription, itemtimeCooked) => {
//       const newItem = { name: itemName, quantity: itemQuantity, description: itemDescription, timeCooked: itemtimeCooked };
//       setFoodItems([...foodItems, newItem]);
//       // Optionally, you can display a success message here
//       console.log("Added food item:", newItem);
//   };


//   return (
//     <UserContext.Provider value={{ user, setUser, handleLogout }}>
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
//               {!user && (
//                 <>
//                   <Nav.Link as={Link} to='/' className='active text-uppercase text-white'>Home</Nav.Link>
//                   <Nav.Link as={Link} to='/about' className='active text-uppercase text-white'>About</Nav.Link>
//                   <Nav.Link as={Link} to='/contact' className='active text-uppercase text-white'>Contact</Nav.Link>
//                   <Nav.Link as={Link} to='/login' className='active text-uppercase text-white'>Login</Nav.Link>
//                 </>
//               )}
//               {user ? loggedInButton : null}
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
//         <Route path='/login' element={<Login onLoginSuccess={handleLoginSuccess} />} />
//         <Route path='/recepientsignup' element={<RecepientSignUp />} />
//         <Route path='/foodlisting' element={<FoodListing />} />
//         <Route path='/RecipientLandingPage' element={<RecipientLandingPage />} />
//         <Route path='/profileApp' element={<UserProfile />} />
//         <Route path='/forgot-password' element={<ForgotPassword />} />
//         <Route path="/privacy" element={<PrivacyPolicyContent />} />
//         <Route path="/recipientProfile" element={<RecipientProfile  recipient={recipientData}/>} />
//         {/* Feedback Routes */}
//         <Route path="/form" element={<CustomForm updateFeedbackList={updateFeedbackList} />} />
//         <Route path="/display" element={<Reviewfeedback feedbackList={feedbackList} />} />
//         {/* Admin Routes */}
//         <Route path='/adminDash/*' element={<AdminDash />} />
//         <Route path='/record' element={<Historys />} />
//         <Route path='/donordashboard' element={<Donordashboard />} />
//         <Route path='/profileapp' element={<ProfileApp />} />
//        <Route path='/foodform' element={<FoodForm addFoodItem={addFoodItem} />} />
//        <Route path='/profile-settings' element={<ProfileSettings />} />
      


        
//       </Routes>
      

//       <footer className='bg-dark text-white fixed-bottom'>
//         <div className="container py-3">
//           <div className="row justify-content-center align-items-center">
//             <div className="col-auto">
//               <p className='m-0'>Copyright @ made by Food Share Network</p>
//             </div>
//             <div className="col-auto">
//               <a href="https://facebook.com" className="text-white social-icon mx-2"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
//               <a href="https://twitter.com" className="text-white social-icon mx-2"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
//               <a href="https://instagram.com" className="text-white social-icon mx-2"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </UserContext.Provider>
//   );
// }

// export default App;

import React, { useState, createContext } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
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
import AdminDash from './AdminDashboard/AdminDash';
import ForgotPassword from './pages/ForgotPassword';
import PrivacyPolicyContent from './pages/PrivacyPolicyContent';
import CustomForm from './Landing-page/CustomForm';
import Reviewfeedback from './Dashboard/Reviewfeedback';
import RecipientProfile from './Landing-page/RecipientProfile';
import Historys from './Landing-page/Historys';
import Donordashboard from './Dashboard/Donordashboard';
import ProfileApp from './Dashboard/profileApp';
import FoodForm from './Landing-page/FoodForm';
import ProfileSettings from './Dashboard/ProfileSettings';
import RequestPage from './pages/request';

// Create UserContext
export const UserContext = createContext(null);

function App() {
  const recipientData = {
    name: 'John Doe',
    profilePicture: 'https://via.placeholder.com/150',
    email: 'john.doe@example.com',
    phone: '+1234567890',
    address: '1234 Elm Street, Springfield, IL',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna velit.'
  };

  const [user, setUser] = useState(null); // State to hold user information
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Login success handler
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    // You can add additional logic here if needed
  };

  // Logout handler
  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('token'); // Remove token on logout
    navigate('/'); // Redirect to home page
  };

  // Conditional rendering of landing page link based on user type
  const loggedInButton = user ? (
    <>
      {user.userType === 'recipient' && (
        <Nav.Link as={Link} to='/RecipientLandingPage' className='active text-uppercase text-white'>
          Home
        </Nav.Link>
      )}
      {user.userType === 'donor' && (
        <Nav.Link as={Link} to='/home' className='active text-uppercase text-white'>
          Home
        </Nav.Link>
      )}
      {user.userType === 'admin' && (
        <Nav.Link as={Link} to='/adminDash' className='active text-uppercase text-white'>
          Home
        </Nav.Link>
      )}
    </>
  ) : null;

  const [feedbackList, setFeedbackList] = useState([]);

  const updateFeedbackList = (updatedFeedback) => {
    setFeedbackList(updatedFeedback);
  };

  // food form function
  const [foodItems, setFoodItems] = useState([]);

  // Function to add a new food item to the menu
  const addFoodItem = (itemName, itemQuantity, itemDescription, itemtimeCooked) => {
    const newItem = { name: itemName, quantity: itemQuantity, description: itemDescription, timeCooked: itemtimeCooked };
    setFoodItems([...foodItems, newItem]);
    // Optionally, you can display a success message here
    console.log("Added food item:", newItem);
  };

  return (
    <UserContext.Provider value={{ user, setUser, handleLogout }}>
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
              {!user && (
                <>
                  <Nav.Link as={Link} to='/' className='active text-uppercase text-white'>Home</Nav.Link>
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
              {user && loggedInButton}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<LandingPage />} />
        <Route path="/request/:id" element={<RequestPage />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login onLoginSuccess={handleLoginSuccess} />} />
        <Route path='/recepientsignup' element={<RecepientSignUp />} />
        <Route path='/foodlisting' element={<FoodListing />} />
        <Route path='/RecipientLandingPage' element={<RecipientLandingPage />} />
        <Route path='Dashboard/profileApp' element={<UserProfile />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path="/privacy" element={<PrivacyPolicyContent />} />
        <Route path="/recipientProfile" element={<RecipientProfile recipient={recipientData} />} />
        {/* Feedback Routes */}
        <Route path="/form" element={<CustomForm updateFeedbackList={updateFeedbackList} />} />
        <Route path="/display" element={<Reviewfeedback feedbackList={feedbackList} />} />
        {/* Admin Routes */}
        <Route path='/adminDash/*' element={<AdminDash />} />
        <Route path='/record' element={<Historys />} />
        <Route path='/donordashboard' element={<Donordashboard />} />
        <Route path='/profileapp' element={<ProfileApp />} />
        <Route path='/foodform' element={<FoodForm addFoodItem={addFoodItem} />} />
        <Route path='/profile-settings' element={<ProfileSettings />} />
      </Routes>

      <footer className='bg-dark text-white fixed-bottom'>
        <div className="container py-3">
          <div className="row justify-content-center align-items-center">
            <div className="col-auto">
              <p className='m-0'>Copyright @ made by Food Share Network</p>
            </div>
            <div className="col-auto">
              <a href="https://facebook.com" className="text-white social-icon mx-2">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://twitter.com" className="text-white social-icon mx-2">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://instagram.com" className="text-white social-icon mx-2">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </UserContext.Provider>
  );
}

export default App;
