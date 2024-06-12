import React, { useState } from 'react';
import UserProfile from './UserProfile';

const ProfileApp = () => {
  // Initialize user data directly
  const initialUserData = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    telephone: "123-456-7890",
    address: "123 Main St",
    password: "password123"
  };

  const [user, setUser] = useState(initialUserData);

  const handleEdit = (editedUserData) => {
    setUser(editedUserData); // Update user data
  };

  const handleDelete = () => {
    setUser(null); // Remove user data from state
  };
  return (
    <div>
      {user ? (
        <UserProfile userData={user} onEdit={handleEdit} onDelete={handleDelete} /> // Pass onDelete function
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
}

export default ProfileApp;
