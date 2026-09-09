import React from 'react';
import { Outlet } from 'react-router-dom';
import PublicNavbar from '../components/layout/public/PublicNavbar';
import Footer from '../sections/home/footer/Footer';

const PublicLayout = () => {
    return (
        <section className='d-flex flex-column min-vh-100' style={{ backgroundColor: 'var(--bg-primary)'}}>

            <PublicNavbar />
            
            <main style={{ flexGrow: 1 }}>
                <Outlet />
            </main>

            <Footer />
            
        </section>
    );
};

export default PublicLayout;