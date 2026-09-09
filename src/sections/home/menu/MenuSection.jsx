import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../../features/home/menu/Header';
import MenuCategory from '../../../features/home/menu/MenuCategory';

const MenuSection = () => {
    return (
        <section id='menu' className='py-5' style={{ backgroundColor: 'var(--bg-primary)' }}>
            <Container className='py-5'>
                <Header />
                <div
                    className='p-4 p-lg-5 bg-white shadow-lg mx-auto'
                    style={{ maxWidth: '1100px', border: '1px solid rgba(44, 30, 22, 0.05)' }}
                >
                    <Row className='gx-lg-5'>
                        <Col md={6} className='pe-md-4'>
                            <MenuCategory side="left" />
                        </Col>

                        <Col md={6} className='pe-md-4 mt-5 mt-md-0'>
                            <MenuCategory side="right" />
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
};

export default MenuSection;