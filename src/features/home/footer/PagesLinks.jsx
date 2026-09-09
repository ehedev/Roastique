import React from 'react';
import { Col } from 'react-bootstrap';

const PagesLinks = () => {
    return (
        <Col md={4} className='text-center text-md-end'>
            <div className='d-flex justify-content-center justify-content-md-end align-items-center gap-3'>
                <a role='button' className='text-decoration-none text-nowrap footer-link'>Privacy Policy</a>
                <span style={{ color: 'var(--accent-color)' }}>|</span>
                <a role='button' className='text-decoration-none text-nowrap footer-link'>Terms of Service</a>
            </div>
        </Col>
    );
};

export default PagesLinks;