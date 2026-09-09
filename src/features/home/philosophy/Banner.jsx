import React from 'react';
import { Col } from 'react-bootstrap';
import { useImages } from '../../../hooks/useImages';

const Banner = () => {
    const { philosophyBanner } = useImages;
    return (
        <Col lg={5}>
            <div className='position-relative'>
                <img
                    src={philosophyBanner}
                    alt='Coffee roasting process'
                    className='img-fluid shadow-sm position-relative'
                    style={{ borderRadius: '0', zIndex: 1 }}
                />
                <div
                    className='position-absolute d-none d-lg-block'
                    style={{
                        border: '2px solid var(--accent-color)',
                        inset: '20px 20px -20px -20px',
                        zIndex: 0
                    }}
                />
            </div>
        </Col>
    );
};

export default Banner;