import { useState } from 'react';
import { useRestaurant } from "../../store/RestaurantContext";

export const renderTableBadge = (count) => {
    if (count <= 1) return { color: 'var(--bs-danger)' };
    if (count <= 3) return { color: 'var(--accent-color)' };
    return { color: 'var(--bs-success)' };
};

export const useReservations = () => {
    const { reservations, tables, updateReservationStatus, deleteReservation } = useRestaurant();

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [reservationToDelete, setReservationToDelete] = useState(null);

    // <<  Tables Inventory  >> //

    const getRequiredTableType = (guests) => {
        const numGuests = Number(guests);
        if (numGuests <= 2) return 'small';
        if (numGuests <= 4) return 'medium';
        if (numGuests <= 6) return 'large';
        return 'private';
    };

    const timeToMinutes = (timeStr) => {
        const [hours, minutes] = timeStr.split(':').map(Number);
        return (hours * 60) + minutes;
    };

    const checkAvailability = (date, time, guests) => {
        if (!tables || !tables.small) return null; 

        const tableType = getRequiredTableType(guests);
        const totalTablesOfType = tables[tableType].count;

        const newResMins = timeToMinutes(time);

        const confirmedBookings = reservations.filter(res => {
            if (res.status !== 'Confirmed' || res.date !== date || getRequiredTableType(res.guests) !== tableType) {
                return false;
            }

            const existResMins = timeToMinutes(res.time);
            return Math.abs(existResMins - newResMins) < 120;
        }).length;

        const tablesAvailable = totalTablesOfType - confirmedBookings;

        return {
            tableType,
            available: tablesAvailable,
            total: totalTablesOfType,
            isAvailable: tablesAvailable > 0
        };
    };

    // <<  Tables Inventory  >> //
    const handleStatusChange = (id, newStatus) => {
        updateReservationStatus(id, newStatus);
    };
    
    const handleDeleteClick = (reservation) => {
        setReservationToDelete(reservation);
        setShowDeleteModal(true);
    };

    const handleConfirmDelete = () => {
        if (reservationToDelete) {
            deleteReservation(reservationToDelete.id);
            setShowDeleteModal(false);
            setReservationToDelete(null);
        }
    };

    const formattedReservations = reservations.map(res => {
        const [hourStr, minStr] = res.time.split(':');
        const hour = parseInt(hourStr, 10);
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const hour12 = hour % 12 || 12;
        
        return {
            ...res,
            formattedTime: `${hour12}:${minStr} ${ampm}`
        };
    });

    return {
        reservations: formattedReservations,
        tables,
        checkAvailability,
        handleStatusChange,
        showDeleteModal, 
        setShowDeleteModal,
        reservationToDelete, 
        setReservationToDelete,
        handleDeleteClick, 
        handleConfirmDelete
    };
};