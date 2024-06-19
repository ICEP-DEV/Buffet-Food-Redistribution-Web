
// import React from 'react';
// import ProfileApp from './profileApp'; // Corrected import statement
// import UserProfile from './UserProfile'; // Added import statement
// import Historie from './Historie';
// import FoodForm from '../Landing-page/FoodForm';
// import FoodListingApp from '../pages/FoodListingApp';
// import logo from '../components/FoodShareNetwork.jpeg';


// const Content = ({ page }) => {
//   return (
//     <div className="content pt-2">
//       {page === 'Home' && (
//        <div>
        
        
//           <img src={logo} alt="Food Share Network Logo" className="img-fluid mb-3" style={{ maxWidth: '80%' }} />
//        </div>
//       )}
 
//       {page === 'profileApp' && (
//         <div className=''>
//           <ProfileApp /> {/* Display the ProfileApp component */}
//         </div>
//       )}

//       {page === 'histories' && (
//         <div className=''>
//           <Historie />
//         </div>
//       )}
//       {page === 'FoodForm' && (
//         <div className=''>
//           <FoodForm />
//         </div>
//       )}
//       {page === 'FoodListingApp' && (
//         <div className=''>
//           <FoodListingApp />
//         </div>
//       )}
//       {page === 'userProfile' && (
//         <div className=''>
//           <UserProfile userData={{ // Pass sample user data
//             name: 'John Doe',
//             email: 'john@example.com',
//             telephone: '123-456-7890',
//             address: '123 Main St',
//             password: 'password123'
//           }} />
//         </div>
//       )}


//     </div>
//   );
// };

// export default Content;


import React from 'react';
import ProfileApp from './profileApp';
import UserProfile from './UserProfile';
import Historie from './Historie';
import FoodForm from '../Landing-page/FoodForm';
import FoodListingApp from '../pages/FoodListingApp';
import logo from '../components/FoodShareNetwork.jpeg';

const Content = ({ page }) => {
  return (
    <div className="content pt-0">
      {page === 'Home' && (
        <div>
          <img src={logo} alt="Food Share Network Logo" className="img-fluid mb-3" style={{ maxWidth: '80%' }} />
          {/* Add content for the Home page here */}
          <h2>Welcome to Food Share Network!</h2>
          <p>Discover ways to share and donate food to those in need.</p>
        </div>
      )}

      {page === 'profileApp' && (
        <div className=''>
          <ProfileApp />
        </div>
      )}

      {page === 'histories' && (
        <div className=''>
          <Historie />
        </div>
      )}

      {page === '#' && (
        <div className=''>
          <FoodForm />
        </div>
      )}

      {page === 'FoodListingApp' && (
        <div className=''>
          <FoodListingApp />
        </div>
      )}

      {page === 'userProfile' && (
        <div className=''>
          <UserProfile userData={{
            name: 'John Doe',
            email: 'john@example.com',
            telephone: '123-456-7890',
            address: '123 Main St',
            password: 'password123'
          }} />
        </div>
      )}

      {/* Default case when no page is selected */}
      {page !== 'Home' && page !== 'profileApp' && page !== 'histories' && page !== 'FoodForm' && page !== '#' && page !== 'userProfile' && (
        <div>
          <h2 className="text-center">Food Donation</h2>
          
          {/* <img src={logo} alt="Food Share Network Logo" className="img-fluid mb-3 ms-5" style={{ maxWidth: '100%' }} /> */}
          <div className="d-flex justify-content-center">
  <img src={logo} alt="Food Share Network Logo" className="img-fluid mb-3" style={{ maxWidth: '100%' }} />
</div>

        </div>
      )}
    </div>
  );
};

export default Content;

