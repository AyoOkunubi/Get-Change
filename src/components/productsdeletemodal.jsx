import React from 'react';
import { Modal } from 'react-bootstrap';
import Button from './button';

const DeleteConfirmModal = ({ show, handleClose, handleDelete, product }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Confirm Deletion</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to delete <b>{product.title}</b>?
            </Modal.Body>
            <Modal.Footer>
                <Button extra={'close-btn'} onClick={handleClose}>
                    Cancel
                </Button>
                <Button extra={"btn-outline-danger"} onClick={handleDelete}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteConfirmModal;