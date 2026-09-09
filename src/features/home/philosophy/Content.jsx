import React from 'react';
import { Col } from 'react-bootstrap';

const Content = () => {
    return (
        <Col lg={7} className='ps-lg-5'>
            <small className='text-uppercase fw-bold' style={{ color: 'var(--accent-color)', letterSpacing: '2px' }}>
                Our Philosophy
            </small>
            <h2 className='display-5 my-4 fw-bold' style={{ color: 'var(--text-primary)', lineHeight: 1.1 }}>
                Ruthless dedication to the craft
            </h2>
            <p className='fs-5 text-muted mb-4' style={{ lineHeight: 1.8 }}>
                We source our beans from micro-lots across the globe, roasting them in-house to exact specifications. Our culinary team approaches every dish with the same precision, marrying local ingredients with modern gastronomy.
            </p>
            <p className='text-muted' style={{ lineHeight: 1.8 }}>
                No shortcuts. No compromises. Just an unwavering commitment to the art of hospitality and flavor.
            </p>
        </Col>
    );
};

export default Content;