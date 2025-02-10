import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import Button from '../components/button';
import AddUserModal from '../components/usermodals';
import DeleteConfirmModal from '../components/userdeletemodal';
import Pagination from '../components/paginate';

const User = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const [users, setUsers]= useState([]);
    useEffect( () => {
        fetch('https://fakestoreapi.com/users', {
            method:'GET',
            headers: {
              'Content-Type': 'application/json',
            }
        },
        )
            .then(res=>res.json())
            .then(json=>{
                setUsers(json);
                console.log(users);
            })  
            .catch(error=> console.log(error))  
    }, [users]);
    
    const handleAddClose = () => setShowAddModal(false);

    const handleUpdateShow = (user) => {
        setSelectedUser(user);
        setShowUpdateModal(true);
    };
    const handleUpdateClose = () => {
        setSelectedUser(null);
        setShowUpdateModal(false);
    };

    const handleDeleteShow = (user) => {
        setSelectedUser(user);
        setShowDeleteModal(true);
    };
    const handleDeleteClose = () => setShowDeleteModal(false);

    const handleDeleteUser = () => {
        console.log(`Deleted user: ${selectedUser.id}`);
        setShowDeleteModal(false);
        setSelectedUser(null);
    };

    return (
        <>
            <Navbar>
            <div className ="content">
            <div className ="d-flex justify-content-between align-items-center mb-4">
                <h1>Users</h1>
                <Button extra={'all-btn'} onClick={handleShow}>Add New</Button>
                <AddUserModal show={showModal} handleClose={handleClose} />
            </div>
            <div className ="box-model">
                <h2>Josh Bakery Ventures</h2>
                <p>62, Bode Thomas, Surulere, Lagos</p>
            </div>
            <div className ="table-container">
                <div className ="d-flex justify-content-between align-items-center mb-3">
                    <div>
                    <select className="form-select d-inline-block w-auto" defaultValue="">
                        <option value="" disabled>
                            Change role
                        </option>
                        <option value="1">Admin</option>
                        <option value="2">Staff</option>
                    </select>
                        <Button extra={'all-btn ms-2'}>Change</Button>
                        
                            <input type="text" className ="form-control d-inline-block w-auto ms-2" placeholder="Enter staff name here..." />
                        
                    </div>
                    <Pagination></Pagination>
                </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Email</th>
                                <th scope="col">User Name</th>
                                <th scope="col">Password</th>
                                <th scope="col">Id</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">City</th>
                                <th scope="col">Street</th>
                                <th scope="col">Number</th>
                                <th scope="col">Zipcode</th>
                                <th scope="col">Latitude</th>
                                <th scope="col">Longitude</th>
                                <th scope="col">Update</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        {users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.email}</td>
                                    <td>{user.username}</td>
                                    <td>{user.password}</td>
                                    <td>{user.id}</td>
                                    <td>{user.name.firstname}</td>
                                    <td>{user.name.lastname}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.address.city}</td>
                                    <td>{user.address.street}</td>
                                    <td>{user.address.number}</td>
                                    <td>{user.address.zipcode}</td>
                                    <td>{user.address.geolocation.lat}</td>
                                    <td>{user.address.geolocation.long}</td>
                                    <td>
                                        <Button
                                            onClick={() => handleUpdateShow(user)}
                                        >
                                            <i className="fas fa-edit"></i>
                                        </Button>
                                    </td>    
                                    <td>
                                        <Button
                                            onClick={() => handleDeleteShow(user)}
                                        >
                                            <i className="fas fa-trash"></i>
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                </div>
            </Navbar>

            {/* Modals */}
            <AddUserModal show={showAddModal} handleClose={handleAddClose} />
            {selectedUser && (
                <>
                    <AddUserModal
                        show={showUpdateModal}
                        handleClose={handleUpdateClose}
                        userData={selectedUser} // Pre-fill user data
                        isUpdate={true}
                    />
                    <DeleteConfirmModal
                        show={showDeleteModal}
                        handleClose={handleDeleteClose}
                        handleDelete={handleDeleteUser}
                        user={selectedUser}
                    />
                </>
            )}
        </>
    );
};

export default User;