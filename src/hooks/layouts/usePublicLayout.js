import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export const usePublicLayout = () => {
    const [expanded, setExpanded] = useState(false);
    
    const location = useLocation();
    
    const isReservationPage = location.pathname === '/reservations';

    return { expanded, setExpanded, isReservationPage };
};