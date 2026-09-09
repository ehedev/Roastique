import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiCalendar, FiClock, FiUsers, FiUser, FiHash, FiInfo, FiBookOpen } from 'react-icons/fi';
import { useMyReservations } from '../../hooks/reservations/useMyReservations';
import StatusBadge from '../../components/ui/StatusBadge';

const CurrentReservations = () => {
    const { myReservations } = useMyReservations();

    return (
        <Row className="justify-content-center">
            <Col lg={8}>
                {myReservations.length > 0 ? (
                    myReservations.map(reservation => (
                        <Card 
                            key={reservation.id} 
                            className="border-0 shadow-sm mb-4 rounded-0"
                            style={{ backgroundColor: 'var(--bg-secondary)' }}
                        >
                            
                            <Row className="g-0 h-100">
                                
                                {/* Date & Time Block */}
                                <Col 
                                    sm={5} 
                                    md={4}
                                    className="p-4 d-flex flex-column justify-content-center align-items-center text-center"
                                    style={{ 
                                        backgroundColor: 'var(--text-primary)', 
                                        color: 'var(--bg-primary)',
                                        borderRight: '2px dashed rgba(255,255,255,0.2)'
                                    }}
                                >
                                    <div className="text-uppercase fw-bold mb-2" style={{ color: 'var(--accent-color)', letterSpacing: '2px', fontSize: '0.85rem' }}>
                                        {reservation.formattedDate.dayName}
                                    </div>
                                    
                                    <div className="d-flex align-items-center gap-2 mb-1">
                                        <FiCalendar size={18} />
                                        <span className="text-uppercase fw-bold" style={{ letterSpacing: '2px', fontSize: '0.8rem' }}>
                                            {reservation.formattedDate.month} {reservation.formattedDate.year}
                                        </span>
                                    </div>
                                    
                                    <div className="fw-bold" style={{ fontSize: '3.5rem', lineHeight: '1', margin: '5px 0' }}>
                                        {reservation.formattedDate.dayNum}
                                    </div>
                                    
                                    <div className="w-100 mt-3 pt-3 d-flex justify-content-center align-items-center gap-2" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                                        <FiClock size={16} />
                                        <span className="fw-bold fs-5" style={{ letterSpacing: '1px' }}>
                                            {reservation.formattedTime}
                                        </span>
                                    </div>
                                </Col>

                                {/* Details Block */}
                                <Col sm={7} md={8}>
                                    <Card.Body className="p-4 p-md-5 d-flex flex-column h-100 justify-content-center position-relative">
                                        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start mb-4">
                                            <div>
                                                <div className="d-flex align-items-center gap-2 text-muted medoum fw-bold mb-2" style={{ letterSpacing: '1px' }}>
                                                    <FiHash size={16} /> Res No.
                                                </div>
                                                <h4 className="fw-bold m-0" style={{ color: 'var(--accent-color)', letterSpacing: '1px' }}>
                                                    {reservation.id}
                                                </h4>
                                            </div>
                                            <div className="mt-3 mt-sm-0">
                                                <StatusBadge status={reservation.status} />
                                            </div>
                                        </div>


                                        <div className="d-flex align-items-center gap-2 text-muted medoum fw-bold mb-2 pt-4" style={{ borderTop: '1px solid rgba(44,30,22,0.1)', letterSpacing: '1px' }}>
                                            <FiInfo size={16} /> Details
                                        </div>
                                        <div className="d-flex align-items-center gap-3 mt-auto pt-2">
                                            <div className="d-flex align-items-center gap-2 text-muted fw-bold small" style={{ letterSpacing: '1px' }}>
                                                <FiUser size={16} /> Name: <span className='medium' style={{ color: 'var(--text-secondary)' }}>{reservation.name}</span>
                                            </div>
                                        </div>

                                        <div className="d-flex align-items-center gap-3 mt-auto pt-2">
                                            <div className="d-flex align-items-center gap-2 text-muted fw-bold small" style={{ letterSpacing: '1px' }}>
                                                <FiUsers size={16} /> Party Size: <span className='medium' style={{ color: 'var(--text-secondary)' }}><span style={{ color: 'var(--accent-color)' }}>{reservation.guests}</span> Guests</span>
                                            </div>
                                        </div>

                                        {reservation.preOrderDetails && reservation.preOrderDetails.length > 0 && (
                                            <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(44,30,22,0.1)' }}>
                                                <div className="d-flex align-items-center gap-2 text-muted text-uppercase fw-bold small mb-3" style={{ letterSpacing: '1px' }}>
                                                    <FiBookOpen size={16} /> Pre-Ordered Selections
                                                </div>
                                                <div className="d-flex flex-wrap gap-2">
                                                    {reservation.preOrderDetails.map((item, idx) => (
                                                        <span 
                                                            key={idx}
                                                            className="px-3 py-2 small fw-bold"
                                                            style={{
                                                                backgroundColor: 'transparent',
                                                                color: 'var(--text-secondary)',
                                                                border: '1px solid rgba(44,30,22,0.2)',
                                                            }}
                                                        >
                                                            <span style={{ color: 'var(--accent-color)' }}>{item.quantity}x</span> {item.name}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                        
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    ))
                ) : (
                    /* Empty State */
                    <Card 
                        className="text-center rounded-0 shadow-none" 
                        style={{ backgroundColor: 'transparent', border: '2px dashed rgba(44, 30, 22, 0.15)' }}
                    >
                        <Card.Body className="p-5">
                            <p className="text-muted mb-4 fw-bold" style={{ letterSpacing: '0.5px' }}>
                                No upcoming reservations saved here. <span style={{ color: 'var(--text-secondary)' }}>Ready to make a reservation?</span>
                            </p>
                            <Link 
                                to="/reservations" 
                                className="btn rounded-0 px-4 py-3 text-uppercase fw-bold shadow-sm border-0" 
                                style={{ backgroundColor: 'var(--text-primary)', color: 'var(--bg-primary)', letterSpacing: '1px' }}
                            >
                                Reserve a Table
                            </Link>
                        </Card.Body>
                    </Card>
                )}
            </Col>
        </Row>
    );
};

export default CurrentReservations;