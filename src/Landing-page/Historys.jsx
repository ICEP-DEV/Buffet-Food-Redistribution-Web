import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'; // Import Axios library for making HTTP requests

function History() {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        // Make a GET request to your API endpoint to fetch food items
        const response = await axios.get('http://localhost:5282/api/FoodItem'); // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint URL
        // Check if the response is successful
        if (response.status === 200) {
          // Extract the food items from the response data
          const fetchedFoodItems = response.data;
          // Update the state with the fetched food items
          setFoodItems(fetchedFoodItems);
          // Update local storage with the fetched food items
          localStorage.setItem('foodItems', JSON.stringify(fetchedFoodItems));
        } else {
          // Handle error if the response status is not 200
          console.error('Failed to fetch food items');
        }
      } catch (error) {
        // Handle error if the request fails
        console.error('Error fetching food items:', error);
      }
    };

    // Call the fetchFoodItems function when the component mounts
    fetchFoodItems();
  }, []); // Empty dependency array ensures that the effect runs only once after the component mounts

  // Function to format time to hh:mm
  /*const formatTime = (time) => {
    const date = new Date(time);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };*/

  function formatTime(dateTimeString) {
    if (!dateTimeString) return ""; // Return empty string if dateTimeString is undefined or null

    // Split the dateTimeString into date and time components
    var dateTimeComponents = dateTimeString.split(' ');

    // Check if the dateTimeComponents array has both date and time components
    if (dateTimeComponents.length !== 2) return "Invalid date time format";

    var  timeString = dateTimeComponents[1];

    // Extract the time components
    var [hours, minutes, seconds] = timeString.split(':');

    // Determine AM or PM
    var meridiem = hours >= 12 ? 'PM' : 'AM';

    // Adjust hours to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)

    // Format hours, minutes, and seconds with leading zeros if needed
    var formattedHours = (hours < 10 ? '0' : '') + hours;
    var formattedMinutes = (minutes < 10 ? '0' : '') + minutes;
    var formattedSeconds = (seconds < 10 ? '0' : '') + seconds;

    // Combine all components into a formatted time string
    var formattedTime = formattedHours + ':' + formattedMinutes + ':' + formattedSeconds + ' ' + meridiem;

    return formattedTime;
}

// Example usage
var timeString = "06:57:10";
console.log(formatTime(timeString));


  // Function to format date
  const formatDate = (date) => {
    const d = new Date(date);
    const day = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  };

  

  // Function to handle removal of a food item
  const handleRemove = (index) => {
    const updatedFoodItems = [...foodItems];
    updatedFoodItems.splice(index, 1);
    setFoodItems(updatedFoodItems);
    localStorage.setItem('foodItems', JSON.stringify(updatedFoodItems));
    toast.success('Donation removed successfully!');
  };

  // Function to render each food item
  const renderFoodItems = () => {
    
    return (
      <div>
        <h2>FOOD LISTING</h2>
        {foodItems.map((item, index) => (
          <div key={index}>
            <li className="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-center mt-5">
              <div className="flex-grow-1">
                <div>{item.itemName}, {item.quantity}, {item.description}</div>
                <div>Date cooked: {formatDate(item.dateCooked)}</div>
                <div>{item.address}</div>
              </div>
              {item.image && (
                <div className="mt-3 mt-md-0 ml-md-3">
                  <img src={item.image} alt="Food" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
              )}
              <button className="btn btn-danger mt-3 mt-md-0 ml-md-3" onClick={() => handleRemove(index)}>Remove</button>
            </li>
          </div>
        ))}
      </div>
    );
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
