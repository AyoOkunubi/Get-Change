import React, { useState, useEffect } from 'react';
import { Modal, Form } from 'react-bootstrap';
import Button from './button';

const AddProductModal = ({ show, handleClose, handleAddProduct, productData, isUpdate = false }) => {
    const initialFormData = {
        title: '',
        price: '',
        description: '',
        image: '',
        category: ''
    };

    const [formData, setFormData] = useState(initialFormData);
    const [error, setError] = useState('');

    // Populate form when updating
    useEffect(() => {
        if (isUpdate && productData) {
            setFormData({ ...initialFormData, ...productData });
        } else {
            setFormData(initialFormData);
        }
    }, [initialFormData, productData, isUpdate, show]);
    

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.title || !formData.price || !formData.description || !formData.image || !formData.category) {
            setError('Please fill in all fields.');
            return;
        }

        const newProduct = {
            title: formData.title,
            price: parseFloat(formData.price),
            description: formData.description,
            image: formData.image,
            category: formData.category
        };

        handleAddProduct(newProduct, isUpdate ? productData.id : null); // Pass product ID if updating
        setError(''); 
        handleClose(); // Close modal after submission
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{isUpdate ? "Update Product" : "Add New Product"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {error && <p className="text-danger">{error}</p>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control
                            type="text"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                            type="text"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Modal.Footer>
                        <Button extra={'close-btn'} onClick={handleClose}>
                            Close
                        </Button>
                        <Button btntype="submit" extra={'all-btn'}>
                            {isUpdate ? "Update" : "Add"}
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default AddProductModal;