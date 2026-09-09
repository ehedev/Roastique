import React from 'react';
import { Container } from 'react-bootstrap';
import { useReservations } from '../../hooks/reservations/useReservations';
import Header from '../../features/reservations/Header'
import ReservationConfirmation from '../../features/reservations/ReservationConfirmation';
import ReservationForm from '../../features/reservations/ReservationForm';

const ReservationsSection = () => {
    const reservationData = useReservations();
    return (
        <Container className='py-5 animation-fade-in'>
            <Header subtitle="Secure Your Table" title="Reservations" />

            {reservationData.successData && (
                <ReservationConfirmation successData={reservationData.successData} />
            )}

            <ReservationForm reservationData={reservationData} />
        </Container>
    );
};
export default ReservationsSection;