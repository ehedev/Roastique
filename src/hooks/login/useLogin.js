import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../store/AuthContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    email: yup.string().email('Must be a valid email').required('Email is required'),
    password: yup.string().required('Password is required')
});

export const useLogin = () => {
    const [authError, setAuthError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const { 
        register, 
        handleSubmit, 
        formState: { errors, isSubmitting } 
    } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data) => {
        setAuthError('');
        
        try { 
            const success = await login(data.email, data.password);
            
            if (success) {
                navigate('/admin');
            } else {
                setAuthError('Invalid email or password.');
            }
        } catch (err) {
            setAuthError('An error occurred during login.');
        }
    };

    return {
        register,
        errors,
        authError,
        isSubmitting,
        onSubmit: handleSubmit(onSubmit) 
    };
};