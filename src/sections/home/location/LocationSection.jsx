import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Details from '../../../features/home/location/Details';
import Banner from '../../../features/home/location/Banner';

const LocationSection = () => {
    return (
        <section id='location' className='py-5' style={{ backgroundColor: 'var(--text-primary)', color: 'var(--bg-primary)' }}>
            <Container className='py-5'>
                <Row className='g-4 g-lg-5 align-items-center'>
                    <Details />
                    <Banner />
                </Row>
            </Container>
        </section>
    );
};

export default LocationSection;