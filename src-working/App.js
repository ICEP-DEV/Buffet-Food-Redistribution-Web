import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import DonorForm from './DonorForm';
import DonorItemList from './DonorItemList';

const App = () => {
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // Track the index of the item being edited

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleEditItem = (index) => {
    setEditIndex(index); // Set the index of the item being edited
  };

  const handleUpdateItem = (updatedItem) => {
    const updatedItems = [...items];
    updatedItems[editIndex] = updatedItem;
    setItems(updatedItems);
    setEditIndex(null); // Reset the editIndex after updating the item
  };

  return (
    <Container>
      <DonorForm
        onAddItem={handleAddItem}
        editItem={editIndex !== null ? items[editIndex] : null} // Pass the item being edited if editIndex is not null
        onUpdateItem={handleUpdateItem}
      />
      <DonorItemList
        items={items}
        onDelete={handleDeleteItem}
        onEdit={handleEditItem}
        onSubmit={() => {
          // Handle submit if needed
        }}
      />
    </Container>
  );
};

export default App;
