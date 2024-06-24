import React, { useState } from 'react';
import { Container, Navbar, Nav, Row, Col, Button } from 'react-bootstrap';
import { FaHome, FaUser, FaCog, FaInfoCircle, FaSignOutAlt, FaTachometerAlt, FaUserCheck, FaDonate, FaCommentDots, FaUserCircle } from 'react-icons/fa';
import { Routes, Route, useNavigate } from 'react-router-dom';
import UserAccounts from './data/UserAccounts';
import DonationHistory from './data/DonationHistory';
import RecipientRequestHistory from './data/RecipientRequestHistory';
import Settings from './data/Settings';
import FeedbackManager from './data/FeedbackManager';
import FoodDonationDashboard from './FoodDonationDashboard';
import WelcomePage from './components/WelcomePage';
import Profile from './components/Profile';
// import Home from './components/Home';
import logo from './assets/logo.jpeg';
import ProfilePic from './assets/ProfilePic.jpg';

const AdminDash = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="d-flex flex-column vh-100">
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="Logo"
            />{' '}
            Food Share Network
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link onClick={() => navigate('/')}><FaHome /> Home</Nav.Link>
              <Nav.Link onClick={() => navigate('/profile')}><FaUserCircle /> Profile</Nav.Link>
              <Nav.Link onClick={() => navigate('/settings')}><FaCog /> Settings</Nav.Link>
              <Nav.Link onClick={() => navigate('/about')}><FaInfoCircle /> About</Nav.Link>
              <Nav.Link onClick={() => navigate('/')}><FaSignOutAlt /> Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="d-flex flex-grow-1 overflow-hidden" style={{ marginTop: '70px' }}>
        <div className={`bg-dark text-white d-flex flex-column p-3 ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`} style={{ width: isSidebarOpen ? '250px' : '80px' }}>
          <Button
            variant="link"
            className="text-white mb-3"
            onClick={handleSidebarToggle}
            aria-label="Toggle sidebar"
          >
            {isSidebarOpen ? 'Admin' : 'Dashboard'}
          </Button>

          {isSidebarOpen && (
            <div className="text-center mb-3">
              <img
                src={ProfilePic}
                width="100"
                height="100"
                className="rounded-circle"
                alt="ProfilePic"
              />
              <h5 className="mt-2">Ndumiso Buthelezi</h5>
            </div>
          )}
        
          <Nav className="flex-column">
            <Nav.Link className="text-white" onClick={() => navigate('/dashboard')}><FaTachometerAlt /> {isSidebarOpen && 'Dashboard'}</Nav.Link>
            <Nav.Link className="text-white" onClick={() => navigate('/user-accounts')}><FaUser /> {isSidebarOpen && 'User Accounts'}</Nav.Link>
            <Nav.Link className="text-white" onClick={() => navigate('/donation-history')}><FaDonate /> {isSidebarOpen && 'Donation History'}</Nav.Link>
            <Nav.Link className="text-white" onClick={() => navigate('/recipient-request-history')}><FaUserCheck /> {isSidebarOpen && 'Recipient History'}</Nav.Link>
            <Nav.Link className="text-white" onClick={() => navigate('/feedback-manager')}><FaCommentDots /> {isSidebarOpen && 'Feedback'}</Nav.Link>
            {/* <Nav.Link className="text-white" onClick={() => navigate('/companyRegistrationCheck')}><FaCommentDots /> {isSidebarOpen && 'Check'}</Nav.Link> */}
          </Nav>
        </div>

        <Container fluid className="flex-grow-1 p-3 bg-light overflow-auto">
          <Row>
            <Col>
              <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/dashboard" element={<FoodDonationDashboard />} />
                <Route path="/user-accounts" element={<UserAccounts />} />
                <Route path="/donation-history" element={<DonationHistory />} />
                <Route path="/recipient-request-history" element={<RecipientRequestHistory />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/feedback-manager" element={<FeedbackManager />} />
                {/* <Route path="/companyRegistrationCheck" element={<CompanyRegistrationCheck />} /> */}
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>

      <footer className="bg-dark text-white text-center py-3">
        &copy; 2024 Food Share Network. All Rights Reserved.
      </footer>
    </div>
  );
};

export default AdminDash;


