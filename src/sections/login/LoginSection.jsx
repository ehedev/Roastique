import React from 'react';
import LoginForm from '../../features/login/LoginForm';
import { Container, Card } from 'react-bootstrap';
import { useImages } from '../../hooks/useImages';

const LoginSection = () => {
    const { logo } = useImages;
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
                    <div className="d-flex align-items-center justify-content-center mb-2">
                        <img 
                            src={logo}
                            alt='Roastique Logo'
                            width='35'
                            height='35'
                            className='me-2'
                            style={{ objectFit: 'contain' }}
                        />
                        <h2 className="mb-0" style={{ fontSize: '2.5rem' }}>Roastique.</h2>
                    </div>
                    <p style={{ color: 'var(--text-secondary)' }}>Staff Portal Login</p>
                </div>

                <LoginForm />
            </Card>

        </Container>
    );
};

export default LoginSection;