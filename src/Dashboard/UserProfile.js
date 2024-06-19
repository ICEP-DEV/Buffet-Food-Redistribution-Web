//  import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faEnvelope, faPhone, faMapMarker, faLock, faUserCircle, faTrash, faEdit, faSave } from '@fortawesome/free-solid-svg-icons';

// const UserProfile = ({ userData, onEdit, onDelete }) => {
//   const [editMode, setEditMode] = useState(false);
//   const [editedUserData, setEditedUserData] = useState(userData);

//   const handleEditClick = () => {
//     setEditMode(true);
//   };

//   const handleSaveClick = () => {
//     setEditMode(false);
//     onEdit(editedUserData);
//   };

//   const handleDeleteClick = () => {
//     onDelete(); // Just call onDelete since it doesn't need any argument
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditedUserData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   return (
//     <div className="container py-3 mt-5" style={{ width: '40%', backgroundColor: '#f0f0f0', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
//       <div className="card shadow">
//         <div className="card-body">
//           <div className="d-flex align-items-center justify-content-center mb-4">
//             <FontAwesomeIcon icon={faUserCircle} size="6x" />
//             <h2 className="card-title ms-3">User Profile</h2>
//           </div>
//           {editMode ? (
//             <form>
//               <div className="mb-3">
//                 <label className="form-label"><FontAwesomeIcon icon={faUser} /> Name</label>
//                 <input type="text" className="form-control" name="name" value={editedUserData.name} onChange={handleChange} />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label"><FontAwesomeIcon icon={faEnvelope} /> Email</label>
//                 <input type="email" className="form-control" name="email" value={editedUserData.email} onChange={handleChange} />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label"><FontAwesomeIcon icon={faPhone} /> Telephone</label>
//                 <input type="tel" className="form-control" name="telephone" value={editedUserData.telephone} onChange={handleChange} />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label"><FontAwesomeIcon icon={faMapMarker} /> Address</label>
//                 <input type="text" className="form-control" name="address" value={editedUserData.address} onChange={handleChange} />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label"><FontAwesomeIcon icon={faLock} /> Password</label>
//                 <input type="password" className="form-control" name="password" value={editedUserData.password} onChange={handleChange} />
//               </div>
//               <div className="d-grid">
//                 <button type="button" className="btn btn-primary" onClick={handleSaveClick}><FontAwesomeIcon icon={faSave} /> Save</button>
//               </div>
//             </form>
//           ) : (
//             <div>
//               <p className="mb-3"><FontAwesomeIcon icon={faUserCircle} /><strong className="ms-2">Name:</strong> {userData.name}</p>
//               <p className="mb-3"><FontAwesomeIcon icon={faEnvelope} /><strong className="ms-2">Email:</strong> {userData.email}</p>
//               <p className="mb-3"><FontAwesomeIcon icon={faPhone} /><strong className="ms-2">Telephone:</strong> {userData.telephone}</p>
//               <p className="mb-3"><FontAwesomeIcon icon={faMapMarker} /><strong className="ms-2">Address:</strong> {userData.address}</p>
//               <div className="d-flex justify-content-between align-items-center mt-3">
//                 <button type="button" className="btn btn-primary" onClick={handleEditClick}><FontAwesomeIcon icon={faEdit} /> Edit</button>
//                 <button type="button" className="btn btn-danger" onClick={handleDeleteClick}><FontAwesomeIcon icon={faTrash} /> Delete</button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UserProfile;
// 

import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faMapMarker, faLock, faUserCircle, faTrash, faEdit, faSave } from '@fortawesome/free-solid-svg-icons';
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
=======
>>>>>>> 5487506f4e1b3dec433aeb3497534bb14593ddd7

const UserProfile = ({ userData, onEdit, onDelete }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedUserData, setEditedUserData] = useState(userData);

  const handleEditClick = () => {
    setEditMode(true);
  };
  const handleSaveClick = async () => {
    try {
      // Destructure 'password' from editedUserData to omit it from the request
      const { password, ...userDataWithoutPassword } = editedUserData;

      const token = localStorage.getItem('token'); // Retrieve token from localStorage

      if (!token) {
        throw new Error('No token available');
      }

      // Make PUT request to update user data, excluding 'password'
      const response = await axios.put("http://localhost:5282/api/Donor", userDataWithoutPassword, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      // Update user data locally with editedUserData upon successful edit
      onEdit(editedUserData);
      setEditMode(false);
      console.log(response);
    } catch (error) {
      console.error('Error updating user:', error);
      // Handle error (e.g., show error message)
    }
  };

  const handleDeleteClick = () => {
    onDelete(); // Just call onDelete since it doesn't need any argument
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }; 

  return (
<<<<<<< HEAD
    <div style={{ position: 'relative', minHeight: '94vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="container-fluid py-3 mt-5 mb-2" style={{ paddingTop: '0', margin: '50px' }}>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-5 col-sm-10">
            <div className="card shadow">
              <div className="card-body" style={{ backgroundColor: 'rgba(211,211,211,0.5)' }}>
                <div className="d-flex align-items-center justify-content-center mb-2" >
                  <FontAwesomeIcon icon={faUserCircle} size="6x" />
                  <h2 className="card-title ms-3 ">User Profile</h2>
                </div>
                <div className="card-body d-flex flex-column ">
                    <div className="row mb-4">
                      <div className="col-md-3 d-flex align-items-center">
                        <FontAwesomeIcon icon={faUser} className="me-2" />
                        <strong>Name:{userData.donorName}</strong>
                      </div>
                      <div className="col-md-9 d-flex align-items-center">
                        <p className="mb-0">{userData.name}</p>
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col-md-3 d-flex align-items-center ">
                        <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                        <strong>Email:{userData.donorEmail}</strong>
                      </div>
                      <div className="col-md-9 d-flex align-items-center">
                        <p className="mb-0"></p>
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col-md-3 d-flex align-items-center">
                        <FontAwesomeIcon icon={faPhone} className="me-2" />
                        <strong>Telephone:{userData.donorPhoneNum}</strong>
                      </div>
                      <div className="col-md-9 d-flex align-items-center">
                        <p className="mb-0">{userData.telephone}</p>
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col-md-3 d-flex align-items-center">
                        <FontAwesomeIcon icon={faMapMarker} className="me-2" />
                        <strong>Address:{userData.donorAddress}</strong>
                      </div>
                      <div className="col-md-9 d-flex align-items-center">
                        <p className="mb-0">{userData.address}</p>
                      </div>
                    </div>
                  </div>

                <div className="d-flex justify-content-between align-items-center mt-3">
                  {!editMode ? (
                    <button type="button" className="btn btn-primary" onClick={handleEditClick}><FontAwesomeIcon icon={faEdit} /> Edit</button>
                  ) : (
                    <form>
                      <div className="mb-3">
                        <label className="form-label"><FontAwesomeIcon icon={faUser} /> Name</label>
                        <input type="text" className="form-control" name="name" value={editedUserData.donorName} onChange={handleChange} />
                      </div>
                      <div className="mb-3">
                        <label className="form-label"><FontAwesomeIcon icon={faEnvelope} /> Email</label>
                        <input type="email" className="form-control" name="email" value={editedUserData.donorEmail} onChange={handleChange} />
                      </div>
                      <div className="mb-3">
                        <label className="form-label"><FontAwesomeIcon icon={faPhone} /> Telephone</label>
                        <input type="tel" className="form-control" name="telephone" value={editedUserData.donorPhoneNum} onChange={handleChange} />
                      </div>
                      <div className="mb-3">
                        <label className="form-label"><FontAwesomeIcon icon={faMapMarker} /> Address</label>
                        <input type="text" className="form-control" name="address" value={editedUserData.donorAddress} onChange={handleChange} />
                      </div>
                      
                      <div className="d-grid">
                        <button type="button" className="btn btn-primary" onClick={handleSaveClick}><FontAwesomeIcon icon={faSave} /> Save</button>
                      </div>
                    </form>
                  )}
                  <button type="button" className="btn btn-danger" onClick={handleDeleteClick}><FontAwesomeIcon icon={faTrash} /> Delete</button>
                </div>
=======
    <div className="container py-3 mt-5" style={{ width: '70%', backgroundColor: '#f0f0f0', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
      <div className="card shadow">
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-center mb-4">
            <FontAwesomeIcon icon={faUserCircle} size="6x" />
            <h2 className="card-title ms-3">User Profile</h2>
          </div>
          {!editMode ? (
            <div>
              <div className="mb-4 d-flex align-items-center">
                <FontAwesomeIcon icon={faUser} className="me-2" />
                <strong>Name:</strong>
                <p className="mb-0 ms-5">{userData.name}</p>
              </div>
              <div className="mb-4 d-flex align-items-center">
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                <strong>Email:</strong>
                <p className="mb-0 ms-5">{userData.email}</p>
              </div>
              <div className="mb-4 d-flex align-items-center">
                <FontAwesomeIcon icon={faPhone} className="me-2" />
                <strong>Telephone:</strong>
                <p className="mb-0 ms-3">{userData.telephone}</p>
              </div>
              <div className="mb-4 d-flex align-items-center">
                <FontAwesomeIcon icon={faMapMarker} className="me-2" />
                <strong>Address:</strong>
                <p className="mb-0 ms-5">{userData.address}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <button type="button" className="btn btn-primary" onClick={handleEditClick}><FontAwesomeIcon icon={faEdit} /> Edit</button>
                <button type="button" className="btn btn-danger" onClick={handleDeleteClick}><FontAwesomeIcon icon={faTrash} /> Delete</button>
>>>>>>> 5487506f4e1b3dec433aeb3497534bb14593ddd7
              </div>
            </div>
          ) : (
            <form>
              <div className="mb-3">
                <label className="form-label"><FontAwesomeIcon icon={faUser} /> Name</label>
                <input type="text" className="form-control" name="name" value={editedUserData.name} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label className="form-label"><FontAwesomeIcon icon={faEnvelope} /> Email</label>
                <input type="email" className="form-control" name="email" value={editedUserData.email} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label className="form-label"><FontAwesomeIcon icon={faPhone} /> Telephone</label>
                <input type="tel" className="form-control" name="telephone" value={editedUserData.telephone} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label className="form-label"><FontAwesomeIcon icon={faMapMarker} /> Address</label>
                <input type="text" className="form-control" name="address" value={editedUserData.address} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label className="form-label"><FontAwesomeIcon icon={faLock} /> Password</label>
                <input type="password" className="form-control" name="password" value={editedUserData.password} onChange={handleChange} />
              </div>
              <div className="d-grid">
                <button type="button" className="btn btn-primary" onClick={handleSaveClick}><FontAwesomeIcon icon={faSave} /> Save</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
