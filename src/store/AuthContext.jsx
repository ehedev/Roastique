import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const savedToken = localStorage.getItem('roastique_admin_token');
        if (savedToken) {
            setToken(savedToken);
            setIsAuthenticated(true);
        }
        setLoading(false);
    }, []);

    // Simulate an API Login Request
    const login = async (email, password) => {
        if (email && password) {
            const fakeJwt = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.simulated_token_${Date.now()}`;

            localStorage.setItem('roastique_admin_token', fakeJwt);
            setToken(fakeJwt);
            setIsAuthenticated(true);
            return true; // Success
        }
        return false; // Failed
    };

    const logout = () => {
        localStorage.removeItem('roastique_admin_token');
        setToken(null);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, token, login, logout, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);