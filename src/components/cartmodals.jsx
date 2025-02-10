import React, { useState, useEffect } from 'react';
import { Modal, Form } from 'react-bootstrap';
import Button from './button';

const AddCartModal = ({ show, handleClose, handleAddCart, cartData, isUpdate = false }) => {
    const initialFormData = {
        userId: '',
        date: '',
        products: [{ productId: '', quantity: '' }]
    };

    const [formData, setFormData] = useState(initialFormData);
    const [error, setError] = useState('');

    useEffect(() => {
        if (isUpdate && cartData) {
            setFormData({ ...initialFormData, ...cartData });
        } else {
            setFormData(initialFormData);
        }
    }, [initialFormData, cartData, isUpdate, show]);
    

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        if (name.startsWith("productId") || name.startsWith("quantity")) {
            const [key, index] = name.split(".");
            const parsedIndex = parseInt(index, 10);
    
            // Ensure we're creating a new copy of the products array and the specific product object
            const updatedProducts = formData.products.map((product, i) =>
                i === parsedIndex ? { ...product, [key]: value } : product
            );
    
            setFormData({ ...formData, products: updatedProducts });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.userId || !formData.date || formData.products.some(p => !p.productId || !p.quantity)) {
            setError('Please fill in all fields.');
            return;
        }

        const newCart = {
            userId: parseInt(formData.userId, 10),
            date: formData.date,
            products: formData.products.map(p => ({
                productId: parseInt(p.productId, 10),
                quantity: parseInt(p.quantity, 10)
            }))
        };

        handleAddCart(newCart);
        setFormData(initialFormData);
        setError('');
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{isUpdate ? "Update Cart" : "Add New Cart"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {error && <p className="text-danger">{error}</p>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>User ID</Form.Label>
                        <Form.Control
                            type="number"
                            name="userId"
                            value={formData.userId}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    {formData.products.map((product, index) => (
                        <div key={index} className="mb-3">
                            <Form.Group className="mb-3">
                                <Form.Label>Product ID</Form.Label>
                                <Form.Control
                                    type="number"
                                    name={`productId.${index}`}
                                    value={product.productId}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control
                                    type="number"
                                    name={`quantity.${index}`}
                                    value={product.quantity}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </div>
                    ))}
                    <Modal.Footer>
                        <Button extra={'close-btn'} onClick={handleClose}>
                            Close
                        </Button>
                        <Button btntype={'submit'} extra={'all-btn'}> 
                            {isUpdate ? "Update" : "Add"}
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default AddCartModal;
