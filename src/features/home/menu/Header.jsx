import React from 'react';
import { useImages } from '../../../hooks/useImages';

const Header = () => {
    const { logo } = useImages;
    return (
        <div className='text-center mb-5 pb-3'>
            <h2 className='d-flex align-items-center justify-content-center display-4 fw-bold' style={{ color: 'var(--text-primary)' }}>
                <img 
                    src={logo}
                    alt='Roastique Logo'
                    width='40'
                    height='40'
                    className='me-2'
                    style={{ objectFit: 'contain' }}
                />
                The Menu
                <img 
                    src={logo}
                    alt='Roastique Logo'
                    width='40'
                    height='40'
                    className='ms-2'
                    style={{ objectFit: 'contain' }}
                />
            </h2>
            <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--accent-color)', margin: '1.5rem auto' }} />
        </div>
    );
};

export default Header;