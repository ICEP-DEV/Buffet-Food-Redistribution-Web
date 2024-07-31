// import React from 'react';
// import { Container, Card } from 'react-bootstrap';

// const RecipientRequestHistory = () => {
//     const requestHistory = [
//         { id: 1, organization: 'Red Cross', collectedDate: '2024-06-01 14:30:00', feedback: 'Food was in good condition.' },
//         { id: 2, organization: 'Food Bank', collectedDate: '2024-06-10 11:45:00', feedback: 'Some items were near expiration.' },
//         { id: 3, organization: 'Feeding Mzansi', collectedDate: '2024-06-11 13:00:00', feedback: 'Food quality was excellent.' },
//     ];

    

//     return (
//         <Container className="my-5 p-3 border">
//             <h2 className="text-center mb-4">Recipient Request History</h2>
//             <div className="row row-cols-1 row-cols-md-2 g-4">
//                 {requestHistory.map(request => (
//                     <div key={request.id} className="col">
//                         <Card bg="dark" text="white" className="w-100 mb-3">
//                             <Card.Body>
//                                 <Card.Title>{request.organization}</Card.Title>
//                                 <Card.Subtitle className="mb-2 text-muted">
//                                     <span className="text-secondary">
//                                         {new Date(request.collectedDate).toLocaleString()}
//                                     </span>
//                                 </Card.Subtitle>
//                                 <Card.Text>Feedback: {request.feedback}</Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </div>
//                 ))}
//             </div>
//         </Container>
//     );
// };

// export default RecipientRequestHistory;


import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const RecipientRequestHistory = () => {
    const requestHistory = [
        { id: 1, organization: 'Red Cross', collectedDate: '2024-06-01 14:30:00', feedback: 'Food was in good condition.' },
        { id: 2, organization: 'Food Bank', collectedDate: '2024-06-10 11:45:00', feedback: 'Some items were near expiration.' },
        { id: 3, organization: 'Feeding Mzansi', collectedDate: '2024-06-11 13:00:00', feedback: 'Food quality was excellent.' },
    ];

    return (
        <Container className="my-5 p-3 border">
            <h2 className="text-center mb-4 text-success">Recipient Request History</h2>
            <Row className="g-4">
                {requestHistory.map(request => (
                    <Col key={request.id} xs={12}>
                        <Card bg="dark" text="white" className="w-100 mb-3">
                            <Card.Body>
                                <Card.Title>{request.organization}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    <span className="text-secondary">
                                        {new Date(request.collectedDate).toLocaleString()}
                                    </span>
                                </Card.Subtitle>
                                <Card.Text>Feedback: {request.feedback}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default RecipientRequestHistory;


