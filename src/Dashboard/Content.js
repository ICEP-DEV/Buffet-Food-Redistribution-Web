
// import React from 'react';
// import ProfileApp from './profileApp'; // Corrected import statement
// import UserProfile from './UserProfile'; // Added import statement
// import Historie from './Historie';
// import FoodForm from '../Landing-page/FoodForm';
// import FoodListingApp from '../pages/FoodListingApp';

// const Content = ({ page }) => {
//   return (
//     <div className="content pt-2 justify-content-center  align-items-center ">
//       {page === 'profileApp' && (
//         <div>
//           <h1>Profile</h1>
//         </div>
//       )}
//       <div className='d-flex align-items-center pl-3 ml-3 pr-5'>
//       {page === 'histories' && (
//         <div className='text-center'>
//           <h1 className='content pt-2 justify-content-center  align-items-center'>Donation History</h1>
//         </div>
//       )}
//       </div>
      
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

// import React from 'react';
// import ProfileApp from './profileApp';
// import UserProfile from './UserProfile';
// import Historie from './Historie';
// import FoodForm from '../Landing-page/FoodForm';
// import FoodListingApp from '../pages/FoodListingApp';


// const Content = ({ page }) => {
//   return (
//     <div className="container">
//       <div className="row justify-content-center align-items-center">
        
//         <div className="col-lg-12"> {/* Adjust the column size as needed */}

//         {page === '' && (
//   <div>
//     <h1 className="text-center">FoodShare Network</h1>
//     <div className="text-center">
//       <img src={require('../components/FoodShareNetwork.jpeg').default} alt="Food Share Network" />
//     </div>
//   </div>
// )}


//           {page === 'profileApp' && (
//             <div>
//               <h1 className="text-center">Profile</h1>
//               <ProfileApp /> {/* Display the ProfileApp component */}
//             </div>
//           )}

//           {page === 'histories' && (
//             <div>
//               <h1 className="text-center">Donation History</h1>
//               <Historie />
//             </div>
//           )}

//           {page === 'userProfile' && (
//             <div>
//               <UserProfile userData={{ // Pass sample user data
//                 name: 'John Doe',
//                 email: 'john@example.com',
//                 telephone: '123-456-7890',
//                 address: '123 Main St',
//                 password: 'password123'
//               }} />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Content;


// import React from 'react';
// import ProfileApp from './profileApp';
// import UserProfile from './UserProfile';
// import Historie from './Historie';
// import FoodForm from '../Landing-page/FoodForm';
// import FoodListingApp from '../pages/FoodListingApp';


// const Content = ({ page }) => {
//   return (
//     <div className="container">
//       <div className="row justify-content-center align-items-center">
//         <div className="col-lg-8"> {/* Adjust the column size as needed */}
//           {page === '' && (
//             <div>
//               <h1 className="text-center">FoodShare Network</h1>
//               <div className="text-center">
//                 <img src={require('../components/FoodShareNetwork.jpeg').default} alt="Food Share Network" />
//               </div>
//             </div>
//           )}

//           {page === 'profileApp' && (
//             <div>
//               <h1 className="text-center">Profile</h1>
//               <ProfileApp /> {/* Display the ProfileApp component */}
//             </div>
//           )}

//           {page === 'histories' && (
//             <div>
//               <h1 className="text-center"></h1>
//               <Historie />
//             </div>
//           )}

//           {page === 'userProfile' && (
//             <div>
//               <UserProfile userData={{ // Pass sample user data
//                 name: 'John Doe',
//                 email: 'john@example.com',
//                 telephone: '123-456-7890',
//                 address: '123 Main St',
//                 password: 'password123'
//               }} />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Content;


// import React from 'react';
// import ProfileApp from './profileApp';
// import UserProfile from './UserProfile';
// import Historie from './Historie';
// import FoodForm from '../Landing-page/FoodForm';
// import FoodListingApp from '../pages/FoodListingApp';
// import DefaultImage from '../components/FoodShareNetwork.jpeg'; // Import the default image

// const Content = ({ page }) => {
//   return (
//     <div className="container">
//       <div className="row justify-content-center align-items-center">
//         <div className="col-lg-8"> {/* Adjust the column size as needed */}
//           {page === '' && (
//             <div>
//               <h1 className="text-center">FoodShare Network</h1>
//               <div className="text-center">
//                 {/* <img src={FoodShareNetwork} alt="Food Share Network" /> */}
//                 <img src={DefaultImage} alt="Food Share Network" className="img-fluid img-thumbnail" style={{ maxWidth: '100%', height: 'auto' }} />
//               </div>
//             </div>
//           )}

//           {page === 'profileApp' && (
//             <div>
//               <h1 className="text-center">Profile</h1>
//               <ProfileApp /> {/* Display the ProfileApp component */}
//             </div>
//           )}

//           {page === 'histories' && (
//             <div>
//               <h1 className="text-center"></h1>
//               <Historie />
//             </div>
//           )}

//           {page === 'userProfile' && (
//             <div>
//               <UserProfile userData={{ // Sample user data
//                 name: 'John Doe',
//                 email: 'john@example.com',
//                 telephone: '123-456-7890',
//                 address: '123 Main St',
//                 password: 'password123'
//               }} />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Content;

// import React from 'react';
// import ProfileApp from './profileApp';
// import UserProfile from './UserProfile';
// import Historie from './Historie';
// import DefaultImage from '../components/FoodShareNetwork.jpeg'; // Import the default image
// import Reviewfeedback from './Reviewfeedback';
// import ProfileSettings from './ProfileSettings';

// const Content = ({ page }) => {
//   let content = null;

//   switch (page) {
//     case '':
//       content = (
//         <div>
//           <h1 className="text-center">FoodShare Network</h1>
//           <div className="text-center">
//             <img src={DefaultImage} alt="Food Share Network" className="img-fluid img-thumbnail" style={{ maxWidth: '100%', height: 'auto' }} />
//           </div>
//         </div>
//       );
//       break;
//     case 'profileApp':
//       content = (
//         <div>
//           <h1 className="text-center">Profile</h1>
//           <ProfileApp />
//         </div>
//       );
//       break;

//       case 'Reviewfeedback':
//         content = (
//           <div>
//             <h1 className="text-center"></h1>
//             <Reviewfeedback />
//           </div>
//         );
//         break;

//         case 'ProfileSettings':
//         content = (
//           <div>
//             <h1 className="text-center"></h1>
//             <ProfileSettings />
//           </div>
//         );
//         break;




        

//     case 'histories':
//       content = (
//         <div>
//           <h1 className="text-center"></h1>
//           <Historie />
//         </div>
//       );
//       break;
//     case 'userProfile':
//       content = (
//         <div>
//           <UserProfile
//             userData={{
//               name: 'John Doe',
//               email: 'john@example.com',
//               telephone: '123-456-7890',
//               address: '123 Main St',
//               password: 'password123'
//             }}
//           />
//         </div>
//       );
//       break;
//     default:
//       content = (
//         <div>
//           <h1 className="text-center"></h1>
//           <img src={DefaultImage} alt="Food Share Network" className="img-fluid img-thumbnail" style={{ maxWidth: '200%', height: 'auto' }} />
//         </div>
//       );
//   }

//   return (
//     <div className="container">
//       <div className="row justify-content-center align-items-center">
//         <div className="col-lg-8">
//           {content}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Content;


import React from 'react';
import ProfileApp from './profileApp';
import UserProfile from './UserProfile';
import Historie from './Historie';
import DefaultImage from '../components/FoodShareNetwork.jpeg'; // Import the default image
import Reviewfeedback from './Reviewfeedback';
import ProfileSettings from './ProfileSettings';

const Content = ({ page }) => {
  let content = null;

  switch (page) {
    case '':
      content = (
        <div>
          <h1 className="text-center">FoodShare Network</h1>
          <div className="text-center">
            <img src={DefaultImage} alt="Food Share Network" className="img-fluid img-thumbnail" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        </div>
      );
      break;
    case 'profileApp':
      content = (
        <div>
          <h1 className="text-center">Profile</h1>
          <ProfileApp />
        </div>
      );
      break;
    case 'Reviewfeedback':
      content = (
        <div>
          <h1 className="text-center">Feedback</h1>
          <Reviewfeedback />
        </div>
      );
      break;
    case 'ProfileSettings':
      content = (
        <div>
          <h1 className="text-center">Settings</h1>
          <ProfileSettings />
        </div>
      );
      break;
    case 'histories':
      content = (
        <div>
          <h1 className="text-center">Donation History</h1>
          <Historie />
        </div>
      );
      break;
    case 'userProfile':
      content = (
        <div>
          <UserProfile
            userData={{
              name: 'John Doe',
              email: 'john@example.com',
              telephone: '123-456-7890',
              address: '123 Main St',
              password: 'password123'
            }}
          />
        </div>
      );
      break;
    default:
      content = (
        <div>
          <h1 className="text-center">FoodShare Network</h1>
          <img src={DefaultImage} alt="Food Share Network" className="img-fluid img-thumbnail" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      );
  }

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-lg-8">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Content;
