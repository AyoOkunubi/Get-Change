import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarts, addCart, deleteCart } from '../redux/cartSlice';
import Navbar from '../components/navbar';
import Button from '../components/button';
import AddCartModal from '../components/cartmodals';
import DeleteConfirmModal from '../components/cartdeletemodal';
import Pagination from '../components/paginate';

const Cart = () => {
    const dispatch = useDispatch();
    const cartState = useSelector(state => state.cart) || { carts: [], loading: false, error: null };
    const { carts, loading, error } = cartState;

    useEffect(() => {
        dispatch(fetchCarts());
    }, [dispatch]);

    const [showAddModal, setShowAddModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedCart, setSelectedCart] = useState(null);

    // Open and Close Modals
    const handleAddShow = () => {
        setSelectedCart(null);
        setShowAddModal(true);
    };
    const handleAddClose = () => setShowAddModal(false);
    
    const handleUpdateShow = (cart) => {
        setSelectedCart(cart);
        setShowAddModal(true);
    };

    const handleDeleteShow = (cart) => {
        setSelectedCart(cart);
        setShowDeleteModal(true);
    };
    const handleDeleteClose = () => setShowDeleteModal(false);

    // Handle Delete Cart
    const handleDeleteCart = () => {
        if (selectedCart) {
            dispatch(deleteCart(selectedCart.id));
            setShowDeleteModal(false);
            setSelectedCart(null);
        }
    };

    // Handle Add Cart
    const handleAddCart = (newCart) => {
        dispatch(addCart(newCart));
        setShowAddModal(false);
    };

    return (
        <>
            <Navbar>
                <div className="content">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h1>Carts</h1>
                        <Button extra={'all-btn'} onClick={handleAddShow}>Add New</Button>
                    </div>

                    <div className="table-container">
                        {loading ? (
                            <p>Loading...</p>
                        ) : error ? (
                            <p className="text-danger">Error: {error}</p>
                        ) : carts.length > 0 ? (
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>User ID</th>
                                        <th>Date</th>
                                        <th>Products</th>
                                        <th>Update</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {carts.map((cart, index) => (
                                        <tr key={index}>
                                            <td>{cart.userId || 'N/A'}</td>
                                            <td>{cart.date || 'N/A'}</td>
                                            <td>
                                                {cart.products?.length > 0 ? (
                                                    cart.products.map((product, idx) => (
                                                        <div key={idx}>
                                                            Product ID: {product.productId}, Quantity: {product.quantity}
                                                        </div>
                                                    ))
                                                ) : (
                                                    <span>No products</span>
                                                )}
                                            </td>
                                            <td>
                                                <Button onClick={() => handleUpdateShow(cart)}>
                                                    <i className="fas fa-edit"></i>
                                                </Button>
                                            </td>
                                            <td>
                                                <Button onClick={() => handleDeleteShow(cart)}>
                                                    <i className="fas fa-trash"></i>
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p>No carts available.</p>
                        )}
                    </div>

                    {carts.length > 0 && <Pagination />}
                </div>
            </Navbar>

            {/* Add Cart Modal */}
            <AddCartModal 
                show={showAddModal} 
                handleClose={handleAddClose} 
                handleAddCart={handleAddCart} 
                cartData={selectedCart || { userId: '', date: '', products: [{ productId: '', quantity: '' }] }} 
                isUpdate={Boolean(selectedCart)}
            />

            {/* Delete Confirmation Modal */}
            <DeleteConfirmModal 
                show={showDeleteModal} 
                handleClose={handleDeleteClose} 
                handleDelete={handleDeleteCart} 
                cart={selectedCart} 
            />
        </>
    );
};

export default Cart;
