// import React, { useState, createContext } from 'react';
// import { Routes, Route, Link, useNavigate } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
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
// //import RecipientProfile from './Landing-page/RecipientProfile';
// import Historys from './Landing-page/Historys';
// import Donordashboard from './Dashboard/Donordashboard';
// import ProfileApp from './Dashboard/profileApp';
// import FoodForm from './Landing-page/FoodForm';
// import ProfileSettings from './Dashboard/ProfileSettings';
// import RequestPage from './pages/request';
// import RecipientProfileApp from './Landing-page/RecipientProfile';
// import RequestedItemsHistory from './Landing-page/RequestedItemsHistory';
// import FoodShareLogo from './components/FoodShareNetwork.jpeg';
// import SecurityPolicy from './pages/SecurityPolicy';
// import TermsOfUse from './pages/TermsOfUse';
// import AcceptedFoodPage from './pages/AcceptedFoodPage';
// import PrivateRoute from './PrivateRoutes/PrivateRoute'; // Import the PrivateRoute component
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
//       {/* {user.userType === 'admin' && (
//         <Nav.Link as={Link} to='/adminDash' className='active text-uppercase text-white'>
//           Home
//         </Nav.Link>
//       )} */}
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
//     const newItem = { name: itemName, quantity: itemQuantity, description: itemDescription, timeCooked: itemtimeCooked };
//     setFoodItems([...foodItems, newItem]);
//     // Optionally, you can display a success message here
//     console.log("Added food item:", newItem);
//   };

//   return (
//     <UserContext.Provider value={{ user, setUser, handleLogout }}>
//       <Navbar expand="lg" className='fixed-top bg-dark shadow'>
//         <Container>
//           <Navbar.Brand>
//             {/* <Link to="/" className='navbar-brand text-success fw-semibold'>

//               FoodShare Network
//             </Link> */}
//             <Link to="/" className='navbar-brand d-flex align-items-center text-success fw-semibold pl-0'>
//               <img src={FoodShareLogo} alt="FoodShare Network Logo" style={{ height: '40px', marginRight: '10px' }} />
//               FoodShare Network
//             </Link>
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls='basic-navbar-nav' className='bg-white' />
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
//               {user && loggedInButton}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/home' element={<LandingPage />} />
//         <Route path="/request/:id" element={<RequestPage />} />
//         <Route path='/menu' element={<Menu />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/contact' element={<Contact />} />
//         <Route path='/signup' element={<SignUp />} />
//         <Route path='/login' element={<Login onLoginSuccess={handleLoginSuccess} />} />
//         <Route path='/recepientsignup' element={<RecepientSignUp />} />
//         <Route path='/foodlisting' element={<FoodListing />} />
//         <Route path='/RecipientLandingPage' element={<RecipientLandingPage />} />
//         <Route path='Dashboard/profileApp' element={<UserProfile />} />
//         <Route path='/forgot-password' element={<ForgotPassword />} />
//         <Route path="/privacy" element={<PrivacyPolicyContent />} />
//         <Route path="/security" element={<SecurityPolicy />} />
//         <Route path="/terms of use" element={<TermsOfUse />} />
//         <Route path="/accepted food" element={<AcceptedFoodPage />} />
//         <PrivateRoute path='/foodform' element={<FoodForm addFoodItem={addFoodItem} />} />
        
        
        
//         {/* tuesday work recipient profile updates */}
//         <Route path="/recipientProfile" element={<RecipientProfileApp recipient={recipientData} />} />


//         {/* Feedback Routes */}
//         <Route path="/form" element={<CustomForm updateFeedbackList={updateFeedbackList} />} />
//         <Route path="/display" element={<Reviewfeedback feedbackList={feedbackList} />} />
//         {/* Admin Routes */}
//         <Route path='/adminDash/*' element={<AdminDash />} />
//         <Route path='/record' element={<Historys />} />
//         <Route path='/donordashboard' element={<Donordashboard />} />
//         <Route path='/profileapp' element={<ProfileApp />} />
//         {/* <Route path='/foodform' element={<FoodForm addFoodItem={addFoodItem} />} /> */}
//         <Route path='/profile-settings' element={<ProfileSettings />} />
//         <Route path='/RequestedItemsHistory' element={<RequestedItemsHistory />} />
//       </Routes>

//       <footer className='bg-dark text-white fixed-bottom'>
//         <div className="container py-3">
//           <div className="row justify-content-center align-items-center">
//             <div className="col-auto">
//               <p className='m-0'>Copyright @ made by Food Share Network</p>
//             </div>
//             <div className="col-auto">
//               <a href="https://facebook.com" className="text-white social-icon mx-2">
//                 <FontAwesomeIcon icon={faFacebook} size="2x" />
//               </a>
//               <a href="https://twitter.com" className="text-white social-icon mx-2">
//                 <FontAwesomeIcon icon={faTwitter} size="2x" />
//               </a>
//               <a href="https://instagram.com" className="text-white social-icon mx-2">
//                 <FontAwesomeIcon icon={faInstagram} size="2x" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </UserContext.Provider>
//   );
// }

// export default App;

// src/App.js


// import React, { useState, createContext } from 'react';
// import { Routes, Route, Link, useNavigate } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
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
// import Historys from './Landing-page/Historys';
// import Donordashboard from './Dashboard/Donordashboard';
// import ProfileApp from './Dashboard/profileApp';
// import FoodForm from './Landing-page/FoodForm';
// import ProfileSettings from './Dashboard/ProfileSettings';
// import RequestPage from './pages/request';
// import RecipientProfileApp from './Landing-page/RecipientProfile';
// import RequestedItemsHistory from './Landing-page/RequestedItemsHistory';
// import FoodShareLogo from './components/FoodShareNetwork.jpeg';
// import SecurityPolicy from './pages/SecurityPolicy';
// import TermsOfUse from './pages/TermsOfUse';
// import AcceptedFoodPage from './pages/AcceptedFoodPage';
// import PrivateRoute from './PrivateRoutes/PrivateRoute';

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
//           {/* Home */}
//         </Nav.Link>
//       )}
//       {user.userType === 'donor' && (
//         <Nav.Link as={Link} to='/home' className='active text-uppercase text-white'>
//           {/* Home */}
//         </Nav.Link>
//       )}
//     </>
//   ) : null;

//   const [feedbackList, setFeedbackList] = useState([]);

//   const updateFeedbackList = (updatedFeedback) => {
//     setFeedbackList(updatedFeedback);
//   };

//   const [foodItems, setFoodItems] = useState([]);

//   const addFoodItem = (itemName, itemQuantity, itemDescription, itemtimeCooked) => {
//     const newItem = { name: itemName, quantity: itemQuantity, description: itemDescription, timeCooked: itemtimeCooked };
//     setFoodItems([...foodItems, newItem]);
//     console.log("Added food item:", newItem);
//   };

//   return (
//     <UserContext.Provider value={{ user, setUser, handleLogout }}>
//       <Navbar expand="lg" className='fixed-top bg-dark shadow'>
//         <Container>
//           <Navbar.Brand>
//             <Link to="/" className='navbar-brand d-flex align-items-center text-success fw-semibold pl-0'>
//               <img src={FoodShareLogo} alt="FoodShare Network Logo" style={{ height: '40px', marginRight: '10px' }} />
//               FoodShare Network
//             </Link>
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls='basic-navbar-nav' className='bg-white' />
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
//               {user && loggedInButton}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/menu' element={<Menu />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/contact' element={<Contact />} />
//         <Route path='/signup' element={<SignUp />} />
//         <Route path='/login' element={<Login onLoginSuccess={handleLoginSuccess} />} />
//         <Route path='/recepientsignup' element={<RecepientSignUp />} />
//         <Route path='/forgot-password' element={<ForgotPassword />} />
//         <Route path="/privacy" element={<PrivacyPolicyContent />} />
//         <Route path="/security" element={<SecurityPolicy />} />
//         <Route path="/terms of use" element={<TermsOfUse />} />
//         <Route path="/display" element={<Reviewfeedback feedbackList={feedbackList} />} />
//         <Route path="/request/:id" element={<RequestPage />} />
       
        
//         <Route element={<PrivateRoute />}>
//           <Route path='/foodform' element={<FoodForm addFoodItem={addFoodItem} />} />
//           <Route path='/profile-settings' element={<ProfileSettings />} />
//           <Route path='/RequestedItemsHistory' element={<RequestedItemsHistory />} />
//           <Route path='/profileapp' element={<ProfileApp />} />
//           <Route path='/RecipientLandingPage' element={<RecipientLandingPage />} />
//           <Route path='/donordashboard' element={<Donordashboard />} />
//           <Route path='/foodlisting' element={<FoodListing />} />

//           <Route path='/adminDash/*' element={<AdminDash />} />
//           <Route path="/form" element={<CustomForm updateFeedbackList={updateFeedbackList} />} />
//           <Route path='Dashboard/profileApp' element={<UserProfile />} />
//           <Route path="/accepted food" element={<AcceptedFoodPage />} />
//           <Route path="/recipientProfile" element={<RecipientProfileApp recipient={recipientData} />} />
//           <Route path='/home' element={<LandingPage />} />
//           <Route path='/record' element={<Historys />} />
//         </Route>
//       </Routes>

//       <footer className='bg-dark text-white fixed-bottom'>
//         <div className="container py-3">
//           <div className="row justify-content-center align-items-center">
//             <div className="col-auto">
//               <p className='m-0'>Copyright @ made by Food Share Network</p>
//             </div>
//             <div className="col-auto">
//               <a href="https://facebook.com" className="text-white social-icon mx-2">
//                 <FontAwesomeIcon icon={faFacebook} size="2x" />
//               </a>
//               <a href="https://twitter.com" className="text-white social-icon mx-2">
//                 <FontAwesomeIcon icon={faTwitter} size="2x" />
//               </a>
//               <a href="https://instagram.com" className="text-white social-icon mx-2">
//                 <FontAwesomeIcon icon={faInstagram} size="2x" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </UserContext.Provider>
//   );
// }

// export default App;



// import React, { useState, createContext } from 'react';
// import { Routes, Route, Link, useNavigate } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
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
// import Historys from './Landing-page/Historys';
// import Donordashboard from './Dashboard/Donordashboard';
// import ProfileApp from './Dashboard/profileApp';
// import FoodForm from './Landing-page/FoodForm';
// import ProfileSettings from './Dashboard/ProfileSettings';
// import RequestPage from './pages/request';
// import RecipientProfileApp from './Landing-page/RecipientProfile';
// import RequestedItemsHistory from './Landing-page/RequestedItemsHistory';
// import FoodShareLogo from './components/FoodShareNetwork.jpeg';
// import SecurityPolicy from './pages/SecurityPolicy';
// import TermsOfUse from './pages/TermsOfUse';
// import AcceptedFoodPage from './pages/AcceptedFoodPage';
// import PrivateRoute from './PrivateRoutes/PrivateRoute';
// import GeolocationComponent from './Landing-page/GeolocationComponent';
// import Geoloation from './Landing-page/Geoloation';
// import { getDistance } from 'geolib';

// export const UserContext = createContext(null);

// const donorLocation = {
//   latitude: -25.7479,
//   longitude: 28.2293
// };

// const recipientLocation = {
//     latitude: -25.7479,
//     longitude: 28.2293
// };

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
//   const [donorLocation, setDonorLocation] = useState(null);
//   const [donorDistance, setDonorDistance] = useState(null);
//   const [donorTravelTime, setDonorTravelTime] = useState(null);
//   const [requestAccepted, setRequestAccepted] = useState(false);
//   const navigate = useNavigate();

//   const handleLoginSuccess = () => {
//     setIsLoggedIn(true);
//   };

//   const handleLogout = () => {
//     setUser(null);
//     setIsLoggedIn(false);
//     localStorage.removeItem('token');
//     navigate('/');
//   };

//   const handleRequestDecision = (accepted, location, distance, travelTime) => {
//     if (accepted) {
//       setDonorLocation(location);
//       setDonorDistance(distance);
//       setDonorTravelTime(travelTime);
//       setRequestAccepted(true);
//     } else {
//       setRequestAccepted(false);
//     }
//   };

//   const loggedInButton = user ? (
//     <>
//       {user.userType === 'recipient' && (
//         <Nav.Link as={Link} to='/RecipientLandingPage' className='active text-uppercase text-white'>
//         </Nav.Link>
//       )}
//       {user.userType === 'donor' && (
//         <Nav.Link as={Link} to='/home' className='active text-uppercase text-white'>
//         </Nav.Link>
//       )}
//     </>
//   ) : null;

//   const [feedbackList, setFeedbackList] = useState([]);
//   const updateFeedbackList = (updatedFeedback) => {
//     setFeedbackList(updatedFeedback);
//   };

//   const [foodItems, setFoodItems] = useState([]);
//   const addFoodItem = (itemName, itemQuantity, itemDescription, itemtimeCooked) => {
//     const newItem = { name: itemName, quantity: itemQuantity, description: itemDescription, timeCooked: itemtimeCooked };
//     setFoodItems([...foodItems, newItem]);
//     console.log("Added food item:", newItem);
//   };

//   return (
//     <UserContext.Provider value={{ user, setUser, handleLogout }}>
//       <Navbar expand="lg" className='fixed-top bg-dark shadow'>
//         <Container>
//           <Navbar.Brand>
//             <Link to="/" className='navbar-brand d-flex align-items-center text-success fw-semibold pl-0'>
//               <img src={FoodShareLogo} alt="FoodShare Network Logo" style={{ height: '40px', marginRight: '10px' }} />
//               FoodShare Network
//             </Link>
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls='basic-navbar-nav' className='bg-white' />
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
//               {user && loggedInButton}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/menu' element={<Menu />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/contact' element={<Contact />} />
//         <Route path='/signup' element={<SignUp />} />
//         <Route path='/login' element={<Login onLoginSuccess={handleLoginSuccess} />} />
//         <Route path='/recepientsignup' element={<RecepientSignUp />} />
//         <Route path='/forgot-password' element={<ForgotPassword />} />
//         <Route path="/privacy" element={<PrivacyPolicyContent />} />
//         <Route path="/security" element={<SecurityPolicy />} />
//         <Route path="/terms of use" element={<TermsOfUse />} />
//         <Route path="/display" element={<Reviewfeedback feedbackList={feedbackList} />} />
//         <Route path="/request/:id" element={<RequestPage />} />
//         {/* <Route path="/geolocationCopm/:id" element={<GeolocationComponent />} />
//         <Route path="/geolocation/:id" element={<Geoloation />} /> */}


//         <Route element={<PrivateRoute />}>
//           <Route path='/foodform' element={<FoodForm addFoodItem={addFoodItem} />} />
//           <Route path='/profile-settings' element={<ProfileSettings />} />
//           <Route path='/RequestedItemsHistory' element={<RequestedItemsHistory />} />
//           <Route path='/profileapp' element={<ProfileApp />} />
//           <Route path='/RecipientLandingPage' element={<RecipientLandingPage />} />
//           <Route path='/donordashboard' element={<Donordashboard />} />
//           <Route path='/foodlisting' element={<FoodListing />} />
//           <Route path='/adminDash/*' element={<AdminDash />} />
//           <Route path="/form" element={<CustomForm updateFeedbackList={updateFeedbackList} />} />
//           <Route path='Dashboard/profileApp' element={<UserProfile />} />
//           <Route path="/accepted food" element={<AcceptedFoodPage />} />
//           <Route path="/recipientProfile" element={<RecipientProfileApp recipient={recipientData} />} />
//           <Route path='/home' element={<LandingPage />} />
//           <Route path='/record' element={<Historys />} />
//           {/* <Route path="/geolocationCopm/:id" element={<GeolocationComponent />} /> */}
//         {/* <Route path="/geolocation/:id" element={<Geoloation />} /> */}
//           <Route path='/geolocation' element={
//             !requestAccepted ? (
//               <GeolocationComponent 
//                 recipientLocation={recipientLocation} 
//                 onRequestDecision={handleRequestDecision}
//               />
//             ) : (
//               <div className="mt-3">
//                 <h5>Donor has accepted your request!</h5>
//                 <p>Distance: {donorDistance.toFixed(2)} kilometers away from you.</p>
//                 <p>Estimated Travel Time: {donorTravelTime.hours} hours and {donorTravelTime.minutes} minutes.</p>
//               </div>
//             )
//           } />
//         </Route>
//       </Routes>

//       <footer className='bg-dark text-white fixed-bottom'>
//         <div className="container py-3">
//           <div className="row justify-content-center align-items-center">
//             <div className="col-auto">
//               <p className='m-0'>Copyright @ made by Food Share Network</p>
//             </div>
//             <div className="col-auto">
//               <a href="https://facebook.com" className="text-white social-icon mx-2">
//                 <FontAwesomeIcon icon={faFacebook} size="2x" />
//               </a>
//               <a href="https://twitter.com" className="text-white social-icon mx-2">
//                 <FontAwesomeIcon icon={faTwitter} size="2x" />
//               </a>
//               <a href="https://instagram.com" className="text-white social-icon mx-2">
//                 <FontAwesomeIcon icon={faInstagram} size="2x" />
//               </a>
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
import Historys from './Landing-page/Historys';
import Donordashboard from './Dashboard/Donordashboard';
import ProfileApp from './Dashboard/profileApp';
import FoodForm from './Landing-page/FoodForm';
import ProfileSettings from './Dashboard/ProfileSettings';
import RequestPage from './pages/request';
import RecipientProfileApp from './Landing-page/RecipientProfile';
import RequestedItemsHistory from './Landing-page/RequestedItemsHistory';
import FoodShareLogo from './components/FoodShareNetwork.jpeg';
import SecurityPolicy from './pages/SecurityPolicy';
import TermsOfUse from './pages/TermsOfUse';
import AcceptedFoodPage from './pages/AcceptedFoodPage';
import PrivateRoute from './PrivateRoutes/PrivateRoute';
import GeolocationComponent from './Landing-page/GeolocationComponent';
import OrganizationVerification from './pages/Verification';
import GeocodingComponent from './Landing-page/GeocodingComponent';


export const UserContext = createContext(null);

const recipientLocation = {
  latitude: -25.7479,
  longitude: 28.2293
};

function App() {
  const [user, setUser] = useState(null); // State to hold user information
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [donorLocation, setDonorLocation] = useState(null);
  const [donorDistance, setDonorDistance] = useState(null);
  const [donorTravelTime, setDonorTravelTime] = useState(null);
  const [requestAccepted, setRequestAccepted] = useState(false);
  const navigate = useNavigate();

  

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('token');
    navigate('/');
    
  };

  const handleRequestDecision = (accepted, location, distance, travelTime) => {
    if (accepted) {
      setDonorLocation(location);
      setDonorDistance(distance);
      setDonorTravelTime(travelTime);
      setRequestAccepted(true);
    } else {
      setRequestAccepted(false);
    }
  };

  const loggedInButton = user ? (
    <>
      {user.userType === 'recipient' && (
        <Nav.Link as={Link} to='/RecipientLandingPage' className='active text-uppercase text-white'>
          {/* Home */}
        </Nav.Link>
      )}
      {user.userType === 'donor' && (
        <Nav.Link as={Link} to='/home' className='active text-uppercase text-white'>
          {/* Home */}
        </Nav.Link>
      )}
    </>
  ) : null;

  const [feedbackList, setFeedbackList] = useState([]);

  const updateFeedbackList = (updatedFeedback) => {
    setFeedbackList(updatedFeedback);
  };

  const [foodItems, setFoodItems] = useState([]);

  const addFoodItem = (itemName, itemQuantity, itemDescription, itemtimeCooked) => {
    const newItem = { name: itemName, quantity: itemQuantity, description: itemDescription, timeCooked: itemtimeCooked };
    setFoodItems([...foodItems, newItem]);
    console.log("Added food item:", newItem);
  };

  return (
    <UserContext.Provider value={{ user, setUser, handleLogout }}>
      <Navbar expand="lg" className='fixed-top bg-dark shadow'>
        <Container>
          <Navbar.Brand>
            <Link to="/" className='navbar-brand d-flex align-items-center text-success fw-semibold pl-0'>
              <img src={FoodShareLogo} alt="FoodShare Network Logo" style={{ height: '40px', marginRight: '10px' }} />
              FoodShare Network
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' className='bg-white' />
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
                  <Dropdown.Item as={Link} to="/verification">As Recipient</Dropdown.Item>
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
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/registration' element={<RecepientSignUp />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login onLoginSuccess={handleLoginSuccess} />} />
        <Route path='/recepientsignup' element={<RecepientSignUp />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path="/privacy" element={<PrivacyPolicyContent />} />
        <Route path="/security" element={<SecurityPolicy />} />
        <Route path="/terms of use" element={<TermsOfUse />} />
        <Route path="/display" element={<Reviewfeedback feedbackList={feedbackList} />} />
        <Route path="/request/:id" element={<RequestPage />} />
        <Route path="/verification" element={<OrganizationVerification />} />
        <Route path="/Geocoding" element={<GeocodingComponent />} />
        <Route path="/accepted-food/:id" element={<AcceptedFoodPage />} />
        
       
        <Route element={<PrivateRoute />}>
          <Route path='/foodform' element={<FoodForm addFoodItem={addFoodItem} />} />
          <Route path='/profile-settings' element={<ProfileSettings />} />
          <Route path='/RequestedItemsHistory' element={<RequestedItemsHistory />} />
          <Route path='/profileapp' element={<ProfileApp />} />
          <Route path='/RecipientLandingPage' element={<RecipientLandingPage />} />
          <Route path='/donordashboard' element={<Donordashboard />} />
          <Route path='/foodlisting' element={<FoodListing />} />
          <Route path='/adminDash/*' element={<AdminDash />} />
          <Route path="/form" element={<CustomForm updateFeedbackList={updateFeedbackList} />} />
          <Route path='Dashboard/profileApp' element={<UserProfile />} />
          
          {/* <Route path="/recipientProfile" element={<RecipientProfileApp recipient={recipientData} />} /> */}
          <Route path='/home' element={<LandingPage />} />
          <Route path='/record' element={<Historys />} />
          
          {/* Adding the route for handling geolocation and donor request */}
          <Route path='/donorRequest' element={
            !requestAccepted ? (
              <GeolocationComponent 
                recipientLocation={recipientLocation} 
                onRequestDecision={handleRequestDecision}
              />
            ) : (
              <div className="mt-3">
                <h5>Donor has accepted your request!</h5>
                <p>Distance: {donorDistance ? donorDistance.toFixed(2) : 'Calculating...'} kilometers away from you.</p>
                <p>Estimated Travel Time: {donorTravelTime ? `${donorTravelTime.hours} hours and ${donorTravelTime.minutes} minutes` : 'Calculating...'}</p>
              </div>
            )
          } />
        </Route>
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
