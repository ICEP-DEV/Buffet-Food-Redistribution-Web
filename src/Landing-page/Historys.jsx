import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css';

// Define formatTime function outside of Menu component
const formatTime = (time) => {
  const hours = String(time.getHours()).padStart(2, '0');
  const minutes = String(time.getMinutes()).padStart(2, '0');
  const seconds = String(time.getSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
};

function History() {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    // Retrieve food items from local storage
    const storedFoodItems = JSON.parse(localStorage.getItem('foodItems')) || [];
    setFoodItems(storedFoodItems);
  }, []);

  // Function to remove a food item from the menu
  const removeFoodItem = (index) => {
    setFoodItems((prevItems) => {
      const newItems = [...prevItems];
      newItems.splice(index, 1); // Remove the item at the specified index
      localStorage.setItem('foodItems', JSON.stringify(newItems)); // Update local storage
      toast.success('Food item removed successfully'); // Display success notification
      return newItems;
    });
  };

  // Function to render each food item
  const renderFoodItems = () => {
    return foodItems.map((item, index) => {
      
      return (
        
        <li key={index} className="list-group-item d-flex justify-content-between align-items-center mt-5">
          {item.name} , {item.quantity} , {item.description} , {item.timeCooked} 
          <button className="btn btn-danger btn-sm" onClick={() => removeFoodItem(index)}>Remove</button>
        </li>
      );
    });
  };

  return (
    
    <div className="container mt-5">

      <ul className="list-group">{renderFoodItems()}</ul>
      <Link to="/foodform" className="btn btn-primary mt-3">Add More</Link>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
}

export default History;
