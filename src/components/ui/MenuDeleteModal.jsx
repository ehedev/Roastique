import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FiAlertTriangle, FiX } from 'react-icons/fi';

const MenuDeleteModal = ({ show, onHide, onConfirm, itemName }) => {
    return (
        <Modal show={show} onHide={onHide} centered backdrop="static">
            <Modal.Header className="border-0 pt-4 px-4 pb-0 d-flex justify-content-between align-items-center">
                <Modal.Title className="fw-bold text-danger d-flex align-items-center gap-2">
                    <FiAlertTriangle /> Confirm Deletion
                </Modal.Title>
                <Button variant="link" onClick={onHide} className="closeButton text-dark p-0">
                    <FiX size={24} />
                </Button>
            </Modal.Header>
            
            <Modal.Body className="p-4 text-center">
                <p className="mb-1" style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                    Are you sure you want to delete <strong>{itemName}</strong>?
                </p>
                <p className="text-muted small mb-0">
                    This action cannot be undone and will remove the item from the public menu instantly.
                </p>
            </Modal.Body>
            
            <Modal.Footer className="border-0 pb-4 px-4 pt-0 justify-content-center gap-2">
                <Button variant="light" onClick={onHide} className="rounded-0 px-4 fw-bold shadow-sm">
                    Cancel
                </Button>
                <Button 
                    variant="danger" 
                    onClick={onConfirm}
                    className="rounded-0 px-4 fw-bold shadow-sm border-0"
                >
                    Yes, Delete Item
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default MenuDeleteModal;