import React from 'react';
import { Modal, Form, Row, Col, Button } from 'react-bootstrap';
import { FiX } from 'react-icons/fi';
import { useMenuForm } from '../../hooks/menu/useMenuForm';

const MenuEditModal = ({ show, onHide, onSave, itemToEdit }) => {
    const { register, handleSubmit, formState: { errors } } = useMenuForm(show, itemToEdit);

    const submitHandler = (data) => {
        onSave(itemToEdit.id, data);
        onHide();
    };

    return (
        <Modal show={show} onHide={onHide} centered backdrop="static" size="lg">
            <Modal.Header className="border-0 pt-4 px-4 pb-0 d-flex justify-content-between align-items-center">
                <Modal.Title className="fw-bold" style={{ color: 'var(--text-primary)' }}>
                    Edit Menu Item
                </Modal.Title>
                <Button variant="link" onClick={onHide} className="closeButton text-dark p-0">
                    <FiX size={24} />
                </Button>
            </Modal.Header>
            <Modal.Body className="p-4">
                <Form onSubmit={handleSubmit(submitHandler)} id="menuEditForm">
                    <Row className="g-3">
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label className="fw-bold text-muted small text-uppercase mb-1">Item Name</Form.Label>
                                <Form.Control type="text" {...register('name')} className={`rounded-0 p-2 ${errors.name ? 'is-invalid' : ''}`} />
                                <Form.Control.Feedback type="invalid">{errors.name?.message}</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label className="fw-bold text-muted small text-uppercase mb-1">Category</Form.Label>
                                <Form.Select {...register('category')} className={`rounded-0 p-2 ${errors.category ? 'is-invalid' : ''}`}>
                                    <option value="">Select...</option>
                                    <option value="Espresso Bar">Espresso Bar</option>
                                    <option value="Signature Drinks">Signature Drinks</option>
                                    <option value="Artisan Pastries">Artisan Pastries</option>
                                    <option value="Breakfast & Brunch">Breakfast & Brunch</option>
                                    <option value="Main Courses">Main Courses</option>
                                    <option value="Salads & Bowls">Salads & Bowls</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">{errors.category?.message}</Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        <Col md={12}>
                            <Form.Group>
                                <Form.Label className="fw-bold text-muted small text-uppercase mb-1">Description</Form.Label>
                                <Form.Control as="textarea" rows={2} {...register('description')} className={`rounded-0 p-2 ${errors.description ? 'is-invalid' : ''}`} />
                                <Form.Control.Feedback type="invalid">{errors.description?.message}</Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group>
                                <Form.Label className="fw-bold text-muted small text-uppercase mb-1">Price ($)</Form.Label>
                                <Form.Control type="number" step="0.01" {...register('price')} className={`rounded-0 p-2 ${errors.price ? 'is-invalid' : ''}`} />
                                <Form.Control.Feedback type="invalid">{errors.price?.message}</Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        <Col md={6} className="d-flex align-items-center mt-4">
                            <Form.Check type="switch" id="edit-isAvailable-switch" label={<span className="fw-bold" style={{ color: 'var(--text-primary)' }}>Item is currently Available</span>} {...register('isAvailable')} />
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer className="border-0 pb-4 px-4 pt-0">
                <Button variant="light" onClick={onHide} className="rounded-0 px-4 fw-bold">Cancel</Button>
                <Button type="submit" form="menuEditForm" className="rounded-0 px-4 border-0 fw-bold shadow-sm" style={{ backgroundColor: 'var(--text-primary)', color: 'var(--bg-primary)' }}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default MenuEditModal;