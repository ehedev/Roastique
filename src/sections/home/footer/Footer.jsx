import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Logo from '../../../features/home/footer/Logo';
import SocialMedia from '../../../features/home/footer/SocialMedia';
import PagesLinks from '../../../features/home/footer/PagesLinks';
import Copyright from '../../../features/home/footer/Copyright';

const Footer = () => {
    return (
        <footer className='pt-5 pb-4' style={{ backgroundColor: '#140D09', color: 'rgba(244, 241, 234, 0.6)' }}>
            <Container>
                <Row className='gy-4 align-items-center mb-2'>
                    <Logo />
                    <SocialMedia />
                    <PagesLinks />
                </Row>
                <Copyright />
            </Container>
        </footer>
    );
};

export default Footer;