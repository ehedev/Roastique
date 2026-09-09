import React from 'react';
import { Badge } from 'react-bootstrap';
import { useReservations } from '../../../hooks/dashboard/useReservations';
import AdminHeader from '../../../components/dashboard/AdminHeader';
import ReservationsTable from '../../../features/dashboard/reservations/ReservationsTable';
import MenuDeleteModal from '../../../components/ui/MenuDeleteModal';

const ReservationsManagementSection = () => {
    const { 
        reservations, tables, checkAvailability, handleStatusChange,
        showDeleteModal, setShowDeleteModal, reservationToDelete, 
        setReservationToDelete, handleDeleteClick, handleConfirmDelete
    } = useReservations();
    return (
        <section className="d-flex flex-column h-100 animation-fade-in">
            <AdminHeader 
                title="Reservations Management" 
                subtitle="Manage incoming booking requests and table availability." 
                capacityData={tables}
            />

            <ReservationsTable 
                reservations={reservations}
                onStatusChange={handleStatusChange}
                onDeleteClick={handleDeleteClick} 
                checkAvailability={checkAvailability}
            />

            <MenuDeleteModal
                show={showDeleteModal}
                onHide={() => {
                    setShowDeleteModal(false);
                    setReservationToDelete(null);
                }}
                onConfirm={handleConfirmDelete}
                itemName={`Reservation "${reservationToDelete?.id}"`}
            />
        </section>
    );
};

export default ReservationsManagementSection;