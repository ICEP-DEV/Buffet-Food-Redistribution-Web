import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

const StarRating = ({ rating, onRate }) => {
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleMouseEnter = (star) => {
    setHoveredRating(star);
  };

  const handleMouseLeave = () => {
    setHoveredRating(0);
  };

  const handleClick = (star) => {
    onRate(star);
  };

  
  return (
    <div>
      {[...Array(5)].map((_, index) => {
        const starNumber = index + 1;
        const filled = starNumber <= (hoveredRating || rating);
        return (
          <span
            key={starNumber}
            style={{ cursor: 'pointer', fontSize: '24px', marginRight: '5px' }}
            onMouseEnter={() => handleMouseEnter(starNumber)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(starNumber)}
          >
            <FontAwesomeIcon icon={filled ? faStarSolid : faStarRegular} className="text-warning" />
          </span>
        );
      })}
    </div>
  );
};

const CustomForm = () => {
  const [email, setEmail] = useState('');
  const [suggestions, setSuggestions] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [showForm, setShowForm] = useState(false); // Ensure showForm is set to true to display the form
  const [rating, setRating] = useState(0);

  const formContainerStyle = {
    maxWidth: '400px',
    background: '#f2f2f2',
    border: '2px solid transparent',
    padding: '32px 24px',
    fontSize: '14px',
    color: '#333',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    boxSizing: 'border-box',
    borderRadius: '16px',
    transition: 'transform 0.3s, box-shadow 0.3s',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    boxShadow: isHovered ? '0 8px 16px rgba(0, 0, 0, 0.1)' : 'none'
  };

  const formGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  };

  const labelStyle = {
    marginBottom: '5px',
    color: '#666',
    fontWeight: 600,
    fontSize: '14px',
  };

  const formControlStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '8px',
    color: '#333',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    transition: 'border-color 0.3s',
  };

  const formControlFocusStyle = {
    outline: 'none',
    borderColor: '#40c9ff',
    boxShadow: '0 0 0 0.1rem rgba(64, 201, 255, 0.25)',
  };

  const buttonStyle = {
    alignSelf: 'flex-start',
    color: '#666',
    fontWeight: 600,
    width: '40%',
    background: '#f2f2f2',
    border: '1px solid #ccc',
    padding: '12px 16px',
    fontSize: '14px',
    marginTop: '12px',
    cursor: 'pointer',
    borderRadius: '50px',
    transition: 'background-color 0.3s, color 0.3s',
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      email,
      rating,
      suggestions
    };
    localStorage.setItem('feedbackData', JSON.stringify(formData));
    alert(`Your feedback (Rating: ${rating}) has been sent, thank you`);
    setEmail('');
    setSuggestions('');
    setRating(0);
    setShowForm(false);
  };
 
  return (
    <Container fluid>
       <header>
  <br />
  <br />
  <br />
  <br />
  <br />
</header>

      <Row>
        <Col style={{ padding: '20px' }}>
          <h1 style={{ color: '#333', marginBottom: '20px', textAlign: 'center' }}>USER FEEDBACK</h1>
          <Container
            style={{
              padding: '10px',
              background: '#ccc',
              borderRadius: '16px',
              marginBottom: '20px',
              color: '#333',
              textAlign: 'center'
            }}
          >
          
            <p>Dear User, thank you for being a part of our platform, we hope to have more engagement with you in the future. We would love to hear any reviews, remarks/suggestions from you about your encounter with our application to help us improve our service.</p>
          </Container>
          {/* Button to toggle the form visibility */}
          <Button
            onClick={() => setShowForm(!showForm)}
            style={{ marginBottom: '20px', backgroundColor: '#ccc', borderColor: '#ccc', color: '#333' }}
          >
            {showForm ? 'Hide Feedback Form' : 'Give Feedback'}
          </Button>

          {/* Render the form if showForm is true */}
          {showForm && (
            <Container
              style={formContainerStyle}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Form className="form" onSubmit={handleSubmit}>
                <Form.Group className="form-group" controlId="email" style={formGroupStyle}>
                  <Form.Label style={labelStyle}>Company Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ ...formControlStyle, ...(isHovered && formControlFocusStyle) }}
                  />
                </Form.Group>
                <Form.Group className="form-group" controlId="rating" style={{ ...formGroupStyle, marginBottom: '0' }}>
                  <Form.Label style={labelStyle}>Rate Our Service</Form.Label>
                  <StarRating rating={rating} onRate={setRating} />
                </Form.Group>
                <Form.Group className="form-group" controlId="textarea" style={formGroupStyle}>
                  <Form.Label style={labelStyle}>Share your experience of the Food Share Network</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={8}
                    required
                    value={suggestions}
                    onChange={(e) => setSuggestions(e.target.value)}
                    style={{ ...formControlStyle, ...(isHovered && formControlFocusStyle) }}
                  />
                </Form.Group>
                <Button
                  className="form-submit-btn"
                  type="submit"
                  style={buttonStyle}
                >
                  Submit
                </Button>
              </Form>
            </Container>
          )}
          {/* <Container
            style={{
              padding: '10px',
              background: '#ccc',
              borderRadius: '16px',
              marginTop: '20px',
              color: '#333',
              textAlign: 'center'
            }}
          >
            <p>Thank you for taking the time to provide your feedback!</p>
          </Container> */}
        </Col>
      </Row>
    </Container>
  );
};

export default CustomForm;

