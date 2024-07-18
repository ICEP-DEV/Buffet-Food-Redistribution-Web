// import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUtensils } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';



// function FoodListing() {
//   const [foodItems, setFoodItems] = useState([]);
//   const [requestedItems, setRequestedItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   //var response = axios.get('http://localhost:5282/api/FoodItem')
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:5282/api/FoodItem');
//         setFoodItems(response.data);
//         setLoading(false);
//         //console.log(response);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   console.log(foodItems);
  
//   const token = localStorage.getItem('token'); 
//   const handleRequest = (itemId) => {
//     const selectedItem = foodItems.find(item => item.id === itemId);
//     if (selectedItem) {
      
//       //const api = `http://localhost:5282/api/Email/DonorMail?email=${selectedItem.contact}`
//       const url = `http://localhost:5282/api/Email/DonorMail?email=${selectedItem.contact}&itemId=${selectedItem.id}`
//       axios.post(url);

//       axios.post(`http://localhost:5282/api/Request?foodDonationId=${selectedItem.id}`,{},{
//         headers:{
//           Authorization: `Bearer ${token}` 
//         }
//       });

//       alert(`Request for ${selectedItem.itemName} sent!`);
//       setRequestedItems([...requestedItems, selectedItem]);
//     }
//   };
  
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <br></br>
//       <h2 className="mt-5 mb-3 text-center">Available Donations</h2>
//       <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-2 mb-5">
//         {foodItems.map((item) => (
//           <div key={item.id} className="col">
//             <div className={`card h-100 shadow rounded p-3 ${requestedItems.some(requestedItem => requestedItem.id === item.id) ? 'bg-light disabled' : ''}`}>
//               <div className="card-body d-flex flex-column justify-content-between">
//                 <div>
//                   <h5 className="card-title">{item.itemName}</h5>
//                   <p className="card-text">
//                     <strong>Quantity:</strong> {item.quantity}<br />
//                     <strong>Description:</strong> {item.description}<br />
//                     <strong>Time Cooked:</strong> {item.dateCooked}<br />
//                     <strong>Address:</strong> {item.address}
//                   </p>
//                 </div>
//                 <button onClick={() => handleRequest(item.id)} className="btn btn-primary mt-2 align-self-end" disabled={requestedItems.some(requestedItem => requestedItem.id === item.id)}>
//                   {requestedItems.some(requestedItem => requestedItem.id === item.id) ? 'Requested' : <><FontAwesomeIcon icon={faUtensils} /> Request</>}
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// export default (FoodListing);
// import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUtensils } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';



// function FoodListing() {
//   const [foodItems, setFoodItems] = useState([]);
//   const [requestedItems, setRequestedItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   //var response = axios.get('http://localhost:5282/api/FoodItem')
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:5282/api/FoodItem');
//         setFoodItems(response.data);
//         setLoading(false);
//         //console.log(response);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   console.log(foodItems);
  
//   const token = localStorage.getItem('token'); 
//   const handleRequest = (itemId) => {
//     const selectedItem = foodItems.find(item => item.id === itemId);
//     if (selectedItem) {
      
//       //const api = `http://localhost:5282/api/Email/DonorMail?email=${selectedItem.contact}`
//       const url = `http://localhost:5282/api/Email/DonorMail?email=${selectedItem.contact}&itemId=${selectedItem.id}`
//       axios.post(url);

//       axios.post(`http://localhost:5282/api/Request?foodDonationId=${selectedItem.id}`,{},{
//         headers:{
//           Authorization: `Bearer ${token}` 
//         }
//       });

//       alert(`Request for ${selectedItem.itemName} sent!`);
//       setRequestedItems([...requestedItems, selectedItem]);
//     }
//   };
  
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <br></br>
//       <h2 className="mt-5 mb-3 text-center">Available Donations</h2>
//       <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-2 mb-5">
//         {foodItems.map((item) => (
//           <div key={item.id} className="col">
//             <div className={`card h-100 shadow rounded p-3 ${requestedItems.some(requestedItem => requestedItem.id === item.id) ? 'bg-light disabled' : ''}`}>
//               <div className="card-body d-flex flex-column justify-content-between">
//                 <div>
//                   <h5 className="card-title">{item.itemName}</h5>
//                   <p className="card-text">
//                     <strong>Quantity:</strong> {item.quantity}<br />
//                     <strong>Description:</strong> {item.description}<br />
//                     <strong>Time Cooked:</strong> {item.dateCooked}<br />
//                     <strong>Address:</strong> {item.address}
//                   </p>
//                 </div>
//                 <button onClick={() => handleRequest(item.id)} className="btn btn-primary mt-2 align-self-end" disabled={requestedItems.some(requestedItem => requestedItem.id === item.id)}>
//                   {requestedItems.some(requestedItem => requestedItem.id === item.id) ? 'Requested' : <><FontAwesomeIcon icon={faUtensils} /> Request</>}
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// export default (FoodListing);





// import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUtensils } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';

// function FoodListing() {
//   const [foodItems, setFoodItems] = useState([]);
//   const [requestedItems, setRequestedItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:5282/api/FoodItem');
//         setFoodItems(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     // Load requested items from localStorage on component mount
//     const storedRequestedItems = JSON.parse(localStorage.getItem('requestedItems')) || [];
//     setRequestedItems(storedRequestedItems);
//   }, []);

//   const token = localStorage.getItem('token');

//   const handleRequest = (itemId) => {
//     const selectedItem = foodItems.find(item => item.id === itemId);
//     if (selectedItem && !requestedItems.some(item => item.id === itemId)) {
//       const updatedRequestedItems = [...requestedItems, selectedItem];
//       setRequestedItems(updatedRequestedItems);
//       localStorage.setItem('requestedItems', JSON.stringify(updatedRequestedItems));

//       const emailUrl = `http://localhost:5282/api/Email/DonorMail?email=${selectedItem.contact}&itemId=${selectedItem.id}`;
//       axios.post(emailUrl);

//       axios.post(`http://localhost:5282/api/Request?foodDonationId=${selectedItem.id}`, {}, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });

//       alert(`Request for ${selectedItem.itemName} sent!`);
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <br />
//       <h2 className="mt-5 mb-3 text-center">Available Donations</h2>
//       <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-2 mb-5">
//         {foodItems.map((item) => (
//           <div key={item.id} className="col">
//             <div className={`card h-100 shadow rounded p-3 ${requestedItems.some(requestedItem => requestedItem.id === item.id) ? 'bg-light disabled' : ''}`}>
//               <div className="card-body d-flex flex-column justify-content-between">
//                 <div>
//                   <h5 className="card-title">{item.itemName}</h5>
//                   <p className="card-text">
//                     <strong>Quantity:</strong> {item.quantity}<br />
//                     <strong>Description:</strong> {item.description}<br />
//                     <strong>Time Cooked:</strong> {item.dateCooked}<br />
//                     <strong>Address:</strong> {item.address}
//                   </p>
//                 </div>
//                 <button onClick={() => handleRequest(item.id)} className="btn btn-primary mt-2 align-self-end" disabled={requestedItems.some(requestedItem => requestedItem.id === item.id)}>
//                   {requestedItems.some(requestedItem => requestedItem.id === item.id) ? 'Requested' : <><FontAwesomeIcon icon={faUtensils} /> Request</>}
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default FoodListing;


// import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUtensils } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';

// function FoodListing() {
//   const [foodItems, setFoodItems] = useState([]);
//   const [requestedItems, setRequestedItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:5282/api/FoodItem');
//         setFoodItems(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     // Load requested items from localStorage on component mount
//     const storedRequestedItems = JSON.parse(localStorage.getItem('requestedItems')) || [];
//     setRequestedItems(storedRequestedItems);
//   }, []);

//   const token = localStorage.getItem('token');

//   const handleRequest = (itemId) => {
//     const selectedItem = foodItems.find(item => item.id === itemId);
//     if (selectedItem && !requestedItems.some(item => item.id === itemId)) {
//       const updatedRequestedItems = [...requestedItems, selectedItem];
//       setRequestedItems(updatedRequestedItems);
//       localStorage.setItem('requestedItems', JSON.stringify(updatedRequestedItems));

//       const emailUrl = `http://localhost:5282/api/Email/DonorMail?email=${selectedItem.contact}&itemId=${selectedItem.id}`;
//       axios.post(emailUrl);

//       axios.post(`http://localhost:5282/api/Request?foodDonationId=${selectedItem.id}`, {}, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });

//       alert(`Request for ${selectedItem.itemName} sent!`);
//     }
//   };

//   const clearLocalStorage = () => {
//     localStorage.removeItem('requestedItems');
//     setRequestedItems([]);
//     alert('Local storage cleared!');
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <br />
//       <h2 className="mt-5 mb-3 text-center">Available Donations</h2>
//       <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-2 mb-5">
//         {foodItems.map((item) => (
//           <div key={item.id} className="col">
//             <div className={`card h-100 shadow rounded p-3 ${requestedItems.some(requestedItem => requestedItem.id === item.id) ? 'bg-light disabled' : ''}`}>
//               <div className="card-body d-flex flex-column justify-content-between">
//                 <div>
//                   <h5 className="card-title">{item.itemName}</h5>
//                   <p className="card-text">
//                     <strong>Quantity:</strong> {item.quantity}<br />
//                     <strong>Description:</strong> {item.description}<br />
//                     <strong>Time Cooked:</strong> {item.dateCooked}<br />
//                     <strong>Address:</strong> {item.address}
//                   </p>
//                 </div>
//                 <button onClick={() => handleRequest(item.id)} className="btn btn-primary mt-2 align-self-end" disabled={requestedItems.some(requestedItem => requestedItem.id === item.id)}>
//                   {requestedItems.some(requestedItem => requestedItem.id === item.id) ? 'Requested' : <><FontAwesomeIcon icon={faUtensils} /> Request</>}
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="text-center">
//         <button onClick={clearLocalStorage} className="btn btn-danger mb-3">Clear Local Storage</button>
//       </div>
//     </div>
//   );
// }

// export default FoodListing;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUtensils } from '@fortawesome/free-solid-svg-icons';

// function FoodListing() {
//   const [foodItems, setFoodItems] = useState([]);
//   const [requestedItems, setRequestedItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:5282/api/FoodItem');
//         setFoodItems(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     // Load requested items from localStorage on component mount
//     const storedRequestedItems = JSON.parse(localStorage.getItem('requestedItems')) || [];
//     setRequestedItems(storedRequestedItems);
//   }, []);

//   const token = localStorage.getItem('token');

//   const handleRequest = async (itemId) => {
//     const selectedItem = foodItems.find(item => item.id === itemId);
//     if (selectedItem && !requestedItems.some(item => item.id === itemId)) {
//       try {
//         // Send email to donor
//         const emailUrl = `http://localhost:5282/api/Email/DonorMail?email=${selectedItem.contact}&itemId=${selectedItem.id}`;
//         await axios.post(emailUrl);

//         // Send request to backend
//         await axios.post(`http://localhost:5282/api/Request?foodDonationId=${selectedItem.id}`, {}, {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });

//         // Update state and local storage
//         const updatedRequestedItems = [...requestedItems, selectedItem];
//         setRequestedItems(updatedRequestedItems);
//         localStorage.setItem('requestedItems', JSON.stringify(updatedRequestedItems));

//         alert(`Request for ${selectedItem.itemName} sent!`);
//       } catch (error) {
//         console.error('Error sending request:', error);
//         alert('Failed to send request. Please try again.');
//       }
//     }
//   };

//   const clearLocalStorage = () => {
//     localStorage.removeItem('requestedItems');
//     setRequestedItems([]);
//     alert('Local storage cleared!');
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <br />
//       <h2 className="mt-5 mb-3 text-center">Available Donations</h2>
//       <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-2 mb-5">
//         {foodItems.map((item) => (
//           <div key={item.id} className="col">
//             <div className={`card h-100 shadow rounded p-3 ${requestedItems.some(requestedItem => requestedItem.id === item.id) ? 'bg-light disabled' : ''}`}>
//               <div className="card-body d-flex flex-column justify-content-between">
//                 <div>
//                   <h5 className="card-title">{item.itemName}</h5>
//                   <p className="card-text">
//                     <strong>Quantity:</strong> {item.quantity}<br />
//                     <strong>Description:</strong> {item.description}<br />
//                     <strong>Time Cooked:</strong> {item.dateCooked ? new Date(item.dateCooked).toLocaleString() : 'Not specified'}<br />
//                     <strong>Address:</strong> {item.address}
                    
//                   </p>
//                 </div>
//                 <button onClick={() => handleRequest(item.id)} className="btn btn-primary mt-2 align-self-end" disabled={requestedItems.some(requestedItem => requestedItem.id === item.id)}>
//                   {requestedItems.some(requestedItem => requestedItem.id === item.id) ? 'Requested' : <><FontAwesomeIcon icon={faUtensils} /> Request</>}
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="text-center">
//         <button onClick={clearLocalStorage} className="btn btn-danger mb-3">Clear Local Storage</button>
//       </div>
//     </div>
//   );
// }

// export default FoodListing;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { connect } from 'react-redux';
import { acceptRequest, declineRequest } from '../Redux/actions';

function FoodListing({ acceptRequest, declineRequest }) {
  const [foodItems, setFoodItems] = useState([]);
  const [requestedItems, setRequestedItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5282/api/FoodItem');
        setFoodItems(response.data);

        // Retrieve requested items from localStorage on initial load
        const storedRequestedItems = JSON.parse(localStorage.getItem('requestedItems')) || [];
        setRequestedItems(storedRequestedItems);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(foodItems);

  const handleRequest = (itemId) => {
    const selectedItem = foodItems.find(item => item.id === itemId);
    if (selectedItem) {
      
      const api = `http://localhost:5282/api/Email/DonorMail?email=${selectedItem.contactInfo}`
      axios.post(api);
      alert(`Request for ${selectedItem.itemName} sent!`);
      setRequestedItems([...requestedItems, selectedItem]);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <br></br>
      <h2 className="mt-5 mb-3 text-center">Available Donations</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-2 mb-5">
        {foodItems.map((item) => (
          <div key={item.id} className="col">
            <div className={`card h-100 shadow rounded p-3 ${requestedItems.some((requestedItem) => requestedItem.id === item.id) ? 'bg-light disabled' : ''}`}>
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">{item.itemName}</h5>
                  <p className="card-text">
                    <strong>Quantity:</strong> {item.quantity}<br />
                    <strong>Description:</strong> {item.description}<br />
                    <strong>Time Cooked:</strong> {item.dateCooked ? new Date(item.dateCooked).toLocaleString() : 'Not specified'}<br />
                    <strong>Address:</strong> {item.address}
                  </p>
                </div>
                <button
                  onClick={() => handleRequest(item.id)}
                  className="btn btn-primary mt-2 align-self-end"
                  disabled={requestedItems.some((requestedItem) => requestedItem.id === item.id)}
                >
                  {requestedItems.some((requestedItem) => requestedItem.id === item.id) ? 'Requested' : <><FontAwesomeIcon icon={faUtensils} /> Request</>}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button onClick={clearLocalStorage} className="btn btn-danger mb-3">Clear Local Storage</button>
      </div>
      <div className="text-center">
        <button onClick={clearLocalStorage} className="btn btn-danger mb-3">Clear Local Storage</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  requests: state.requests,
});

export default connect(mapStateToProps, { acceptRequest, declineRequest })(FoodListing);