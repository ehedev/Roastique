import React from 'react';
import { Link } from 'react-router-dom';
import { useLogin } from '../../hooks/login/useLogin';
import { Form, Button, Alert } from 'react-bootstrap';

const LoginForm = () => {
    const {
        register, errors, authError,
        isSubmitting, onSubmit
    } = useLogin();

    return (
        <>
            {authError && <Alert variant="danger" className="text-center">{authError}</Alert>}

            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-4">
                    <Form.Label style={{ fontWeight: 600, fontSize: '0.9rem' }}>Email Address</Form.Label>
                    <Form.Control
                        type="email"
                        {...register('email')}
                        placeholder="admin@roastique.com"
                        className={errors.email ? 'is-invalid' : ''}
                        style={{ padding: '0.75rem', borderColor: 'rgba(44, 30, 22, 0.2)' }}
                    />

                    <Form.Control.Feedback type="invalid">
                        {errors.email?.message}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-5">
                    <Form.Label style={{ fontWeight: 600, fontSize: '0.9rem' }}>Password</Form.Label>
                    <Form.Control
                        type="password"
                        {...register('password')}
                        placeholder="Enter your password"
                        className={errors.password ? 'is-invalid' : ''}
                        style={{ padding: '0.75rem', borderColor: 'rgba(44, 30, 22, 0.2)' }}
                    />

                    <Form.Control.Feedback type="invalid">
                        {errors.password?.message}
                    </Form.Control.Feedback>
                </Form.Group>

                <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-100 py-3"
                    style={{ 
                        backgroundColor: 'var(--text-primary)', 
                        borderColor: 'var(--text-primary)',
                        fontWeight: 600,
                        letterSpacing: '1px'
                    }}
                >
                    {isSubmitting ? 'AUTHENTICATING...' : 'SIGN IN'}
                </Button>

                <div className='mt-3'>
                    <Link to="/" className='text-decoration-none text-muted small'>
                        &larr; Back to Home
                    </Link>
                </div>
            </Form>
        </>
    );
};

export default LoginForm;