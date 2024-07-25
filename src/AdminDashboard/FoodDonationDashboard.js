// import React from 'react';
// import { Container, Row, Col, Card, Table, ProgressBar } from 'react-bootstrap';
// import { FaHandHoldingHeart, FaUsers, FaBuilding, FaWeight, FaUserFriends } from 'react-icons/fa';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const FoodDonationDashboard = ({ isSidebarOpen }) => {
//     const stats = {
//         totalDonations: 150,
//         totalDonors: 10,
//         totalOrganizations: 20,
//         totalWeight: 2000,
//         mostFrequentDonor: 'John Dube',
//         donations: [
//             { id: 1, donor: 'John Dube', weight: 500, date: '2024-06-01' },
//             { id: 2, donor: 'Jane Make', weight: 300, date: '2024-06-10' },
//             { id: 3, donor: 'Michael Dlamini', weight: 200, date: '2024-06-11' },
//         ]
//     };

//     return (
//         <div className="container-fluid px-3 px-md-5 py-3">
//             <Container className="border mt-4 p-3 p-md-4">
//                 <Row className="mb-4">
//                     <Col>
//                         <h2 className="text-center text-dark">Food Share Network Dashboard</h2>
//                     </Col>
//                 </Row>
//                 <Row className="mb-4">
//                     <Col md={4} xs={12} className="mb-3">
//                         <Card className="bg-dark text-white h-100">
//                             <Card.Body>
//                                 <Card.Title><FaHandHoldingHeart /> Total Donations</Card.Title>
//                                 <Card.Text>{stats.totalDonations}</Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                     <Col md={4} xs={12} className="mb-3">
//                         <Card className="bg-dark text-white h-100">
//                             <Card.Body>
//                                 <Card.Title><FaUsers /> Total Donors</Card.Title>
//                                 <Card.Text>{stats.totalDonors}</Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                     <Col md={4} xs={12} className="mb-3">
//                         <Card className="bg-dark text-white h-100">
//                             <Card.Body>
//                                 <Card.Title><FaBuilding /> Total Organizations</Card.Title>
//                                 <Card.Text>{stats.totalOrganizations}</Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                     <Col md={4} xs={12} className="mb-3">
//                         <Card className="bg-dark text-white h-100">
//                             <Card.Body>
//                                 <Card.Title><FaWeight /> Total Weight (kg)</Card.Title>
//                                 <Card.Text>{stats.totalWeight}</Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                     <Col md={4} xs={12} className="mb-3">
//                         <Card className="bg-dark text-white h-100">
//                             <Card.Body>
//                                 <Card.Title><FaUserFriends /> Most Frequent Donor</Card.Title>
//                                 <Card.Text>{stats.mostFrequentDonor}</Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col>
//                         <h3 className="text-center text-dark">Recent Donations</h3>
//                         <Table striped bordered hover responsive className="mt-3">
//                             <thead className="bg-dark text-white">
//                                 <tr>
//                                     <th>Donor</th>
//                                     <th>Weight (kg)</th>
//                                     <th>Date</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {stats.donations.map((donation) => (
//                                     <tr key={donation.id}>
//                                         <td>{donation.donor}</td>
//                                         <td>{donation.weight}</td>
//                                         <td>{donation.date}</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </Table>
//                     </Col>
//                 </Row>
//                 <Row className="mt-4">
//                     <Col>
//                         <h3 className="text-center text-dark">Donation Progress</h3>
//                         <ProgressBar
//                             now={(stats.totalWeight / 5000) * 100}
//                             label={`${((stats.totalWeight / 5000) * 100).toFixed(2)}%`}
//                             variant="success"
//                             style={{ height: '30px' }}
//                         />
//                     </Col>
//                 </Row>
//             </Container>
//         </div>
//     );
// };

// export default FoodDonationDashboard;


import React from 'react';
import { Container, Row, Col, Card, Table, ProgressBar } from 'react-bootstrap';
import { FaHandHoldingHeart, FaUsers, FaBuilding, FaWeight, FaUserFriends } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const FoodDonationDashboard = ({ isSidebarOpen }) => {
    const stats = {
        totalDonations: 150,
        totalDonors: 10,
        totalOrganizations: 20,
        totalQuantity: 1000, // Updated to totalQuantity
        mostFrequentDonor: 'John Dube',
        donations: [
            { id: 1, donor: 'John Dube', type: 'Vegetables', description: 'Fresh carrots and tomatoes', quantity: 50, date: '2024-06-01' },
            { id: 2, donor: 'Jane Make', type: 'Canned Food', description: 'Canned beans and soup', quantity: 30, date: '2024-06-10' },
            { id: 3, donor: 'Michael Dlamini', type: 'Dairy', description: 'Milk and cheese', quantity: 20, date: '2024-06-11' },
        ]
    };

    return (
        <div className="container-fluid px-3 px-md-5 py-3">
            <Container className="border mt-4 p-3 p-md-4">
                <Row className="mb-4">
                    <Col>
                        <h2 className="text-center text-dark">Food Share Network Dashboard</h2>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col md={4} xs={12} className="mb-3">
                        <Card className="bg-dark text-white h-100">
                            <Card.Body>
                                <Card.Title><FaHandHoldingHeart /> Total Donations</Card.Title>
                                <Card.Text>{stats.totalDonations}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} xs={12} className="mb-3">
                        <Card className="bg-dark text-white h-100">
                            <Card.Body>
                                <Card.Title><FaUsers /> Total Donors</Card.Title>
                                <Card.Text>{stats.totalDonors}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} xs={12} className="mb-3">
                        <Card className="bg-dark text-white h-100">
                            <Card.Body>
                                <Card.Title><FaBuilding /> Total Organizations</Card.Title>
                                <Card.Text>{stats.totalOrganizations}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} xs={12} className="mb-3">
                        <Card className="bg-dark text-white h-100">
                            <Card.Body>
                                <Card.Title><FaWeight /> Total Quantity</Card.Title> {/* Updated to Total Quantity */}
                                <Card.Text>{stats.totalQuantity}</Card.Text> {/* Updated to totalQuantity */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} xs={12} className="mb-3">
                        <Card className="bg-dark text-white h-100">
                            <Card.Body>
                                <Card.Title><FaUserFriends /> Most Frequent Donor</Card.Title>
                                <Card.Text>{stats.mostFrequentDonor}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3 className="text-center text-dark">Recent Donations</h3>
                        <Table striped bordered hover responsive className="mt-3">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <th>Donor</th>
                                    <th>Type</th>
                                    <th>Description</th>
                                    <th>Quantity</th> {/* Updated to Quantity */}
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {stats.donations.map((donation) => (
                                    <tr key={donation.id}>
                                        <td>{donation.donor}</td>
                                        <td>{donation.type}</td>
                                        <td>{donation.description}</td>
                                        <td>{donation.quantity}</td> {/* Updated to quantity */}
                                        <td>{donation.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col>
                        <h3 className="text-center text-dark">Donation Progress</h3>
                        <ProgressBar
                            now={(stats.totalQuantity / 5000) * 100} // Updated to totalQuantity
                            label={`${((stats.totalQuantity / 5000) * 100).toFixed(2)}%`} // Updated to totalQuantity
                            variant="success"
                            style={{ height: '30px' }}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FoodDonationDashboard;
