// import React, { useState, useEffect } from 'react';

// const RequestedItemsHistory = () => {
//   const [requestedItems, setRequestedItems] = useState([]);

//   useEffect(() => {
//     // Fetch requested items from localStorage on component mount
//     const storedRequestedItems = JSON.parse(localStorage.getItem('requestedItems')) || [];
//     setRequestedItems(storedRequestedItems);
//   }, []);

//   const formatCookedTime = (dateCooked) => {
//     if (!dateCooked) return 'Not specified';

//     const dateObject = new Date(dateCooked);
//     if (isNaN(dateObject.getTime())) return 'Invalid date';

//     return dateObject.toLocaleString();
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-5 pt-4">Request History</h2>
//       {requestedItems.length === 0 ? (
//         <p className="text-center">You have not requested any items yet.</p>
//       ) : (
//         <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
//           {requestedItems.map((item, index) => (
//             <div key={index} className="col mb-3">
//               <div className="card h-100">
//                 <div className="card-body">
//                   <h5 className="card-title">{item.itemName}</h5>
//                   <p className="card-text">
//                     <strong>Quantity:</strong> {item.quantity}<br />
//                     <strong>Description:</strong> {item.description}<br />
//                     <strong>Time Cooked:</strong> {formatCookedTime(item.dateCooked)}<br />
//                     <strong>Address:</strong> {item.address}<br />
//                     <strong>Requested Time:</strong> {new Date(item.requestTime).toLocaleString()}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default RequestedItemsHistory;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const RequestedItemsHistory = () => {
//   const [requestedItems, setRequestedItems] = useState([]);
//   const [requestStatuses, setRequestStatuses] = useState({});

//   useEffect(() => {
//     // Fetch requested items from localStorage on component mount
//     const storedRequestedItems = JSON.parse(localStorage.getItem('requestedItems')) || [];
//     setRequestedItems(storedRequestedItems);

//     // Fetch request statuses from the backend
//     const fetchRequestStatuses = async () => {
//       try {
//         const response = await axios.get('http://localhost:5282/api/Request');
//         const statusData = response.data;
//         console.log(statusData);
//         // Create a map of donationId to status
//         const statusMap = statusData.reduce((acc, request) => {
//           acc[request.donationId] = request.status;
//           return acc;
//         }, {});

//         setRequestStatuses(statusMap);
//       } catch (error) {
//         console.error('Error fetching request statuses:', error);
//       }
//     };

//     fetchRequestStatuses();
//   }, []);

//   const getRequestStatus = (donationId) => {
//     return requestStatuses[donationId] || 'Unknown';
//   };

//   const formatCookedTime = (dateCooked) => {
//     if (!dateCooked) return 'Not specified';

//     const dateObject = new Date(dateCooked);
//     if (isNaN(dateObject.getTime())) return 'Invalid date';

//     return dateObject.toLocaleString();
//   };

//   return (
//     <div className="container mt-5 w-100">
//       <h2 className="text-center mb-5 pt-4">Request History</h2>
//       {requestedItems.length === 0 ? (
//         <p className="text-center">You have not requested any items yet.</p>
//       ) : (
//         <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 ">
//           {requestedItems.map((item, index) => (
//             <div key={index} className="col mb-3">
//               <div className="card h-100 "style={{ width: '30rem' }}>
//                 <div className="card-body">
//                   <h5 className="card-title text-center">{item.itemName}</h5>
//                   {/* <p className="card-text">
//                     <strong>Quantity:</strong> {item.quantity}<br />
//                     <strong>Description:</strong> {item.description}<br />
//                     <strong>Time Cooked:</strong> {formatCookedTime(item.dateCooked)}<br />
//                     <strong>Address:</strong> {item.address}<br />
//                     <strong>Requested Time:</strong> {new Date(item.requestTime).toLocaleString()}<br />
//                     <strong>Status:</strong> {getRequestStatus(item.id)}
//                   </p> */}


//                   <div className="table-responsive">
//                     <table className="table table-bordered">
//                       <thead>
//                         <tr>
//                           <th scope="col">Quantity</th>
//                           <td>{item.quantity}</td>
//                         </tr>
//                         <tr>
//                           <th scope="col">Description</th>
//                           <td>{item.description}</td>
//                         </tr>
//                         <tr>
//                           <th scope="col">Time Cooked</th>
//                           <td>{item.dateCooked ? new Date(item.dateCooked).toLocaleString() : 'Not specified'}</td>
//                         </tr>
//                         <tr>
//                           <th scope="col">Address</th>
//                           <td>{item.address}</td>
//                         </tr>
//                         <tr>
//                           <th scope="col">Status</th>
//                           <td>{getRequestStatus(item.id)}</td>
//                         </tr>
//                       </thead>
//                     </table>
//                   </div>

                  
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default RequestedItemsHistory;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RequestedItemsHistory = () => {
  const [requestedItems, setRequestedItems] = useState([]);
  const [requestStatuses, setRequestStatuses] = useState({});

  useEffect(() => {
    // Fetch requested items from localStorage on component mount
    const storedRequestedItems = JSON.parse(localStorage.getItem('requestedItems')) || [];
    setRequestedItems(storedRequestedItems);

    // Fetch request statuses from the backend
    const fetchRequestStatuses = async () => {
      try {
        const response = await axios.get('http://localhost:5282/api/Request');
        const statusData = response.data;
        console.log(statusData);
        // Create a map of donationId to status
        const statusMap = statusData.reduce((acc, request) => {
          acc[request.donationId] = request.status;
          return acc;
        }, {});

        setRequestStatuses(statusMap);
      } catch (error) {
        console.error('Error fetching request statuses:', error);
      }
    };

    fetchRequestStatuses();
  }, []);

  const getRequestStatus = (donationId) => {
    return requestStatuses[donationId] || 'Unknown';
  };

  const formatCookedTime = (dateCooked) => {
    if (!dateCooked) return 'Not specified';

    const dateObject = new Date(dateCooked);
    if (isNaN(dateObject.getTime())) return 'Invalid date';

    return dateObject.toLocaleString();
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5 pt-4">Request History</h2>
      {requestedItems.length === 0 ? (
        <p className="text-center">You have not requested any items yet.</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {requestedItems.map((item, index) => (
            <div key={index} className="col mb-4"> {/* Add bottom margin here */}
              <div className="card h-100" style={{ width: '100%' }}>
                <div className="card-body">
                  <h5 className="card-title text-center">{item.itemName}</h5>
                  
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Quantity</th>
                          <td>{item.quantity}</td>
                        </tr>
                        <tr>
                          <th scope="col">Description</th>
                          <td>{item.description}</td>
                        </tr>
                        <tr>
                          <th scope="col">Time Cooked</th>
                          <td>{item.dateCooked ? new Date(item.dateCooked).toLocaleString() : 'Not specified'}</td>
                        </tr>
                        <tr>
                          <th scope="col">Address</th>
                          <td>{item.address}</td>
                        </tr>
                        <tr>
                          <th scope="col">Status</th>
                          <td>{getRequestStatus(item.id)}</td>
                        </tr>
                      </thead>
                    </table>
                  </div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RequestedItemsHistory;
