import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../store/AuthContext';

export const useAdminLayout = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const [isDesktopCollapsed, setIsDesktopCollapsed] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const isActive = (path) => location.pathname === path;
    const sidebarWidth = isDesktopCollapsed ? '80px' : '260px';

    return {
        isDesktopCollapsed, setIsDesktopCollapsed,
        showMobileMenu, setShowMobileMenu,
        handleLogout, isActive, sidebarWidth
    };
};