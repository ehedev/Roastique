import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FiMenu, FiChevronLeft, FiLogOut } from 'react-icons/fi';
import NavigationLinks from './NavigationLinks';
import { useImages } from '../../../hooks/useImages';

const DesktopSidebar = ({ sidebarWidth, isDesktopCollapsed, toggleCollapse, handleLogout, isActive }) => {
    const { logo } = useImages;
    return (
        <div 
            className="d-none d-lg-flex flex-column position-fixed top-0 bottom-0 border-end shadow-sm" 
            style={{ 
                width: sidebarWidth, 
                backgroundColor: 'var(--bg-primary)', 
                transition: 'width 0.3s ease-in-out',
                zIndex: 1040
            }}
        >
            <div className="d-flex align-items-center justify-content-between p-4 border-bottom" style={{ height: '80px' }}>
                {!isDesktopCollapsed && (
                    <Link to="/" className="d-flex align-items-center fw-bold fs-4 text-decoration-none text-nowrap overflow-hidden" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
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
                )}
                <Button variant="link" className="closeButton text-dark p-0 ms-auto" onClick={toggleCollapse}>
                    {isDesktopCollapsed ? <FiMenu size={24} /> : <FiChevronLeft size={24} />}
                </Button>
            </div>

            <div className="flex-grow-1 overflow-hidden mt-2">
                <NavigationLinks 
                    isMobile={false} 
                    isDesktopCollapsed={isDesktopCollapsed} 
                    isActive={isActive} 
                />
            </div>

            <div className="p-3 border-top">
                <Button 
                    variant="link" 
                    onClick={handleLogout}
                    className="sidebarBtn text-decoration-none text-muted d-flex align-items-center w-100 py-3 rounded"
                    title={isDesktopCollapsed ? "Logout" : ""}
                >
                    <FiLogOut size={22} />
                    {!isDesktopCollapsed && <span className="ms-3 fw-bold text-nowrap">Logout</span>}
                </Button>
            </div>
        </div>
    );
};

export default DesktopSidebar;