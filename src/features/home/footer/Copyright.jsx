import React from 'react';
import { Link } from 'react-router-dom';

const Copyright = () => {
    return (
        <div className='text-center text-md-start mt-3 mt-md-0' style={{ fontSize: '0.8rem', letterSpacing: '1px' }}>
            &copy; {new Date().getFullYear()} <Link to="/" className='text-decoration-none footer-link'>Roastiue</Link>. All rights reserved.
        </div>
    );
};

export default Copyright;