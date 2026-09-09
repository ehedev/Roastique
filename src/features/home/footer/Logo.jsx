import React from 'react';
import { Col } from 'react-bootstrap';
import { useImages } from '../../../hooks/useImages';

const Logo = () => {
    const { logo } = useImages;
    return (
        <Col md={4} className='text-center text-md-start'>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--bg-secondary)' }}>
                <img 
                    src={logo}
                    alt="Roastique Logo"
                    width="25"
                    height="25"
                    className='me-2'
                    style={{ objectFit: 'contain' }}
                />
                Roastique
            </span>
        </Col>
    );
};

export default Logo;