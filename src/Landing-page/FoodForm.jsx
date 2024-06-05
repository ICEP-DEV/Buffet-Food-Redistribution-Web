import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

function FoodForm({ addFoodItem }) {
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [timeCooked, setTimeCooked] = useState('');
  //const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentTime = new Date();
    const timeDifference = Math.abs(currentTime - new Date(timeCooked)) / 36e5; // Calculate the time difference in hours

    if (
      itemName.trim() &&
      itemQuantity.trim() &&
      itemQuantity >= 0 &&
      itemDescription.trim() &&
      (typeof timeCooked === 'string' ? timeCooked.trim() : timeCooked) &&
      timeCooked &&
      timeDifference < 12 // Check if time cooked is less than 12 hours ago
    ) {
      try {
        const apiUrl = `http://localhost:5282/api/FoodItem/AddItem`;
        const data = {
          ItemName: itemName,
          Quantity: itemQuantity,
          Description: itemDescription,
          DateCooked: timeCooked
          
        }
        const response = await axios.post(apiUrl,data);

        if (response.status === 200) {
          setItemName('');
          setItemQuantity('');
          setItemDescription('');
          setTimeCooked('');
          toast.success('Food item added successfully!');
        } else {
          toast.error('Error adding food item. Please try again later.');
        }
      } catch (error) {
        console.error('Error:', error);
        toast.error('Network error. Please check your internet connection.');
      }
    } else if (timeDifference >= 12) {
      toast.error('Unfortunately, you cannot donate food that was prepared 12 or more hours ago!');
    } else {
      toast.error('Please fill out all fields correctly.');
    }


  };

      // Save updated food items to local storage
      //const updatedFoodItems = JSON.parse(localStorage.getItem('foodItems')) || [];
      //updatedFoodItems.push({ name: itemName, quantity: itemQuantity, description: itemDescription, timeCooked: timeCooked });
      //localStorage.setItem('foodItems', JSON.stringify(updatedFoodItems));
      
      // Display success notification
      //toast.success('You have successfully donated. Thank you!');

          //  navigate('/menu');
    
  
  

  return (
    
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: 'rgba(211,211,211,0.5)', padding: '20px' }}>
      <div style={{ maxWidth: '600px', width: '100%' }}>
        <div className="text-center" style={{ backgroundColor: 'grey', padding: '20px', borderRadius: '10px' }}>
          <h2>Donations</h2>
          <Form onSubmit={handleSubmit} className="mt-4">
            <Form.Group controlId="foodType">
              <Form.Label><strong>Food Type</strong></Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter food type"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                style={{ color: 'rgba(0, 0, 0, 1.5)' }} // Set placeholder color
              />
            </Form.Group>
            <Form.Group controlId="quantity">
              <Form.Label><strong>Quantity</strong></Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter quantity"
                value={itemQuantity}
                onChange={(e) => setItemQuantity(e.target.value)}
                min="0"
                style={{ color: 'rgba(0, 0, 0, 1.5)' }} // Set placeholder color
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label><strong>Description</strong></Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter food description"
                value={itemDescription}
                onChange={(e) => setItemDescription(e.target.value)}
                style={{ color: 'rgba(0, 0, 0, 1.5)' }} // Set placeholder color
              />
            </Form.Group>
            <Form.Group controlId="timeCooked">
              <Form.Label><strong>Time Cooked</strong></Form.Label>
              <Datetime
                value={timeCooked}
                onChange={(date) => setTimeCooked(date)}
                inputProps={{ style: { color: 'rgba(0, 0, 0, 1.5)' } }} // Set placeholder color
              />
            </Form.Group>
            <Button type="submit" variant="dark" className="mt-3 btn-block btn-lg" style={{ width: '100%' }}>Add Item</Button>
          </Form>
          <Link to="/historys" className="btn btn-primary mt-3">View Donations</Link>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
}

export default FoodForm;
