import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ListGroup, Button } from 'react-bootstrap';

function History() {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    // Retrieve food items from local storage
    const storedFoodItems = JSON.parse(localStorage.getItem('foodItems')) || [];
    // Sort items by addedAt in ascending order (reverse order)
    const sortedFoodItems = storedFoodItems.sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt));
    setFoodItems(sortedFoodItems);
  }, []);

  // Function to format time to hh:mm
  const formatTime = (time) => {
    const date = new Date(time);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  // Function to format date
  const formatDate = (date) => {
    const d = new Date(date);
    const day = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  };

  // Function to handle removal of a donation
  const handleRemove = (index) => {
    const updatedFoodItems = [...foodItems];
    updatedFoodItems.splice(index, 1);
    setFoodItems(updatedFoodItems);
    localStorage.setItem('foodItems', JSON.stringify(updatedFoodItems));
    toast.success('Donation removed successfully!');
  };

  return (
    <div className="container-fluid d-flex flex-column align-items-center bg-light" style={{ minHeight: '100vh', marginTop: '50px', paddingBottom: '50px', overflowY: 'auto' }}>
      <h1 className="text-center mt-5 mb-4">Record</h1>
        
      <ListGroup className="w-100 mb-5" style={{ maxWidth: '800px', maxHeight: '600px', overflowY: 'auto' }}>
        {foodItems.map((item, index) => (
          <ListGroup.Item key={index} className="border rounded d-flex flex-column flex-md-row justify-content-between align-items-center mt-3 p-3 bg-secondary text-light">
            <div className="flex-grow-1">
              <div>{item.name} - {item.quantity} - {item.description}</div>
              <div>Time cooked: {formatTime(item.timeCooked)}, {formatDate(item.timeCooked)}</div>
              <div>Address: {item.address}</div>
              <div>Added at: {formatTime(item.addedAt)}, {formatDate(item.addedAt)}</div>
            </div>
            <Button variant="danger" className="mt-3 mt-md-0 ml-md-3 " onClick={() => handleRemove(index)}>Remove</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
}

export default History;
