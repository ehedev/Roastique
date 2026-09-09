import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { usePublicLayout } from '../../../hooks/layouts/usePublicLayout';
import { useImages } from '../../../hooks/useImages';

const PublicNavbar = () => {
    const { expanded, setExpanded, isReservationPage } = usePublicLayout();
    const { logo } = useImages;

    return (
        <Navbar 
            expand="lg" 
            expanded={expanded} 
            onToggle={(isExpanded) => setExpanded(isExpanded)} 
            className='py-4' 
            style={{ backgroundColor: 'var(--bg-primary)' }}
        >
            <Container>
                <Navbar.Brand
                    as={Link}
                    to="/"
                    className='d-flex align-items-center'
                    style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '2rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)'
                    }}
                >
                    <img 
                        src={logo} 
                        alt="Roastique Logo" 
                        width="36" 
                        height="36" 
                        className="me-2" 
                        style={{ objectFit: 'contain' }}
                    />
                    Roastique.
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: 'var(--text-primary)' }} />
                
                <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
                    <Nav className='align-items-lg-center gap-3 fw-500'>
                        <Nav.Link className='nav-link' as={Link} to="/admin" onClick={() => setExpanded(false)}>
                            Admin
                        </Nav.Link>
                        <Nav.Link className='nav-link' as={Link} to="/my-reservations" onClick={() => setExpanded(false)}>
                            My Reservations
                        </Nav.Link>
                        <Nav.Link className='nav-link' as={HashLink} smooth to="/#menu" onClick={() => setExpanded(false)}>
                            Menu
                        </Nav.Link>
                        <Nav.Link className='nav-link' as={HashLink} smooth to="/#location" onClick={() => setExpanded(false)}>
                            Location
                        </Nav.Link>
                        
                        {!isReservationPage && (
                            <Button
                                as={Link} 
                                to="/reservations"
                                className='btn btn-navbar'
                                onClick={() => setExpanded(false)}
                            >
                                Reserve a Table
                            </Button>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default PublicNavbar;