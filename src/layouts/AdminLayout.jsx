import React from 'react';
import { useAdminLayout } from '../hooks/layouts/useAdminLayout';
import MobileTopNavbar from '../components/layout/admin/MobileTopNavbar';
import MobileOffcanvasDrawer from '../components/layout/admin/MobileOffcanvasDrawer';
import DesktopSidebar from '../components/layout/admin/DesktopSidebar';
import MainContentArea from '../components/layout/admin/MainContentArea';

const AdminLayout = () => {
    const {
        isDesktopCollapsed, setIsDesktopCollapsed,
        showMobileMenu, setShowMobileMenu,
        handleLogout, isActive, sidebarWidth
    } = useAdminLayout();

    return (
        <div className="min-vh-100" style={{ backgroundColor: 'var(--bg-secondary)', '--sidebar-width': sidebarWidth }}>
            
            <MobileTopNavbar onOpenMenu={() => setShowMobileMenu(true)} />

            <MobileOffcanvasDrawer 
                show={showMobileMenu} 
                onHide={() => setShowMobileMenu(false)} 
                handleLogout={handleLogout} 
                isActive={isActive} 
            />

            <DesktopSidebar 
                sidebarWidth={sidebarWidth} 
                isDesktopCollapsed={isDesktopCollapsed} 
                toggleCollapse={() => setIsDesktopCollapsed(!isDesktopCollapsed)} 
                handleLogout={handleLogout} 
                isActive={isActive} 
            />

            <MainContentArea />

        </div>
    );
};

export default AdminLayout;