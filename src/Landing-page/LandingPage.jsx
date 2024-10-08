// import React, { useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import video from '../components/videos/f.mp4';
// import logo from '../components/FoodShareNetwork.jpeg';
// import { FaTachometerAlt } from 'react-icons/fa';
// import { BiDonateHeart } from 'react-icons/bi';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircle, faInfoCircle, faEnvelope, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
// import { UserContext } from '../App';
// import Typewriter from 'typewriter-effect'; // Importing Typewriter component
 
// const LandingPage = () => {
//   const { setUser } = useContext(UserContext);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     setUser(null);
//     navigate('/');
//   };

//   return (
//     <>
//     <br></br>
//       <section id="video-section" className="header-banner mb-3 mt-5">
//         <div className="container-fluid">
//           <div className="row align-items-center">
//             <div className="col-md-2 p-0">
//               <div className="bg-secondary text-light vh-100 d-flex flex-column align-items-center pt-3 rounded-end">
//                 <img src={logo} alt="Food Share Network Logo rounded-end" className="img-fluid mb-3 rounded-end" style={{ maxWidth: '80%' }} />
//                 <Link to="/ProfileApp" className="btn btn-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link" style={{ marginTop: '20px' }}>
//                   <FaTachometerAlt size={20} className="me-2" />
//                   {/* <span className="fw-bold">Dashboard</span> */}
//                   <span className="fw-bold">Profile</span>
//                 </Link>
//                 <Link to="/foodform" className="btn btn-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link" style={{ marginTop: '20px' }}>
//                   <BiDonateHeart size={20} className="me-2" />
//                   <span className="fw-bold">Donate</span>
//                 </Link>
//                 <Link to="/record" className="btn btn-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link" style={{ marginTop: '20px' }}>
//                   <FontAwesomeIcon icon={faCircle} size="lg" className="me-2" />
//                   <span className="fw-bold">Record</span>
//                 </Link>
//                 <Link to="/contact" className="btn btn-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link" style={{ marginTop: '20px' }}>
//                   <FontAwesomeIcon icon={faEnvelope} size="lg" className="me-2" />
//                   <span className="fw-bold">Contact</span>
//                 </Link>
//                 <Link to="/about" className="btn btn-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link" style={{ marginTop: '20px' }}>
//                   <FontAwesomeIcon icon={faInfoCircle} size="lg" className="me-2" />
//                   <span className="fw-bold">About</span>
//                 </Link>
//                 <Link to="/" onClick={handleLogout} className="btn btn-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link" style={{ marginTop: '20px' }}>
//                   <FontAwesomeIcon icon={faSignOutAlt} size="lg" className="me-2" />
//                   <span className="fw-bold">Logout</span>
//                 </Link>
//               </div>
//             </div>
//             <div className="col-md-10">
//               <div className="text-center position-relative mt-0">
//                 <div className="position-relative">
//                   <video
//                     autoPlay
//                     loop
//                     muted
//                     className="img-fluid"
//                   >
//                     <source src={video} type="video/mp4"></source>
//                   </video>
//                   <div
//                     className="position-absolute w-100 h-100" style={{
//                       top: 0,
//                       left: 0,
//                       backgroundColor: 'rgba(0, 0, 0, 0.3)',
//                     }}
//                   ></div>
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
//                           strings: [
//                             'WE MAKE A LIVING BY WHAT WE GET, BUT WE MAKE A LIFE BY WHAT WE GIVE...',
//                           ],
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
//     </>
//   );
// };

// export default LandingPage;

// import React, { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import video from '../components/videos/f.mp4';
// import logo from '../components/FoodShareNetwork.jpeg';
// import { FaTachometerAlt } from 'react-icons/fa';
// import { BiDonateHeart } from 'react-icons/bi';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircle, faInfoCircle, faEnvelope, faSignOutAlt, faCheck, faUnlock, faUser } from '@fortawesome/free-solid-svg-icons';
// import { UserContext } from '../App';
// import Typewriter from 'typewriter-effect';
// import DonorDashboard from './DonorDashboard';
// import FoodForm from './FoodForm';
// import History from './Historys';
// import Contact from '../pages/Contact';
// import About from '../pages/About';
// import AcceptedFoodPage from '../pages/AcceptedFoodPage';
// // import UserProfile from '../Dashboard/UserProfile';
// import DonorProfile from './DonorProfile';
// import UpdatePassword from '../update-password/UpdatePassword';

// const LandingPage = () => {
//   const { setUser } = useContext(UserContext);
//   const [activePage, setActivePage] = useState('home');
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     setUser(null);
//     navigate('/');
//   };

//   const renderContent = () => {
//     switch (activePage) {
//       case 'dashboard':
//         return <DonorDashboard donor={{ /* pass the donor data here */ }} />;
//       case 'DonorProfile':
//         return <DonorProfile />;
//       case 'donate':
//           return <FoodForm />;
//       case 'record':
//         return <History />;
//       case 'contact':
//         return <Contact/>;
//       case 'password':
//         return <UpdatePassword/>;
//         case 'accepted food':
//           return <AcceptedFoodPage/>;
//       default:
//         return (
//           <>
//             <div className="text-center position-relative mt-2">
//               <div className="position-relative">
//                 <video autoPlay loop muted className="img-fluid mt-0">
//                   <source src={video} type="video/mp4" />
//                 </video>
//                 <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0, backgroundColor: 'rgba(0, 0, 0, 0.3)' }}></div>
//                 <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
//             <h1 className="display-4 fw-bold">
//               <Typewriter
//                 options={{
//                   strings: ['WELCOME TO FOODSHARE NETWORK!'],
//                   autoStart: true,
//                   loop: true,
//                 }}
//               />
//             </h1>
//             <p className="lead fw-bold">
//               <Typewriter
//                 options={{
//                   strings: [
//                     'WE MAKE A LIVING BY WHAT WE GET, BUT WE MAKE A LIFE BY WHAT WE GIVE...',
//                   ],
//                   autoStart: true,
//                   loop: true,
//                 }}
//               />
//             </p>
//           </div>
//               </div>
//               <div className="header-overlay"></div>
//             </div>
//           </>
//         );
//     }
//   };

//   return (
//     <>
//       <nav>
//         <br></br>
//         <section id="video-section" className="header-banner mb-1 mt-5">
//           <div className="container-fluid">
//             <div className="row">
//               <div className="col-md-2 p-0">
//                 <div className="bg-lifht text-light vh-100 d-flex flex-column align-items-center pt-3 sticky-top">
//                   <img src={logo} alt="Food Share Network Logo" className="img-fluid mb-3" style={{ maxWidth: '80%' }} />
//                   <br/>
//                   <button
//                     onClick={() => setActivePage('dashboard')}
//                     className="btn btn-dark text-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link"
//                   >
//                     <FaTachometerAlt size={20} className="me-2" />
//                     <span className="fw-bold">Dashboard</span>
//                   </button>
//                   <br/>
//                   <button
//                     onClick={() => setActivePage('DonorProfile')}
//                     className="btn btn-dark text-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link"
//                   >
//                     <FontAwesomeIcon icon={faUser} size="lg" className="me-2" />
//                     <span className="fw-bold">Profile</span>
//                   </button>
//                   <br/>
//                   <button
//                     onClick={() => setActivePage('donate')}
//                     className="btn btn-dark text-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link"
//                   >
//                     <BiDonateHeart size={20} className="me-2" />
//                     <span className="fw-bold">Donate</span>
//                   </button>


//                   <br/>
//                   <button
//                     onClick={() => setActivePage('record')}
//                     className="btn btn-dark text-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link"
//                   >
//                     <FontAwesomeIcon icon={faCircle} size="lg" className="me-2" />
//                     <span className="fw-bold">Record</span>
//                   </button>
//                   <br/>
//                   {/* <button
//                     onClick={() => setActivePage('contact')}
//                     className="btn btn-dark text-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link"
//                   >
//                     <FontAwesomeIcon icon={faEnvelope} size="lg" className="me-2" />
//                     <span className="fw-bold">Contact</span>
//                   </button>
//                   <br/> */}
//                   <button
//                     onClick={() => setActivePage('password')}
//                     className="btn btn-dark text-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link"
//                   >
//                     <FontAwesomeIcon icon={faUnlock} size="lg" className="me-2" />
//                     <span className="fw-bold">Update Password</span>
//                   </button>
//                   <br/>



//                   <button
//                     onClick={() => setActivePage('accepted food')}
//                     className="btn btn-dark text-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link"
//                   >
//                     <FontAwesomeIcon icon={faCheck} size="lg" className="me-2" />
//                     <span className="fw-bold">Accepted Iterm</span>
//                   </button>
//                   <br/>

//                   {/* <button
//                     onClick={handleLogout}
//                     className="btn btn-dark text-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link"
//                   >
//                     <FontAwesomeIcon icon={faSignOutAlt} size="lg" className="me-2" />
//                     <span className="fw-bold">Logout</span>
//                   </button> */}
//                 </div>
//               </div>
//               <div className="col-md-10">
//                 <section id="features" className="section mt-5 mb-5">
//                   {renderContent()}
//                 </section>
//               </div>
//             </div>
//           </div>
//         </section>
//       </nav>
//     </>
//   );
// };

// export default LandingPage;

// LandingPage.jsx
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import video from '../components/videos/f.mp4';
import logo from '../components/FoodShareNetwork.jpeg';
import { FaTachometerAlt } from 'react-icons/fa';
import { BiDonateHeart } from 'react-icons/bi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faInfoCircle, faEnvelope, faSignOutAlt, faCheck, faUnlock, faUser } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../App';
import Typewriter from 'typewriter-effect';
import DonorDashboard from './DonorDashboard';
import FoodForm from './FoodForm';
import History from './Historys';
import Contact from '../pages/Contact';
import About from '../pages/About';
import AcceptedFoodPage from '../pages/AcceptedFoodPage';
import DonorProfile from './DonorProfile';
import UpdatePassword from '../update-password/UpdatePassword';

const LandingPage = () => {
  const { setUser } = useContext(UserContext);
  const [activePage, setActivePage] = useState('home');
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return <DonorDashboard donor={{ /* pass the donor data here */ }} />;
      case 'DonorProfile':
        return <DonorProfile />;
      case 'donate':
        return <FoodForm />;
      case 'record':
        return <History />;
      case 'contact':
        return <Contact />;
      case 'password':
        return <UpdatePassword />;
      case 'accepted food':
        return <AcceptedFoodPage />;
      default:
        return (
          <>
            <div className="text-center position-relative mt-2">
              <div className="position-relative">
                <video autoPlay loop muted className="img-fluid mt-0">
                  <source src={video} type="video/mp4" />
                </video>
                <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0, backgroundColor: 'rgba(0, 0, 0, 0.3)' }}></div>
                <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
                  <h1 className="display-4 fw-bold">
                    <Typewriter
                      options={{
                        strings: ['WELCOME TO FOODSHARE NETWORK!'],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </h1>
                  <p className="lead fw-bold">
                    <Typewriter
                      options={{
                        strings: [
                          'WE MAKE A LIVING BY WHAT WE GET, BUT WE MAKE A LIFE BY WHAT WE GIVE...',
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="header-overlay"></div>
            </div>
          </>
        );
    }
  };

  return (
    <>
      <nav>
        <br />
        <section id="video-section" className="header-banner mb-1 mt-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2 p-0">
                <div className="bg-light text-light vh-100 d-flex flex-column align-items-center pt-3 sticky-top">
                  <img src={logo} alt="Food Share Network Logo" className="img-fluid mb-3" style={{ maxWidth: '80%' }} />
                  <br />
                  <button
                    onClick={() => setActivePage('dashboard')}
                    className="btn btn-dark text-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link"
                  >
                    <FaTachometerAlt size={20} className="me-2" />
                    <span className="fw-bold">Dashboard</span>
                  </button>
                  <br />
                  <button
                    onClick={() => setActivePage('DonorProfile')}
                    className="btn btn-dark text-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link"
                  >
                    <FontAwesomeIcon icon={faUser} size="lg" className="me-2" />
                    <span className="fw-bold">Profile</span>
                  </button>
                  <br />
                  <button
                    onClick={() => setActivePage('donate')}
                    className="btn btn-dark text-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link"
                  >
                    <BiDonateHeart size={20} className="me-2" />
                    <span className="fw-bold">Donate</span>
                  </button>
                  <br />
                  <button
                    onClick={() => setActivePage('record')}
                    className="btn btn-dark text-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link"
                  >
                    <FontAwesomeIcon icon={faCircle} size="lg" className="me-2" />
                    <span className="fw-bold">Record</span>
                  </button>
                  <br />
                  <button
                    onClick={() => setActivePage('password')}
                    className="btn btn-dark text-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link"
                  >
                    <FontAwesomeIcon icon={faUnlock} size="lg" className="me-2" />
                    <span className="fw-bold">Update Password</span>
                  </button>
                  <br />
                  <button
                    onClick={() => setActivePage('accepted food')}
                    className="btn btn-dark text-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link"
                  >
                    <FontAwesomeIcon icon={faCheck} size="lg" className="me-2" />
                    <span className="fw-bold">Accepted Item</span>
                  </button>
                  <br />
                  {/* Uncomment if logout button is needed */}
                  {/* <button
                    onClick={handleLogout}
                    className="btn btn-dark text-light mb-3 w-75 d-flex align-items-center justify-content-center sidebar-link"
                  >
                    <FontAwesomeIcon icon={faSignOutAlt} size="lg" className="me-2" />
                    <span className="fw-bold">Logout</span>
                  </button> */}
                </div>
              </div>
              <div className="col-md-10">
                <section id="features" className="section mt-5 mb-5">
                  {renderContent()}
                </section>
              </div>
            </div>
          </div>
        </section>
      </nav>
    </>
  );
};

export default LandingPage;
