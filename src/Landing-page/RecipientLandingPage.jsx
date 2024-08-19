
// import React, { useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import video from '../components/videos/f.mp4';
// import logo from '../components/FoodShareNetwork.jpeg';
// import { RiRestaurantLine } from 'react-icons/ri';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircle, faInfoCircle, faEnvelope, faSignOutAlt, faUser, faComment } from '@fortawesome/free-solid-svg-icons';
// import { UserContext } from '../App';
// import ProfileApp from '../Dashboard/profileApp';
// import Typewriter from 'typewriter-effect'; 
// import CustomForm from './CustomForm'

// const LandingPage = () => {
//   const { setUser } = useContext(UserContext);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     setUser(null);
//     navigate('/');
//   };

//   return (
//     <div className="landing-page">
//       <section id="video-section" className="header-banner mb-3 mt-5">
//         <div className="container-fluid">
//           <div className="row align-items-center">
//             <div className="col-md-2 p-0">
//               <div className="bg-secondary text-light vh-100 d-flex flex-column align-items-center pt-3 rounded-end">
//                 <br/>
//                 <img src={logo} alt="Food Share Network Logo" className="img-fluid mb-3" style={{ maxWidth: '80%' }} />

//                 <Link to="/RecipientProfile" className="btn btn-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link" style={{ marginTop: '20px' }}>
//                   <FontAwesomeIcon icon={faUser} className="me-2" />
//                   <span className="fw-bold">Profile</span>
//                 </Link>

//                 <Link to="/foodlisting" className="btn btn-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link" style={{ marginTop: '20px' }}>
//                   <RiRestaurantLine size={20} className="me-2" />
//                   <span className="fw-bold">FoodList</span>
//                 </Link>
//                 <Link to="/RequestedItemsHistory" className="btn btn-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link" style={{ marginTop: '20px' }}>
//                   <FontAwesomeIcon icon={faCircle} size="lg" className="me-2" />
//                   <span className="fw-bold">Requests</span>
//                 </Link>
//                 <Link to="/contact" className="btn btn-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link" style={{ marginTop: '20px' }}>
//                   <FontAwesomeIcon icon={faEnvelope} size="lg" className="me-2" />
//                   <span className="fw-bold">Contact</span>
//                 </Link>
//                 <Link to="/about" className="btn btn-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link" style={{ marginTop: '20px' }}>
//                   <FontAwesomeIcon icon={faInfoCircle} size="lg" className="me-2" />
//                   <span className="fw-bold">About</span>
//                 </Link>
//                 <Link to="/CustomForm" className="btn btn-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link" style={{ marginTop: '20px' }}>
//                   <FontAwesomeIcon icon={faComment} size="lg" className="me-2" />
//                   <span className="fw-bold">Feedback</span>
//                 </Link>
//                 <Link to="/" onClick={handleLogout} className="btn btn-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link" style={{ marginTop: '20px' }}>
//                   <FontAwesomeIcon icon={faSignOutAlt} size="lg" className="me-2" />
//                   <span className="fw-bold">Logout</span>
//                 </Link>
//               </div>
//             </div>
//             <div className="col-md-10">
//               <div className="text-center position-relative mt-1">
//                 <div className="position-relative">
//                   <video autoPlay loop muted className="img-fluid">
//                     <source src={video} type="video/mp4"></source>
//                   </video>
//                   <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0, backgroundColor: 'rgba(0, 0, 0, 0.3)' }}></div>
//                   <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
//                     <h1 className="text-white fw-bold">
//                       <Typewriter
//                         options={{
//                           strings: ['Welcome to FoodShare Network!'],
//                           autoStart: true,
//                           loop: true,
//                         }}
//                       />
//                     </h1>
//                     <p className="text-white fw-bold">
//                       <Typewriter
//                         options={{
//                           strings: ['WE MAKE A LIVING BY WHAT WE GET, BUT WE MAKE A LIFE BY WHAT WE GIVE...'],
//                           autoStart: true,
//                           loop: true,
//                         }}
//                       />
//                     </p>
//                   </div>
//                 </div>
//                 <div className="header-overlay"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="features" className="section mt-5 mb-5">
//         {/* Features section content */}
//       </section>
//     </div>
//   );
// };

// export default LandingPage;



// import React, { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import video from '../components/videos/f.mp4';
// import logo from '../components/FoodShareNetwork.jpeg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInfoCircle, faEnvelope, faSignOutAlt, faUser, faComment } from '@fortawesome/free-solid-svg-icons';
// import { UserContext } from '../App';
// import Typewriter from 'typewriter-effect'; 
// import CustomForm from './CustomForm';
// import MapComponent from './Map';
// import RecipientProfile from './RecipientProfile';
// import FoodListing from '../pages/FoodListing';
// import RequestedItemsHistory from './RequestedItemsHistory';
// import Contact from '../pages/Contact';
// import About from '../pages/About';
// import GeolocationComponent from './GeolocationComponent';


// const LandingPage = () => {
//   const { setUser } = useContext(UserContext);
//   const navigate = useNavigate();
//   const [activeComponent, setActiveComponent] = useState(''); // State to track the active component

//   const handleLogout = () => {
//     setUser(null);
//     navigate('/');
//   };

//   const recipient = {
//     name: 'John Doe',
//     email: 'john@example.com',
//     phone: '+123456789',
//     address: '123 Main Street, City, Country',
//     bio: 'This is a short bio about John Doe.',
//     profilePicture: 'path_to_profile_picture.jpg',
//   };

//   const handleRequestDecision = (accepted, donorLocation, distance, travelTime) => {
//     // Handle the request decision logic here
//   };

//   return (
//     <div className="landing-page d-flex vh-100 mt-4">
//       <div className="sidebar bg-secondary text-light d-flex flex-column align-items-center pt-3" style={{ width: '250px', position: 'fixed', height: '100%', overflowY: 'auto' }}>
//         <br/>
//         <img src={logo} alt="Food Share Network Logo" className="img-fluid mb-3" style={{ maxWidth: '80%' }} />
//         <button onClick={() => setActiveComponent('Profile')} className="btn btn-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link">
//           <FontAwesomeIcon icon={faUser} className="me-2" />
//           <span className="fw-bold">Profile</span>
//         </button>
//         <br/>
//         <button onClick={() => setActiveComponent('FoodListing')} className="btn btn-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link">
//           <FontAwesomeIcon icon={faUser} className="me-2" />
//           <span className="fw-bold">FoodList</span>
//         </button>
//         <br/>
//         <button onClick={() => setActiveComponent('RequestedItemsHistory')} className="btn btn-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link">
//           <FontAwesomeIcon icon={faUser} className="me-2" />
//           <span className="fw-bold">Record</span>
//         </button>
//         <br/>
//         <button onClick={() => setActiveComponent('MapComponent')} className="btn btn-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link">
//           <FontAwesomeIcon icon={faUser} className="me-2" />
//           <span className="fw-bold">Location</span>
//         </button>
//         <br/>
//         <button onClick={() => setActiveComponent('GeolocationComponent')} className="btn btn-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link">
//           <FontAwesomeIcon icon={faUser} className="me-2" />
//           <span className="fw-bold">Distance</span>
//         </button>
//         <br/>
//         <button onClick={() => setActiveComponent('Contact')} className="btn btn-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link">
//           <FontAwesomeIcon icon={faEnvelope} className="me-2" />
//           <span className="fw-bold">Contact</span>
//         </button>
//         <br/>
//         <button onClick={() => setActiveComponent('About')} className="btn btn-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link">
//           <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
//           <span className="fw-bold">About</span>
//         </button>
//         <br/>
//         <button onClick={() => setActiveComponent('CustomForm')} className="btn btn-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link">
//           <FontAwesomeIcon icon={faComment} className="me-2" />
//           <span className="fw-bold">Send Feedback</span>
//         </button>
//         <br/>
//         <button onClick={handleLogout} className="btn btn-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link">
//           <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />
//           <span className="fw-bold">Logout</span>
//         </button>
    
//       </div>
//       <div className="content" style={{ marginLeft: '250px', padding: '20px', overflowY: 'auto', width: 'calc(100% - 250px)' }}>
//         {activeComponent === '' && (
//           <div className="text-center position-relative">
//             <video autoPlay loop muted className="img-fluid">
//               <source src={video} type="video/mp4"></source>
//             </video>
//             <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0, backgroundColor: 'rgba(0, 0, 0, 0.3)' }}></div>
//             <div className="position-absolute start-50 translate-middle text-white text-center">
//               <h1 className="text-white fw-bold">
//                 <Typewriter
//                   options={{
//                     strings: ['Welcome to FoodShare Network!'],
//                     autoStart: true,
//                     loop: true,
//                   }}
//                 />
//               </h1>
//               <p className="text-white fw-bold">
//                 <Typewriter
//                   options={{
//                     strings: ['WE MAKE A LIVING BY WHAT WE GET, BUT WE MAKE A LIFE BY WHAT WE GIVE...'],
//                     autoStart: true,
//                     loop: true,
//                   }}
//                 />
//               </p>
//             </div>
//           </div>
//         )}
//         {activeComponent === 'Profile' && <RecipientProfile recipient={recipient} />}
//         {activeComponent === 'FoodListing' && <FoodListing recipient={recipient} />}
//         {activeComponent === 'RequestedItemsHistory' && <RequestedItemsHistory recipient={recipient} />}
//         {activeComponent === 'MapComponent' && <MapComponent recipient={recipient} />}
//         {activeComponent === 'Contact' && <Contact recipient={recipient} />}
//         {activeComponent === 'About' && <About recipient={recipient} />}
//         {activeComponent === 'CustomForm' && <CustomForm recipient={recipient} />}
//         {activeComponent === 'GeolocationComponent' && <GeolocationComponent recipientLocation={recipient.location} onRequestDecision={handleRequestDecision} />}
//       </div>
//     </div>
//   );
// };

// export default LandingPage;


import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import video from '../components/videos/f.mp4';
import logo from '../components/FoodShareNetwork.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faEnvelope, faSignOutAlt, faUser, faComment } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../App';
import Typewriter from 'typewriter-effect'; 
import CustomForm from './CustomForm';
import MapComponent from './GeocodingComponent';
import RecipientProfile from './RecipientProfile';
import FoodListing from '../pages/FoodListing';
import RequestedItemsHistory from './RequestedItemsHistory';
import Contact from '../pages/Contact';
import About from '../pages/About';
import GeolocationComponent from './GeolocationComponent';
import GeocodingComponent from './GeocodingComponent';

const LandingPage = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [activeComponent, setActiveComponent] = useState(''); 
  const [donorLocation, setDonorLocation] = useState(null);
  const [donorDistance, setDonorDistance] = useState(null);
  const [donorTravelTime, setDonorTravelTime] = useState(null);
  const [requestAccepted, setRequestAccepted] = useState(false);

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  const recipient = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+123456789',
    address: '123 Main Street, City, Country',
    bio: 'This is a short bio about John Doe.',
    profilePicture: 'path_to_profile_picture.jpg',
  };

  const recipientLocation = {
    latitude: -25.7479,
    longitude: 28.2293
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

  return (
    <div className="landing-page d-flex vh-50 mt-3">
      <div className="sidebar bg-white text-light d-flex flex-column align-items-center pt-5" style={{ width: '350px', position: 'fixed', height: '100vh' }}>
        <br/>
        <img src={logo} alt="Food Share Network Logo" className="img-fluid mb-3" style={{ maxWidth: '80%' }} />
        <button onClick={() => setActiveComponent('Profile')} className="btn btn-light bg-dark text-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link">
          <FontAwesomeIcon icon={faUser} className="me-2" />
          <span className="fw-bold">Profile</span>
        </button>
        <br/>
        <button onClick={() => setActiveComponent('FoodListing')} className="btn btn-light bg-dark text-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link">
          <FontAwesomeIcon icon={faUser} className="me-2" />
          <span className="fw-bold">FoodList</span>
        </button>
        <br/>
        <button onClick={() => setActiveComponent('RequestedItemsHistory')} className="btn btn-light bg-dark text-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link">
          <FontAwesomeIcon icon={faUser} className="me-2" />
          <span className="fw-bold">Record</span>
        </button>
        <br/>
        <button onClick={() => setActiveComponent('GeolocationComponent')} className="btn btn-light bg-dark text-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link">
          <FontAwesomeIcon icon={faUser} className="me-2" />
          <span className="fw-bold">Distance</span>
        </button>
        <br/>
        {/* <button onClick={() => setActiveComponent('GeocodingComponent')} className="btn btn-light bg-dark text-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link">
          <FontAwesomeIcon icon={faUser} className="me-2" />
          <span className="fw-bold">Map</span>
        </button>
        <br/> */}
        {/* <button onClick={() => setActiveComponent('Contact')} className="btn btn-light bg-dark text-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link">
          <FontAwesomeIcon icon={faEnvelope} className="me-2" />
          <span className="fw-bold">Contact</span>
        </button>
        <br/> */}
        {/* <button onClick={() => setActiveComponent('About')} className="btn btn-light bg-dark text-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link">
          <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
          <span className="fw-bold">About</span>
        </button>
        <br/> */}
        <button onClick={() => setActiveComponent('CustomForm')} className="btn btn-light bg-dark text-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link">
          <FontAwesomeIcon icon={faComment} className="me-2" />
          <span className="fw-bold">Send Feedback</span>
        </button>
        <br/>
        
        <button onClick={handleLogout} className="btn btn-light bg-dark text-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link">
          <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />
          <span className="fw-bold">Logout</span>
        </button>
    
      </div>
      <div className="content" style={{ marginLeft: '350px', padding: '20px', width: 'calc(100% - 350px)', overflowY: 'auto' }}>
        {activeComponent === '' && (
          <div className="text-center position-relative mt-5">
            <div className="position-relative">
              <video autoPlay loop muted className="img-fluid">
                <source src={video} type="video/mp4" />
              </video>
              <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0, backgroundColor: 'rgba(0, 0, 0, 0.3)' }}></div>
              <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
                <h1 className="text-white fw-bold">
                  <Typewriter options={{ strings: ['Welcome to FoodShare Network!'], autoStart: true, loop: true }} />
                </h1>
                <p className="text-white fw-bold">
                  <Typewriter options={{ strings: ['WE MAKE A LIVING BY WHAT WE GET, BUT WE MAKE A LIFE BY WHAT WE GIVE...'], autoStart: true, loop: true }} />
                </p>
              </div>
            </div>
            <div className="header-overlay"></div>
          </div>
        )}
        {activeComponent === 'Profile' && <RecipientProfile recipient={recipient} />}
        {activeComponent === 'FoodListing' && <FoodListing recipient={recipient} />}
        {activeComponent === 'RequestedItemsHistory' && <RequestedItemsHistory recipient={recipient} />}
        {activeComponent === 'MapComponent' && <MapComponent recipient={recipient} />}
        {activeComponent === 'Contact' && <Contact recipient={recipient} />}
        {activeComponent === 'About' && <About recipient={recipient} />}
        {activeComponent === 'CustomForm' && <CustomForm recipient={recipient} />}
        {/* {activeComponent === 'Geocoding' && <GeocodingComponent recipient={recipient} />} */}
        {activeComponent === 'GeolocationComponent' && (
          !requestAccepted ? (
            <GeolocationComponent 
                recipientLocation={recipientLocation} 
                onRequestDecision={handleRequestDecision}
            />
          ) : (
            <div className="mt-3 text-center">
              <h5>Donor has accepted your request!</h5>
              <p>Distance: {donorDistance.toFixed(2)} kilometers away from you.</p>
              <p>Estimated Travel Time: {donorTravelTime.hours} hours and {donorTravelTime.minutes} minutes.</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default LandingPage;

