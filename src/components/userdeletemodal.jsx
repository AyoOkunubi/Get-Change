import React from 'react';
import { Modal } from 'react-bootstrap';
import Button from './button';

const DeleteConfirmModal = ({ show, handleClose, handleDelete, user }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Confirm Deletion</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to delete <b>{user.firstName} {user.lastName}</b>?
            </Modal.Body>
            <Modal.Footer>
                <Button extra={'close-btn'} onClick={handleClose}>
                    Cancel
                </Button>
                <Button extra={"btn-danger"} onClick={handleDelete}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteConfirmModal;
