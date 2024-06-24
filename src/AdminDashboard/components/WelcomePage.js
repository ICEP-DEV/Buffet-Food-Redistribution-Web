import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const WelcomePage = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {

    setTimeout(() => setIsAnimated(true), 100); 
  }, []);

  return (
    <Container
      fluid
      className="d-flex flex-column align-items-center justify-content-center vh-90"
      style={{
        backgroundColor: '#343a40',
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/logo.jpg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
    >
      <Row className="w-100 mb-5">
        <Col className="d-flex justify-content-center mt-auto ">
          <Card className="text-center w-100" style={{ backgroundColor: '#495057', color: 'white', maxWidth: '900px', opacity: '0.9' }}>
            <Card.Header style={{ backgroundColor: '#212529' }}>
              <h2
                className={`transition-opacity ${isAnimated ? 'opacity-100' : 'opacity-0'}`}
                style={{ transition: 'opacity 2s, transform 2s', transform: isAnimated ? 'translateX(0)' : 'translateX(-50px)',color: '#99ddff'  }}
              >
                Welcome to Food Share Network Admin Dashboard
              </h2>
            </Card.Header>
            <Card.Body>
              <Card.Title
                className={`transition-opacity ${isAnimated ? 'opacity-100' : 'opacity-0'}`}
                style={{ transition: 'opacity 2s 0.5s, transform 2s 0.5s', transform: isAnimated ? 'translateY(0)' : 'translateY(50px)' }}
              >
                Food Share Network Admin Portal Tools Summary
              </Card.Title>
              <Card.Text
                className={`transition-opacity ${isAnimated ? 'opacity-100' : 'opacity-0'}`}
                style={{ transition: 'opacity 2s 1s, transform 2s 1s', transform: isAnimated ? 'translateY(0)' : 'translateY(-50px)', backgroundColor: '#6c757d', padding: '10px', borderRadius: '5px', color: '#ffb3b3' }}
              >
                View donation progress to see which donor is donating frequently, view total donors, and Organizations with the Food Share Network system administration tools.
              </Card.Text>
              <Card.Text
                className={`transition-opacity ${isAnimated ? 'opacity-100' : 'opacity-0'}`}
                style={{ transition: 'opacity 2s 1.2s, transform 2s 1.2s', transform: isAnimated ? 'translateY(0)' : 'translateY(50px)', backgroundColor: '#5a6268', padding: '10px', borderRadius: '5px', color: '#ffdd99' }}
              >
                Manage users where you can edit user accounts and remove users that are vandalising our policies with the Food Share Network system administration tools.
              </Card.Text>
              <Card.Text
                className={`transition-opacity ${isAnimated ? 'opacity-100' : 'opacity-0'}`}
                style={{ transition: 'opacity 2s 1.4s, transform 2s 1.4s', transform: isAnimated ? 'translateY(0)' : 'translateY(-50px)', backgroundColor: '#4e555b', padding: '10px', borderRadius: '5px', color: '#b3ffb3' }}
              >
                View donation History including donor name, date and time, and the weight of the food donated with the Food Share Network system administration tools.
              </Card.Text>
              <Card.Text
                className={`transition-opacity ${isAnimated ? 'opacity-100' : 'opacity-0'}`}
                style={{ transition: 'opacity 2s 1.6s, transform 2s 1.6s', transform: isAnimated ? 'translateY(0)' : 'translateY(50px)', backgroundColor: '#3e444a', padding: '10px', borderRadius: '5px', color: '#99ddff' }}
              >
                View recipient History including organization name, date and time food was collected, and the feedback on the food condition with the Food Share Network system administration tools.
              </Card.Text>
              <Card.Text
                className={`transition-opacity ${isAnimated ? 'opacity-100' : 'opacity-0'}`}
                style={{ transition: 'opacity 2s 1.8s, transform 2s 1.8s', transform: isAnimated ? 'translateY(0)' : 'translateY(-50px)', backgroundColor: '#2e343a', padding: '10px', borderRadius: '5px', color: '#ffb3ff' }}
              >
                Issue Resolver assists admin to troubleshoot system errors like Technical Glitches, Data Integrity Issues, and System Unresponsiveness with the Food Share Network system administration tools.
              </Card.Text>
              <Card.Text
                className={`transition-opacity ${isAnimated ? 'opacity-100' : 'opacity-0'}`}
                style={{ transition: 'opacity 2s 2s, transform 2s 2s', transform: isAnimated ? 'translateY(0)' : 'translateY(50px)', backgroundColor: '#1e242a', padding: '10px', borderRadius: '5px', color: '#ffcc99' }}
              >
                Feedback is where the admin can view all the feedback about the system, including user names, feedback, and the date feedback was sent with the Food Share Network system administration tools.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default WelcomePage;
