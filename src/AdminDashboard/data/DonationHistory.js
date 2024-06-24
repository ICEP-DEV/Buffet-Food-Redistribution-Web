import React from 'react';
import { Container, Card } from 'react-bootstrap';

const DonationHistory = () => {
    // Sample donation history data
    const donationHistory = [
        { id: 1, donor: 'John Doe', weight: 500, date: '2024-06-01 10:30:00' },
        { id: 2, donor: 'Jane Smith', weight: 300, date: '2024-06-10 12:15:00' },
        { id: 3, donor: 'Michael Johnson', weight: 200, date: '2024-06-11 14:00:00' },
    ];

    return (
        <Container className="my-5 p-3 border">
            <h2 className="text-center mb-4">Donation History</h2>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {donationHistory.map(donation => (
                    <div key={donation.id} className="col">
                        <Card bg="dark" text="white" className="mb-3">
                            <Card.Body>
                                <Card.Title>{donation.donor}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{donation.date}</Card.Subtitle>
                                <Card.Text>
                                    Weight: {donation.weight} kg
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default DonationHistory;


