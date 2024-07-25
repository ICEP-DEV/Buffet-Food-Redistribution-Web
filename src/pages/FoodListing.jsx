import React, { useState, useEffect } from 'react';
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

  const handleRequest = async (itemId) => {
    const selectedItem = foodItems.find((item) => item.id === itemId);
    if (selectedItem) {
      const token = localStorage.getItem('token');
      const requestTime = new Date().toISOString();

      try {
        // Example of sending an email to the donor
        await axios.post(`http://localhost:5282/api/Email/DonorMail?email=${selectedItem.contact}&itemId=${selectedItem.id}`);
        
        // Example of sending a request to the backend to mark the item as requested
        await axios.post(`http://localhost:5282/api/Request?foodDonationId=${selectedItem.id}`, {}, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        // Update requested items state and local storage
        const updatedItem = { ...selectedItem, requestTime };
        const updatedRequestedItems = [...requestedItems, updatedItem];
        setRequestedItems(updatedRequestedItems);
        localStorage.setItem('requestedItems', JSON.stringify(updatedRequestedItems));

        // Dispatch Redux action if needed (acceptRequest)

        alert(`Request for ${selectedItem.itemName} sent!`);
      } catch (error) {
        console.error('Error handling request:', error);
      }
    }
  };

  const clearLocalStorage = () => {
    localStorage.removeItem('requestedItems');
    setRequestedItems([]);
    alert('Local storage cleared!');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <br>
      </br>
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
    </div>
  );
}

const mapStateToProps = (state) => ({
  requests: state.requests,
});

export default connect(mapStateToProps, { acceptRequest, declineRequest })(FoodListing);