// import React from 'react';
// import { Nav } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faHistory, faHourglassEnd, faUser, faToolbox, faQuestionCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

// const Sidebar = ({ onSelect }) => {
//   return (
//     <div className="mt-4 vh-100"> {/* Added mt-4 for top margin */}
//       {/* Sidebar */}
//       <div className="sidebar  vh-100 d-flex flex-column bg-dark text-light p-4 rounded" style={{ minWidth: '250px' }}>
//         <h3 className='text-light mb-4'>User Dashboard</h3>
//         <Nav defaultActiveKey="/home" className="flex-column">
//           <Nav.Link onClick={() => onSelect('Home')} className="font-weight-bold text-light mb-3">
//             <FontAwesomeIcon icon={faHome} className="mr-2" />
//             {' '}
//             Home
//           </Nav.Link>

//           <Nav.Link onClick={() => onSelect('profileApp')} className="font-weight-bold text-light mb-3">
//             <FontAwesomeIcon icon={faUser} className="mr-2" />
//             {' '}
//             User Profile
//           </Nav.Link>

//           <Nav.Link onClick={() => onSelect('histories')} className="font-weight-bold text-light mb-3">
//             <FontAwesomeIcon icon={faHistory} className="mr-2" />
//             {' '}
//             Donation History
//           </Nav.Link>

//           <Nav.Link onClick={() => onSelect('FoodForm')} className="font-weight-bold text-light mb-3">
//             <FontAwesomeIcon icon={faHourglassEnd} className="mr-2" />
//             {' '}
//             Pending Request
//           </Nav.Link>

//           <Nav.Link onClick={() => onSelect('faq')} className="font-weight-bold text-light mb-3">
//             <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" />
//             {' '}
//             FAQ
//           </Nav.Link>

//           <Nav.Link onClick={() => onSelect('testimonial')} className="font-weight-bold text-light mb-3">
//             <FontAwesomeIcon icon={faToolbox} className="mr-2" />
//             {' '}
//             Food Listing
//           </Nav.Link>

//           <div className="flex-grow-1"></div> {/* Flex grow to occupy remaining space */}

//           <Nav.Link onClick={() => onSelect('logout')} className="font-weight-bold text-light mt-auto mb-3">
//             <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
//             {' '}
//             Logout
//           </Nav.Link>
//         </Nav>
//       </div>
//       {/* End Sidebar */}
//     </div>
//   );
// }

// export default Sidebar;

import React from 'react';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHistory, faHourglassEnd, faUser, faToolbox, faQuestionCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ onSelect }) => {
  return (
    <div className="mt-5 mb-3"> {/* Adjusted mt-5 (top margin) and added mb-3 (bottom margin) */}
      {/* Sidebar */}
      <div className="sidebar d-flex flex-column bg-dark text-light p-4 rounded" style={{ minWidth: '250px', paddingTop: '20px', paddingBottom: '20px' }}>
        <h3 className='text-light mb-4'>User Dashboard</h3>
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link onClick={() => onSelect('Home')} className="font-weight-bold text-light mb-3">
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            {' '}
            Home
          </Nav.Link>

          <Nav.Link onClick={() => onSelect('profileApp')} className="font-weight-bold text-light mb-3">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            {' '}
            User Profile
          </Nav.Link>

          <Nav.Link onClick={() => onSelect('histories')} className="font-weight-bold text-light mb-3">
            <FontAwesomeIcon icon={faHistory} className="mr-2" />
            {' '}
            Donation History
          </Nav.Link>

          <Nav.Link onClick={() => onSelect('FoodForm')} className="font-weight-bold text-light mb-3">
            <FontAwesomeIcon icon={faHourglassEnd} className="mr-2" />
            {' '}
            Pending Request
          </Nav.Link>

          <Nav.Link onClick={() => onSelect('faq')} className="font-weight-bold text-light mb-3">
            <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" />
            {' '}
            FAQ
          </Nav.Link>

          <Nav.Link onClick={() => onSelect('testimonial')} className="font-weight-bold text-light mb-3">
            <FontAwesomeIcon icon={faToolbox} className="mr-2" />
            {' '}
            Food Listing
          </Nav.Link>

          <div className="flex-grow-1"></div> {/* Flex grow to occupy remaining space */}

          <Nav.Link onClick={() => onSelect('logout')} className="font-weight-bold text-light mt-auto mb-3">
            <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
            {' '}
            Logout
          </Nav.Link>
        </Nav>
      </div>
      {/* End Sidebar */}
    </div>
  );
}

export default Sidebar;


