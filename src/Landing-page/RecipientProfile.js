// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserCircle, faUser, faEnvelope, faPhone, faMapMarker, faEdit, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';

// const RecipientProfile = () => {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editMode, setEditMode] = useState(false);
//   const [editedUserData, setEditedUserData] = useState({});

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         setLoading(false);
//         setError('No token available');
//         return;
//       }

//       try {
//         const response = await axios.get("http://localhost:5282/api/Recipient/Profile", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setUserData(response.data);
//         setEditedUserData(response.data); // Initialize editedUserData with userData
//       } catch (err) {
//         setError(err.message || 'Error fetching user data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserProfile();
//   }, []);

//   const handleEditClick = () => {
//     setEditMode(true);
//   };

//   const handleSaveClick = async () => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       setError('No token available');
//       return;
//     }

//     try {
//       const response = await axios.put("http://localhost:5282/api/Recipient/Profile", editedUserData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setUserData(response.data); // Update user data with response
//       setEditMode(false);
//     } catch (err) {
//       setError(err.message || 'Error updating user data');
//     }
//   };

//   const handleDeleteClick = async () => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       setError('No token available');
//       return;
//     }

//     try {
//       await axios.delete("http://localhost:5282/api/Recipient/Profile", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setUserData(null);
//     } catch (err) {
//       setError(err.message || 'Error deleting user');
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditedUserData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div style={{ position: 'relative', minHeight: '94vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//       <div className="container py-4" style={{ maxWidth: '800px' }}>
//         <div className="card shadow-sm">
//           <div className="card-body">
//             <div className="d-flex align-items-center justify-content-center mb-4">
//               <FontAwesomeIcon icon={faUserCircle} size="5x" />
//               <h2 className="card-title ms-3">User Profile</h2>
//             </div>
//             <div className="d-flex flex-column">
//               {/* <div className="mb-3">
//                 <div className="d-flex align-items-center mb-2">
//                   <FontAwesomeIcon icon={faUser} className="me-2" />
//                   <strong>Name:</strong>
//                 </div>
//                 {!editMode ? (
//                   <p>{userData.recipientName}</p>
//                 ) : (
//                   <input type="text" className="form-control" name="donorName" value={editedUserData.recipientName || ''} onChange={handleChange} />
//                 )}
//               </div>
//               <div className="mb-3">
//                 <div className="d-flex align-items-center mb-2">
//                   <FontAwesomeIcon icon={faEnvelope} className="me-2" />
//                   <strong>Email:</strong>
//                 </div>
//                 {!editMode ? (
//                   <p>{userData.recipientEmail}</p>
//                 ) : (
//                   <input type="email" className="form-control" name="donorEmail" value={editedUserData.recipientEmail || ''} onChange={handleChange} />
//                 )}
//               </div>
//               <div className="mb-3">
//                 <div className="d-flex align-items-center mb-2">
//                   <FontAwesomeIcon icon={faPhone} className="me-2" />
//                   <strong>Telephone:</strong>
//                 </div>
//                 {!editMode ? (
//                   <p>{userData.recipientPhoneNum}</p>
//                 ) : (
//                   <input type="tel" className="form-control" name="donorPhoneNum" value={editedUserData.recipientPhoneNum || ''} onChange={handleChange} />
//                 )}
//               </div>
//               <div className="mb-3">
//                 <div className="d-flex align-items-center mb-2">
//                   <FontAwesomeIcon icon={faMapMarker} className="me-2" />
//                   <strong>Address:</strong>
//                 </div>
//                 {!editMode ? (
//                   <p>{userData.recipientAddress}</p>
//                 ) : (
//                   <input type="text" className="form-control" name="donorAddress" value={editedUserData.recipientAddress || ''} onChange={handleChange} />
//                 )}
//               </div> */}
//             </div>


//             <table class="table table-striped">
//                 <thead>
//                   <tr>
//                     <th scope="col">
//                           <div className="d-flex align-items-center mb-2">
//                         <FontAwesomeIcon icon={faUser} className="me-2" />
//                         <strong>Name:</strong>
//                 </div>
//                     </th>
//                     <th>
//                       <div className="d-flex align-items-center mb-2">
//                         <FontAwesomeIcon icon={faEnvelope} className="me-2" />
//                         <strong>Email:</strong>
//                       </div>
//                     </th>
//                     <th>
//                             <div className="d-flex align-items-center mb-2">
//                           <FontAwesomeIcon icon={faPhone} className="me-2" />
//                           <strong>Telephone:</strong>
//                         </div>
//                     </th>

//                     <th scope="col">

//                               <div className="d-flex align-items-center mb-2">
//                             <FontAwesomeIcon icon={faMapMarker} className="me-2" />
//                             <strong>Address:</strong>
//                           </div>
//                     </th>

//                   </tr>
//                 </thead>

//                 <tbody>
//                   <tr>
//                     <td>
//                     {!editMode ? (
//                       <p>{userData.recipientName}</p>
//                     ) : (
//                       <input type="text" className="form-control" name="donorName" value={editedUserData.recipientName || ''} onChange={handleChange} />
//                     )}
//                     </td>

//                     <td>
//                     {!editMode ? (
//                         <p>{userData.recipientEmail}</p>
//                       ) : (
//                         <input type="email" className="form-control" name="donorEmail" value={editedUserData.recipientEmail || ''} onChange={handleChange} />
//                       )}
//                     </td>

//                     <td>
//                         {!editMode ? (
//                             <p>{userData.recipientPhoneNum}</p>
//                           ) : (
//                             <input type="tel" className="form-control" name="donorPhoneNum" value={editedUserData.recipientPhoneNum || ''} onChange={handleChange} />
//                           )}

//                     </td>
//                     <td>
//                             {!editMode ? (
//                           <p>{userData.recipientAddress}</p>
//                         ) : (
//                           <input type="text" className="form-control" name="donorAddress" value={editedUserData.recipientAddress || ''} onChange={handleChange} />
//                         )}
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
                        


//             <div className="d-flex justify-content-between align-items-center mt-4">
//               {!editMode ? (
//                 <button type="button" className="btn btn-primary" onClick={handleEditClick}><FontAwesomeIcon icon={faEdit} /> Edit</button>
//               ) : (
//                 <div>
//                   <button type="button" className="btn btn-success me-2" onClick={handleSaveClick}><FontAwesomeIcon icon={faSave} /> Save</button>
//                   <button type="button" className="btn btn-secondary" onClick={() => setEditMode(false)}>Cancel</button>
//                 </div>
//               )}
//               <button type="button" className="btn btn-danger" onClick={handleDeleteClick}><FontAwesomeIcon icon={faTrash} /> Delete</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RecipientProfile;

// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserCircle, faUser, faEnvelope, faPhone, faMapMarker, faEdit, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';

// const RecipientProfile = () => {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editMode, setEditMode] = useState(false);
//   const [editedUserData, setEditedUserData] = useState({});

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         setLoading(false);
//         setError('No token available');
//         return;
//       }

//       try {
//         const response = await axios.get("http://localhost:5282/api/Recipient/Profile", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setUserData(response.data);
//         setEditedUserData(response.data); // Initialize editedUserData with userData
//         console.log(response.data)
//       } catch (err) {
//         setError(err.message || 'Error fetching user data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserProfile();
//   }, []);

//   const handleEditClick = () => {
//     setEditMode(true);
//   };

//   const handleSaveClick = async () => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       setError('No token available');
//       return;
//     }

//     try {
//       const response = await axios.put("http://localhost:5282/api/Recipient/Profile", editedUserData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setUserData(response.data); // Update user data with response
//       setEditMode(false);
//     } catch (err) {
//       setError(err.message || 'Error updating user data');
//     }
//   };

//   const handleDeleteClick = async () => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       setError('No token available');
//       return;
//     }

//     try {
//       await axios.delete("http://localhost:5282/api/Recipient/Profile", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setUserData(null);
//     } catch (err) {
//       setError(err.message || 'Error deleting user');
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditedUserData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div style={{ position: 'relative', minHeight: '94vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//       <div className="container py-4" style={{ maxWidth: '800px' }}>
//         <div className="card shadow-sm">
//           <div className="card-body">
//             <div className="d-flex align-items-center justify-content-center mb-4">
//               <FontAwesomeIcon icon={faUserCircle} size="5x" />
//               <h2 className="card-title ms-3">User Profile</h2>
//             </div>
//             <div className="d-flex flex-column">

//               <div className="table-responsive">
//                 <table className="table table-striped">
//                   <thead>
//                     <tr>
//                       <th>
//                         <div className="d-flex align-items-center mb-2">
//                           <FontAwesomeIcon icon={faUser} className="me-2" />
//                           <strong>Name:</strong>
//                         </div>
//                       </th>
//                       <th>
//                         <div className="d-flex align-items-center mb-2">
//                           <FontAwesomeIcon icon={faEnvelope} className="me-2" />
//                           <strong>Email:</strong>
//                         </div>
//                       </th>
//                       <th>
//                         <div className="d-flex align-items-center mb-2">
//                           <FontAwesomeIcon icon={faPhone} className="me-2" />
//                           <strong>Telephone:</strong>
//                         </div>
//                       </th>
//                       <th>
//                         <div className="d-flex align-items-center mb-2">
//                           <FontAwesomeIcon icon={faMapMarker} className="me-2" />
//                           <strong>Address:</strong>
//                         </div>
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td>
//                         {!editMode ? (
//                           <p>{userData?.recipientName}</p> // Use optional chaining in case userData is null
//                         ) : (
//                           <input type="text" className="form-control" name="recipientName" value={editedUserData.recipientName || ''} onChange={handleChange} />
//                         )}
//                       </td>
//                       <td>
//                         {!editMode ? (
//                           <p>{userData?.recipientEmail}</p>
//                         ) : (
//                           <input type="email" className="form-control" name="recipientEmail" value={editedUserData.recipientEmail || ''} onChange={handleChange} />
//                         )}
//                       </td>
//                       <td>
//                         {!editMode ? (
//                           <p>{userData?.recipientPhoneNum}</p>
//                         ) : (
//                           <input type="tel" className="form-control" name="recipientPhoneNum" value={editedUserData.recipientPhoneNum || ''} onChange={handleChange} />
//                         )}
//                       </td>
//                       <td>
//                         {!editMode ? (
//                           <p>{userData?.recipientAddress}</p>
//                         ) : (
//                           <input type="text" className="form-control" name="recipientAddress" value={editedUserData.recipientAddress || ''} onChange={handleChange} />
//                         )}
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>

//               <div className="d-flex justify-content-between align-items-center mt-4">
//                 {!editMode ? (
//                   <button type="button" className="btn btn-primary" onClick={handleEditClick}><FontAwesomeIcon icon={faEdit} /> Edit</button>
//                 ) : (
//                   <div>
//                     <button type="button" className="btn btn-success me-2" onClick={handleSaveClick}><FontAwesomeIcon icon={faSave} /> Save</button>
//                     <button type="button" className="btn btn-secondary" onClick={() => setEditMode(false)}>Cancel</button>
//                   </div>
//                 )}
//                 <button type="button" className="btn btn-danger" onClick={handleDeleteClick}><FontAwesomeIcon icon={faTrash} /> Delete</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RecipientProfile;



import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faUser, faEnvelope, faPhone, faMapMarker, faEdit, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';

const RecipientProfile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedUserData, setEditedUserData] = useState({});

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = sessionStorage.getItem('token');
      if (!token) {
        setLoading(false);
        setError('No token available');
        return;
      }

      try {
        const response = await axios.get("http://localhost:5282/api/Recipient/Profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data)
        setUserData(response.data);
        setEditedUserData(response.data); // Initialize editedUserData with userData
      } catch (err) {
        setError(err.message || 'Error fetching user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = async () => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      setError('No token available');
      return;
    }

    try {
      const response = await axios.put("http://localhost:5282/api/Recipient", editedUserData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      setUserData(response.data); // Update user data with response
      setEditMode(false);
    } catch (err) {
      setError(err.message || 'Error updating user data');
    }
  };

  const handleDeleteClick = async () => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      setError('No token available');
      return;
    }

    try {
      await axios.delete(`http://localhost:5282/api/Recipient/${userData.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserData(null);
    } catch (err) {
      setError(err.message || 'Error deleting user');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ position: 'relative', minHeight: '94vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="container py-4" style={{ maxWidth: '800px' }}>
        <div className="card shadow-sm">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-center mb-4">
              <FontAwesomeIcon icon={faUserCircle} size="5x" />
              <h2 className="card-title ms-3">User Profile</h2>
            </div>
            <div className="d-flex flex-column">

              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>
                        <div className="d-flex align-items-center mb-2">
                          <FontAwesomeIcon icon={faUser} className="me-2" />
                          <strong>Name:</strong>
                        </div>
                      </th>
                      <th>
                        <div className="d-flex align-items-center mb-2">
                          <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                          <strong>Email:</strong>
                        </div>
                      </th>
                      <th>
                        <div className="d-flex align-items-center mb-2">
                          <FontAwesomeIcon icon={faPhone} className="me-2" />
                          <strong>Telephone:</strong>
                        </div>
                      </th>
                      <th>
                        <div className="d-flex align-items-center mb-2">
                          <FontAwesomeIcon icon={faMapMarker} className="me-2" />
                          <strong>Address:</strong>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        {!editMode ? (
                          <p>{userData.recipientName}</p>
                        ) : (
                          <input type="text" className="form-control" name="recipientName" value={editedUserData.recipientName || ''} onChange={handleChange} />
                        )}
                      </td>
                      <td>
                        {!editMode ? (
                          <p>{userData.recipientEmail}</p>
                        ) : (
                          <input type="email" className="form-control" name="recipientEmail" value={editedUserData.recipientEmail || ''} onChange={handleChange} />
                        )}
                      </td>
                      <td>
                        {!editMode ? (
                          <p>{userData.recipientPhoneNum}</p>
                        ) : (
                          <input type="tel" className="form-control" name="recipientPhoneNum" value={editedUserData.recipientPhoneNum || ''} onChange={handleChange} />
                        )}
                      </td>
                      <td>
                        {!editMode ? (
                          <p>{userData.recipientAddress}</p>
                        ) : (
                          <input type="text" className="form-control" name="recipientAddress" value={editedUserData.recipientAddress || ''} onChange={handleChange} />
                        )}
                      </td>
                     </tr>
                  </tbody>
                </table>
              </div>

              <div className="d-flex justify-content-between align-items-center mt-4">
                {!editMode ? (
                  <button type="button" className="btn btn-primary" onClick={handleEditClick}><FontAwesomeIcon icon={faEdit} /> Edit</button>
                ) : (
                  <div>
                    <button type="button" className="btn btn-success me-2" onClick={handleSaveClick}><FontAwesomeIcon icon={faSave} /> Save</button>
                    <button type="button" className="btn btn-secondary" onClick={() => setEditMode(false)}>Cancel</button>
                  </div>
                )}
                <button type="button" className="btn btn-danger" onClick={handleDeleteClick}><FontAwesomeIcon icon={faTrash} /> Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipientProfile;