
import React, { useState, useEffect } from 'react';

const RequestedItemsHistory = () => {
  const [requestedItems, setRequestedItems] = useState([]);

  useEffect(() => {
    // Fetch requested items from localStorage on component mount
    const storedRequestedItems = JSON.parse(localStorage.getItem('requestedItems')) || [];
    setRequestedItems(storedRequestedItems);
  }, []);

  const formatCookedTime = (dateCooked) => {
    if (!dateCooked) return 'Not specified';

    const dateObject = new Date(dateCooked);
    if (isNaN(dateObject.getTime())) return 'Invalid date';

    return dateObject.toLocaleString();
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5">Request History</h2>
      {requestedItems.length === 0 ? (
        <p className="text-center">You have not requested any items yet.</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {requestedItems.map((item, index) => (
            <div key={index} className="col mb-3">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{item.itemName}</h5>
                  <p className="card-text">
                    <strong>Quantity:</strong> {item.quantity}<br />
                    <strong>Description:</strong> {item.description}<br />
                    <strong>Time Cooked:</strong> {formatCookedTime(item.dateCooked)}<br />
                    <strong>Address:</strong> {item.address}<br />
                    <strong>Requested Time:</strong> {new Date(item.requestTime).toLocaleString()}
                  </p>
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
