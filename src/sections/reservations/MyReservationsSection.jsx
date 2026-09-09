import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../features/reservations/Header'
import CurrentReservations from '../../features/reservations/CurrentReservationsSection';

const MyReservationsSection = () => {
    return (
        <Container className="py-5 mt-5 animation-fade-in" style={{ minHeight: '80vh' }}>
            <Header subtitle="Your Bookings" title="My Reservations" />
            <CurrentReservations />
        </Container>
    );
};

export default MyReservationsSection;