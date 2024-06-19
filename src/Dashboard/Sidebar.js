import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory, faHourglassEnd, faUser } from '@fortawesome/free-solid-svg-icons';
const Sidebar = ({ onSelect }) => {
  return (
  
    <div className="sidebar d-flex flex-column bg-dark text-light p-5 pt-5 vh-100 ms-0">
  <h3 className='text-light'>Donor Dashboard</h3>
  <br />
  <br />
  <br />
  <Nav defaultActiveKey="/home" className="flex-column">
    <h4>
      <Nav.Link onClick={() => onSelect('histories')} className="font-weight-bold text-light">
        <FontAwesomeIcon icon={faHistory} className="mr-2" />
        {' '}
        Donation History
      </Nav.Link>
    </h4>
    <br />
    <h4>
      <Nav.Link onClick={() => onSelect('profileApp')} className="font-weight-bold text-light">
        <FontAwesomeIcon icon={faUser} className="mr-5" />
        {' '}
        User Profile
      </Nav.Link>
    </h4>
    <br />
    <h4>
      <Nav.Link onClick={() => onSelect('FoodForm')} className="font-weight-bold text-light">
        <FontAwesomeIcon icon={faHourglassEnd} className="mr-2" />
        {' '}
        Pending Request
      </Nav.Link>
    </h4>
  </Nav>
</div>

  )
}

export default Sidebar;
