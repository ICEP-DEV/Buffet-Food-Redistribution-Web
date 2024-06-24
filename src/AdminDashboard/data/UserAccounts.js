import React, { useState } from 'react';
import { Container, Button, Table } from 'react-bootstrap';

const UserAccounts = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', role: 'donor' },
        { id: 2, name: 'Jane Smith', role: 'recipient' },
    ]);

    const addUser = () => {
        const newName = prompt("Enter user's name:");
        const newRole = prompt("Enter user's role (donor/recipient):");
        if (newName && newRole) {
            setUsers([...users, { id: users.length + 1, name: newName, role: newRole }]);
        }
    };

    const removeUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    const updateUser = (id) => {
        const newName = prompt("Enter new name:");
        const newRole = prompt("Enter new role (donor/recipient):");
        if (newName && newRole) {
            setUsers(users.map(user =>
                user.id === id ? { ...user, name: newName, role: newRole } : user
            ));
        }
    };

    return (
        <div className="d-flex justify-content-center">
            <Container className="my-4 px-3 m-5 p-3 border">
                <h2 className="text-center mb-4">User Accounts</h2>
                <div className="d-flex justify-content-end mb-3">
                    <Button variant="dark" onClick={addUser}>Add User</Button>
                </div>
                <div className="table-responsive">
                    <Table hover bordered>
                        <thead className="thead-dark">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Role</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        <Button
                                            className="me-2"
                                            size="sm"
                                            variant="outline-primary"
                                            onClick={() => updateUser(user.id)}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="outline-danger"
                                            onClick={() => removeUser(user.id)}
                                        >
                                            Remove
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Container>
        </div>
    );
};

export default UserAccounts;
