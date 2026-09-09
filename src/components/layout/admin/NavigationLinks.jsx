import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { FiSettings, FiList, FiCalendar, FiHome } from 'react-icons/fi';

const NavigationLinks = ({ isMobile, isDesktopCollapsed, isActive, onLinkClick }) => {
    const links = [
        { path: '/', name: 'Home', icon: <FiHome size={22} /> },
        { path: '/admin', name: 'Dashboard', icon: <FiSettings size={22} /> },
        { path: '/admin/menu', name: 'Menu', icon: <FiList size={22} /> },
        { path: '/admin/reservations', name: 'Reservations', icon: <FiCalendar size={22} /> },
    ];

    return (
        <Nav className="flex-column gap-2 mt-3 px-2 w-100">
            {links.map((item) => (
                <Nav.Link 
                    key={item.path}
                    as={Link} 
                    to={item.path} 
                    onClick={onLinkClick}
                    className={`d-flex align-items-center rounded py-3 px-3 ${isActive(item.path) ? 'fw-bold shadow-sm' : 'text-muted'}`}
                    style={{ 
                        backgroundColor: isActive(item.path) ? 'var(--text-primary)' : 'transparent',
                        color: isActive(item.path) ? 'var(--bg-primary)' : 'inherit',
                        justifyContent: (!isMobile && isDesktopCollapsed) ? 'center' : 'flex-start',
                        transition: 'all 0.2s ease-in-out'
                    }}
                    title={(!isMobile && isDesktopCollapsed) ? item.name : ""}
                >
                    <div className="d-flex align-items-center justify-content-center" style={{ width: '24px' }}>
                        {item.icon}
                    </div>
                    {(!isDesktopCollapsed || isMobile) && (
                        <span className="ms-3 text-nowrap">{item.name}</span>
                    )}
                </Nav.Link>
            ))}
        </Nav>
    );
};

export default NavigationLinks;