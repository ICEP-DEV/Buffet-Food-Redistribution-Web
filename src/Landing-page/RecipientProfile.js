// src/RecipientProfile.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';




const RecipientProfile = ({ recipient }) => {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h4>{recipient.name}</h4>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-4">
              <img 
                src={recipient.profilePicture} 
                alt="Profile" 
                className="img-fluid rounded-circle"
              />
            </div>
            <div className="col-md-8">
              <h5>Details</h5>
              <ul className="list-unstyled">
                <li><strong>Email:</strong> {recipient.email}</li>
                <li><strong>Phone:</strong> {recipient.phone}</li>
                <li><strong>Address:</strong> {recipient.address}</li>
                <li><strong>Bio:</strong> {recipient.bio}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipientProfile;
