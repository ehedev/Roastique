import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Banner from '../../../features/home/philosophy/Banner';
import Content from '../../../features/home/philosophy/Content';

const PhilosophySection = () => {
    return (
        <section className='py-5' style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <Container className='py-5 my-lg-4'>
                <Row className='align-items-center g-4 g-lg-5'>
                    <Banner />
                    <Content />
                </Row>
            </Container>
        </section>
    );
};

export default PhilosophySection;