import React from 'react';
import { Modal } from 'react-bootstrap';
import Button from './button';

const DeleteConfirmModal = ({ show, handleClose, handleDelete, cart }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Confirm Deletion</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {cart ? (
                    <>
                        Are you sure you want to delete the cart for User ID <b>{cart?.userId}</b> dated <b>{cart?.date}</b>?
                    </>
                ) : (
                    <p className="text-danger">Error: Cart data not available.</p>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button extra={'close-btn'} onClick={handleClose}>
                    Cancel
                </Button>
                <Button extra={"btn-outline-danger"} onClick={handleDelete} disabled={!cart}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteConfirmModal;
