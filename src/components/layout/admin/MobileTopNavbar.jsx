import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Button } from 'react-bootstrap';
import { FiMenu } from 'react-icons/fi';

const MobileTopNavbar = ({ onOpenMenu }) => (
    <Navbar className="d-lg-none w-100 position-fixed top-0 z-3 border-bottom shadow-sm px-3" style={{ backgroundColor: 'var(--bg-primary)', height: '70px' }}>
        <div className="d-flex align-items-center w-100 gap-2">
            <Button variant="link" onClick={onOpenMenu} className="text-dark p-0">
                <FiMenu size={28} />
            </Button>
            <Link to="/" className="fw-bold fs-4 text-decoration-none" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
                Roastique.
            </Link>
        </div>
    </Navbar>
);

export default MobileTopNavbar;