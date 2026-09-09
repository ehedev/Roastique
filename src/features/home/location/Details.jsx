import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FiArrowUpRight, FiPhone, FiClock } from 'react-icons/fi';
import { SiGooglemaps } from 'react-icons/si';

const Details = () => {
    return (
        <Col lg={6} className='pe-lg-5'>
            <a 
                href="https://maps.google.com/?q=120+Culinary+Avenue,+Downtown+District"
                target='_blank'
                rel='noopener noreferrer'
                className='text-uppercase fw-bold text-decoration-none d-inline-block'
                style={{
                    color: 'var(--accent-color)',
                    letterSpacing: '2px',
                    fontSize: '0.875rem',
                    transition: 'opacity .2s ease-in-out'
                }}
                onMouseEnter={(e) => e.target.style.opacity = 0.7}
                onMouseLeave={(e) => e.target.style.opacity = 1}
            >
                Visit Us <FiArrowUpRight size={16} />
            </a>
            <h2 className='display-5 mt-2 mb-5 fw-bold' style={{ color: 'var(--bg-secondary)' }}>
                Our Sanctuary
            </h2>

            <Row className='g-4'>
                <Col sm={6}>
                    <h6 className='d-flex text-uppercase fw-bold mb-3' style={{ color: 'var(--accent-color)', letterSpacing: '1px' }}>
                        <SiGooglemaps size={18} className='me-2' /> Location
                    </h6>
                    <p style={{ color: 'rgba(244, 241, 234, 0.8)', lineHeight: 1.8 }}>
                        120 Culinary Avenue<br />
                        Downtown District<br />
                        reservations@roastique.com<br />
                        <FiPhone size={16} /> +201248392250
                    </p>
                </Col>
                <Col sm={6}>
                    <h6 className='d-flex text-uppercase fw-bold mb-3' style={{ color: 'var(--accent-color)', letterSpacing: '1px' }}>
                        <FiClock size={18} className='me-2' /> Hours
                    </h6>
                    <ul className='list-unstyled' style={{ color: 'rgba(244, 241, 234, 0.8)', lineHeight: 1.8 }}>
                        <li><strong style={{ color: 'var(--bg-secondary)' }}>Mon - Thu:</strong> 7AM - 8PM</li>
                        <li><strong style={{ color: 'var(--bg-secondary)' }}>Fri - Sat:</strong> 7AM - 10PM</li>
                        <li><strong style={{ color: 'var(--bg-secondary)' }}>Sun:</strong> 8AM - 6PM</li>
                    </ul>
                </Col>
            </Row>
        </Col>
    );
};

export default Details;