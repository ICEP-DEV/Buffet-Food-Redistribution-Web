import React, { useState } from 'react';
import { Container, Table, Button, Modal, Form } from 'react-bootstrap';

const FeedbackManager = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        user: '',
        feedback: '',
        date: ''
    });

    const handleShow = () => setShowModal(true);
    const handleClose = () => {
        setShowModal(false);
        setFormData({ user: '', feedback: '', date: '' });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFeedback = {
            id: feedbacks.length + 1,
            user: formData.user,
            feedback: formData.feedback,
            date: formData.date
        };
        setFeedbacks([...feedbacks, newFeedback]);
        handleClose();
    };

    return (
        <Container className="my-5 p-3 border">
            <h2 className="text-center mb-4">Feedback Manager</h2>
            <div className="mb-4 text-end">
                <Button variant="dark" onClick={handleShow}>Add Feedback</Button>
            </div>
            <div className="table-responsive">
                <Table striped bordered hover>
                    <thead className="thead-dark">
                        <tr>
                            <th>User</th>
                            <th>Feedback</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {feedbacks.map(feedback => (
                            <tr key={feedback.id}>
                                <td>{feedback.user}</td>
                                <td>{feedback.feedback}</td>
                                <td>{feedback.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Feedback</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formUser">
                            <Form.Label>User</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter user name"
                                name="user"
                                value={formData.user}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formFeedback">
                            <Form.Label>Feedback</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Enter feedback"
                                name="feedback"
                                value={formData.feedback}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formDate">
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Button variant="dark" type="submit" className="mt-3">
                            Save
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default FeedbackManager;
