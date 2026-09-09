import React from 'react';

const Header = ({ title, subtitle }) => {
    return (
        <div className="text-center mb-5 pb-3">
            <small className="text-uppercase fw-bold" style={{ color: 'var(--accent-color)', letterSpacing: '2px' }}>
                {subtitle}
            </small>
            <h2 className="display-5 mt-2 fw-bold" style={{ color: 'var(--text-primary)' }}>
                {title}
            </h2>
        </div>
    );
};

export default Header;