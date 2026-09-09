import React from 'react';
import { Link } from 'react-router-dom';
import { Offcanvas, Button } from 'react-bootstrap';
import { FiLogOut } from 'react-icons/fi';
import NavigationLinks from './NavigationLinks';
import { useImages } from '../../../hooks/useImages';

const MobileOffcanvasDrawer = ({ show, onHide, handleLogout, isActive }) => {
    const { logo } = useImages;
    return (
        <Offcanvas show={show} onHide={onHide} className="d-lg-none w-75" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <Offcanvas.Header closeButton className="shadow-0 border-bottom pb-4 pt-4 px-4">
                <Offcanvas.Title className="fw-bold fs-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
                    <Link to="/" className="d-flex align-items-center text-decoration-none" style={{ color: 'var(--text-primary)' }}>
                        <img 
                            src={logo}
                            alt="Roastique Logo" 
                            width="30" 
                            height="30" 
                            className="me-2" 
                            style={{ objectFit: 'contain' }}
                        />
                        Roastique.
                    </Link>
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="d-flex flex-column p-2">
                
                <NavigationLinks 
                    isMobile={true} 
                    isDesktopCollapsed={false} 
                    isActive={isActive} 
                    onLinkClick={onHide} 
                />

                <div className="mt-auto p-3">
                    <Button variant="link" onClick={handleLogout} className="text-decoration-none text-muted d-flex align-items-center w-100 px-3 py-3 rounded hover-bg-light">
                        <FiLogOut size={22} /> <span className="ms-3 fw-bold">Logout</span>
                    </Button>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default MobileOffcanvasDrawer;