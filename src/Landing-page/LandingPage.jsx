import React from 'react';
import { Link } from 'react-router-dom';
import video from '../components/videos/f.mp4';
import logo from '../components/FoodShareNetwork.jpeg';
import { FaTachometerAlt } from 'react-icons/fa'; // Import speedometer icon from Font Awesome
import { BiDonateHeart } from 'react-icons/bi'; // Import heart icon from react-icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon // Import record icon from Font Awesome
import { faCircle } from '@fortawesome/free-solid-svg-icons'; // Import a different icon from Font Awesome

const LandingPage = () => {
  return (
    <>
      <section id="video-section" className="header-banner mb-3 mt-5">
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* Sidebar */}
            <div className="col-md-2" style={{ paddingLeft: '0' }}>
              <div className="sidebar" style={{ backgroundColor: 'grey', height: '100vh', paddingLeft: '0', marginLeft: '0' }}>
                <img src={logo} alt="Food Share Network Logo" style={{ width: '100%', marginBottom: '20px', marginTop: '7px' }} />
                <div style={{ marginTop: '40px' }}>
                  <div className="p-2 bg-light rounded" style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Link to="/foodform" className="text-dark fw-bold text-decoration-none d-block" style={{ display: 'flex', alignItems: 'center' }}>
                      <FaTachometerAlt size={20} className="me-2" /> {/* Font Awesome speedometer icon */}
                      <span>Dashboard</span>
                    </Link>
                  </div>
                  <div className="p-2 bg-light rounded" style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Link to="/foodform" className="text-dark fw-bold text-decoration-none d-block" style={{ display: 'flex', alignItems: 'center' }}>
                      <BiDonateHeart size={20} className="me-2" /> {/* Donate icon */}
                      <span>Donate</span>
                    </Link>
                  </div>
                  <div className="p-2 bg-light rounded" style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Link to="/Historys" className="text-dark fw-bold text-decoration-none d-block" style={{ display: 'flex', alignItems: 'center' }}>
                      <FontAwesomeIcon icon={faCircle} size="lg" className="me-2" /> {/* Font Awesome circle icon */}
                      <span>Record</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Main Content */}
            <div className="col-md-10">
              <div className="header-image text-center">
                <video
                  autoPlay
                  loop
                  muted
                  className="img-fluid"
                  style={{ maxWidth: '100%', height: 'auto', marginTop: '50px' }}
                >
                  <source src={video} type="video/mp4"></source>
                </video>
                <div className="header-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="section mt-5 mb-5">
        {/* Features section content */}
      </section>

      <footer style={{ textAlign: 'center', paddingBottom: '20px' }}>
        © 2024 FoodShare Network. All rights reserved.
      </footer>
    </>
  );
};

export default LandingPage;