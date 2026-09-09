import React from 'react';
import { Col } from 'react-bootstrap';
import { useImages } from '../../../hooks/useImages';

const Banner = () => {
    const { locationBanner } = useImages;
    return (
        <Col lg={6}>
            <div
                className='shadow-lg w-100' 
                style={{
                    height: '400px',
                    backgroundImage: `url(${locationBanner})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: '1px solid rgba(244, 241, 234, 0.1)'
                }}
            />
        </Col>
    );
};

export default Banner;