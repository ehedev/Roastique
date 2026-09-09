import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchInitialMenu, fetchInitialReservations, fetchInitialTables } from '../services/api';

const RestaurantContext = createContext();

export const RestaurantProvider = ({ children }) => {
    const [menu, setMenu] = useState([]);
    const [reservations, setReservations] = useState([]);
    const [tables, setTables] = useState(null);
    const [loading, setLoading] = useState(true);

    // Data Load
    useEffect(() => {
        const initializeData = async () => {
            try {
                const storedMenu = localStorage.getItem('roastique_menu');
                const storedReservations = localStorage.getItem('roastique_reservations');
                const storedTables = localStorage.getItem('roastique_tables');

                if (storedMenu) {
                    setMenu(JSON.parse(storedMenu));
                } else {
                    const initialMenu = await fetchInitialMenu();
                    setMenu(initialMenu);
                    localStorage.setItem('roastique_menu', JSON.stringify(initialMenu));
                }

                if (storedReservations) {
                    setReservations(JSON.parse(storedReservations));
                } else {
                    const initialReservations = await fetchInitialReservations();
                    setReservations(initialReservations);
                    localStorage.setItem('roastique_reservations', JSON.stringify(initialReservations));
                }

                if (storedTables) {
                    setTables(JSON.parse(storedTables));
                } else {
                    const initialTables = await fetchInitialTables();
                    setTables(initialTables);
                    localStorage.setItem('roastique_tables', JSON.stringify(initialTables));
                }

            } catch (error) {
                console.error('Error initializing restaurant data:', error);
            } finally {
                setLoading(false);
            }
        };

        initializeData();
    }, []);

    // Sync Menu State to localStorage
    const updateMenuState = (newMenu) => {
        setMenu(newMenu);
        localStorage.setItem('roastique_menu', JSON.stringify(newMenu));
    };

    // Sync Reservations to localStorage
    const updateReservationsState = (newReservations) => {
        setReservations(newReservations);
        localStorage.setItem('roastique_reservations', JSON.stringify(newReservations));
    };

    // << Menu CURD system >> //

    // Create
    const addMenuItem = (item) => {
        const newItem = {
            ...item,
            id: `m-${Date.now()}`,
            isAvailable: item.isAvailable ?? true,
        };
        const updated = [newItem, ...menu];
        updateMenuState(updated);
    };

    // Update
    const updateMenuItem = (id, updatedFields) => {
        const updated = menu.map((item) =>
            item.id === id ? { ...item, ...updatedFields } : item 
        );
        updateMenuState(updated);
    };

    // Toggle Availability of Inventory
    const toggleItemAvailability = (id) => {
        const updated = menu.map((item) => 
            item.id === id ? { ...item, isAvailable: !item.isAvailable } : item
        );
        updateMenuState(updated);
    };

    // Delete
    const deleteMenuItem = (id) => {
        const updated = menu.filter((item) => item.id !== id);
        updateMenuState(updated);
    };

    // << Reservations CRUD system >> //
    
    // Create
    const addReservation = (booking) => {
        const newBooking = {
            ...booking,
            id: `res-${Date.now()}`,
            status: 'Pending',
        };
        const updated = [newBooking, ...reservations];
        updateReservationsState(updated);
        return newBooking;
    };

    // Update (Confirm / Cancel)
    const updateReservationStatus = (id, status) => {
        const updated = reservations.map((res) => 
            res.id === id ? { ...res, status } : res
        );
        updateReservationsState(updated);
    };

    // Delete
    const deleteReservation = (id) => {
        const updated = reservations.filter((res) => res.id !== id);
        updateReservationsState(updated);
    };

    return (
        <RestaurantContext.Provider
            value={{
                menu,
                reservations,
                tables,
                loading,
                addMenuItem,
                updateMenuItem,
                toggleItemAvailability,
                deleteMenuItem,
                addReservation,
                updateReservationStatus,
                deleteReservation,
            }}
        >
            {children}
        </RestaurantContext.Provider>
    );
};

export const useRestaurant = () => {
    const context = useContext(RestaurantContext);
    if (!context) {
        throw new Error('useRestaurant must be used within a RestaurantProvider');
    }
    return context;
};