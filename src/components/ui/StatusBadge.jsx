import React from 'react';
import { Badge } from 'react-bootstrap';

const StatusBadge = ({ status }) => {
    switch (status) {
        case 'Confirmed':
            return ( <Badge bg="success" className="px-3 py-2 rounded-pill fw-normal text-uppercase" style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>confirmed</Badge> );
        case 'Cancelled':
            return ( <Badge bg="danger" className="px-3 py-2 rounded-pill fw-normal text-uppercase" style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>cancelled</Badge> );
        default:
            return ( <Badge bg="warning" text="dark" className="px-3 py-2 rounded-pill fw-normal text-uppercase" style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>pending</Badge> );
    }
};

export default StatusBadge;