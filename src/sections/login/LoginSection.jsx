import React from 'react';
import LoginForm from '../../features/login/LoginForm';
import { Container, Card } from 'react-bootstrap';

const LoginSection = () => {
    return (
        <Container
            fluid 
            className="d-flex align-items-center justify-content-center animation-fade-in" 
            style={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}
        >
            <Card
                className="roastique-card p-5" 
                style={{ width: '100%', maxWidth: '420px', border: 'none' }}
            >
                <div className="text-center mb-5">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Roastique.</h2>
                    <p style={{ color: 'var(--text-secondary)' }}>Staff Portal Login</p>
                </div>

                <LoginForm />
            </Card>

        </Container>
    );
};

export default LoginSection;