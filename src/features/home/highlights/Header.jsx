import React from 'react';

const Header = () => {
    return (
        <div className='text-center mb-5 pb-3'>
            <small
                className='text-uppercase fw-bold'
                style={{ color: 'var(--accent-color)', letterSpacing: '2px' }}
            >
                Curated Selections
            </small>
            <h2 className='display-5 mt-2 fw-bold' style={{ color: 'var(--text-primary)' }}>
                Signature Offerings
            </h2>
        </div>
    );
};

export default Header;