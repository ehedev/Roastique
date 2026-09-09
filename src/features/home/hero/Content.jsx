import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Content = () => {
    return (
        <div 
            className="hero-content position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center px-3"
        >
            <div 
                className="text-center p-4 p-md-5 shadow-lg w-100"
                style={{ 
                    maxWidth: '750px',
                    border: '1px solid rgba(244, 241, 234, 0.6)',
                    background: 'rgba(244, 241, 234, 0.7)',
                    backdropFilter: 'blur(6px)',
                    WebkitBackdropFilter: 'blur(6px)'
                }}
            >
                <h1 style={{ 
                    fontSize: 'clamp(2.5rem, 5vw, 5rem)', 
                    lineHeight: 1.1,
                    letterSpacing: '-1px',
                    marginBottom: '1.5rem',
                    color: 'var(--text-primary)'
                }}>
                    Mastering the <br/>
                    <span style={{ fontStyle: 'italic', color: 'var(--accent-color)' }}>Culinary Canvas</span>
                </h1>
                
                <p style={{ 
                    fontSize: '1rem', 
                    color: 'var(--text-secondary)',
                    marginBottom: '2rem',
                    lineHeight: 1.8
                }}>
                    Immerse yourself in a space where architectural design meets artisanal roasting. A true editorial dining experience.
                </p>
                
                <Button 
                    as={Link} to="/reservations"
                    className="btn-roastique rounded-0 px-4 px-md-5 py-3 border-0 shadow-sm fw-bold text-uppercase"
                >
                    Reserve Your Table
                </Button>
            </div>
        </div>
    );
};

export default Content;