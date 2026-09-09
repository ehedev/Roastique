import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { formatCurrency } from '../../utils/formatCurrency';

const ReservationForm = ({ reservationData }) => {
    const { 
        availableItems, register, handleSubmit, errors, watch, setValue, onSubmit
    } = reservationData;

    // tracking of checked items and quantities
    const selectedPreOrders = watch('preOrder') || [];
    const quantities = watch('preOrderQuantities') || {};
    
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className='gx-lg-5 gy-lg-0 gy-5'>
                <Col lg={6}>
                    <h4 className='fw-bold mb-4' style={{ color: 'var(--text-primary)' }}>Guest Details</h4>

                    <Row className='g-3'>
                        <Col md={12}>
                            <Form.Group>
                                <Form.Label className='fw-bold text-muted small text-uppercase'>Full Name</Form.Label>
                                <Form.Control 
                                    type='text'
                                    {...register('name')}
                                    placeholder='e.g. Joe Doe'
                                    className={`rounded-0 p-3 bg-transparent ${errors.name ? 'is-invalid' : ''}`}
                                    style={{ borderColor: 'rgba(44, 30, 22, 0.2)' }}
                                />
                                <Form.Control.Feedback type='invalid'>{errors.name?.message}</Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group>
                                <Form.Label className='fw-bold text-muted small text-uppercase'>Email</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    {...register('email')} 
                                    placeholder='youremail@example.com'
                                    className={`rounded-0 p-3 bg-transparent ${errors.email ? 'is-invalid' : ''}`}
                                    style={{ borderColor: 'rgba(44, 30, 22, 0.2)' }}
                                />
                                <Form.Control.Feedback type='invalid'>{errors.email?.message}</Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group>
                                <Form.Label className='fw-bold text-muted small text-uppercase'>Phone</Form.Label>
                                <Form.Control 
                                    type="tel" 
                                    {...register('phone')} 
                                    placeholder='+20'
                                    className={`rounded-0 p-3 bg-transparent ${errors.phone ? 'is-invalid' : ''}`}
                                    style={{ borderColor: 'rgba(44, 30, 22, 0.2)' }}
                                />
                                <Form.Control.Feedback type='invalid'>{errors.phone?.message}</Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        <Col md={4}>
                            <Form.Group>
                                <Form.Label className='fw-bold text-muted small text-uppercase'>Date</Form.Label>
                                <Form.Control 
                                    type="date" 
                                    {...register('date')}
                                    className={`rounded-0 p-3 bg-transparent ${errors.date ? 'is-invalid' : ''}`}
                                    style={{ borderColor: 'rgba(44, 30, 22, 0.2)' }}
                                />
                                <Form.Control.Feedback type='invalid'>{errors.date?.message}</Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        <Col md={4}>
                            <Form.Group>
                                <Form.Label className='fw-bold text-muted small text-uppercase'>Time</Form.Label>
                                <Form.Control 
                                    type="time" 
                                    {...register('time')} 
                                    className={`rounded-0 p-3 bg-transparent ${errors.time ? 'is-invalid' : ''}`}
                                    style={{ borderColor: 'rgba(44, 30, 22, 0.2)' }}
                                />
                                <Form.Control.Feedback type='invalid'>{errors.time?.message}</Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        <Col md={4}>
                            <Form.Group>
                                <Form.Label className='fw-bold text-muted small text-uppercase'>Guests</Form.Label>
                                <Form.Control 
                                    type="number" 
                                    {...register('guests')}
                                    min="1"
                                    max="12"
                                    placeholder='Max. 12'
                                    className={`rounded-0 p-3 bg-transparent ${errors.guests ? 'is-invalid' : ''}`}
                                    style={{ borderColor: 'rgba(44, 30, 22, 0.2)' }}
                                />
                                <Form.Control.Feedback type='invalid'>{errors.guests?.message}</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                </Col>

                <Col lg={6} id='pre-order-section'>
                    <div className='p-4 p-md-5 h-100 d-flex flex-column' style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid rgba(44, 30, 22, 0.1)', maxHeight: '550px' }}>
                        <h4 className='fw-bold mb-2' style={{ color: 'var(--text-primary)' }}>Enhance Your Experience</h4>
                        <p className='text-muted mb-4 small'>Select signature dishes to pre-order for your table.</p>

                        <div className='flex-grow-1 overflow-auto pe-2' style={{ minHeight: '0' }}>
                            {availableItems.map(item => {
                                const isChecked = selectedPreOrders.includes(item.id);
                                const qty = quantities[item.id] || 1;

                                return (
                                    <Form.Check
                                        key={item.id}
                                        type='checkbox'
                                        id={`item-${item.id}`}
                                        className='d-flex align-items-center gap-3 border-bottom pb-3 mb-3 m-0'
                                    >
                                        <Form.Check.Input
                                            type='checkbox'
                                            value={item.id}
                                            {...register('preOrder')}
                                            style={{ cursor: 'pointer', marginTop: 0 }}
                                        />
                                        
                                        <Form.Check.Label className='w-100 d-flex justify-content-between align-items-center' style={{ cursor: 'pointer' }}>
                                            
                                            {/* Item Details */}
                                            <div>
                                                <span className='fw-bold' style={{ color: 'var(--text-primary)' }}>{item.name}</span>
                                                <div className='text-muted small mt-1'>{item.category}</div>
                                            </div>

                                            {/* Price and Quantity Wrapper */}
                                            <div className='d-flex flex-column align-items-end gap-2'>
                                                <span className='fw-bold' style={{ color: 'var(--accent-color)' }}>
                                                    {formatCurrency(item.price)}
                                                </span>

                                                {/* Quantity Selector */}
                                                {isChecked && (
                                                    <div 
                                                        className='d-flex align-items-center justify-content-between px-1 py-1'
                                                        style={{ 
                                                            border: '1px solid var(--text-primary)', 
                                                            minWidth: '80px',
                                                            backgroundColor: 'var(--bg-secondary)' 
                                                        }}
                                                    >
                                                        <button
                                                            type="button"
                                                            className="btn p-0 border-0 fw-bold d-flex align-items-center justify-content-center"
                                                            style={{ color: 'var(--text-primary)', width: '24px', height: '24px' }}
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                if (qty > 1) setValue(`preOrderQuantities.${item.id}`, qty - 1);
                                                            }}
                                                        >
                                                            -
                                                        </button>
                                                        
                                                        <span className="fw-bold small px-2" style={{ color: 'var(--text-primary)' }}>
                                                            {qty}
                                                        </span>
                                                        
                                                        <button
                                                            type="button"
                                                            className="btn p-0 border-0 fw-bold d-flex align-items-center justify-content-center"
                                                            style={{ color: 'var(--text-primary)', width: '24px', height: '24px' }}
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                setValue(`preOrderQuantities.${item.id}`, qty + 1);
                                                            }}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        </Form.Check.Label>
                                    </Form.Check>
                                );
                            })}
                        </div>
                    </div>
                </Col>
            </Row>

            <div className='text-center mt-5 pt-4'>
                <Button
                    type='submit'
                    className='rounded-0 px-5 py-3 border-0 shadow-sm fw-bold w-100'
                    style={{
                        backgroundColor: 'var(--text-primary)',
                        color: 'var(--bg-primary)',
                        letterSpacing: '2px',
                        maxWidth: '400px'
                    }}
                >
                    Request Reservation
                </Button>
            </div>
        </Form>
    );
};

export default ReservationForm;