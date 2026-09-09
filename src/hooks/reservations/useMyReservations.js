import { useState, useEffect } from 'react';
import { useRestaurant } from '../../store/RestaurantContext';

export const useMyReservations = () => {
    const { reservations, menu } = useRestaurant();
    const [myReservations, setMyReservations] = useState([]);

    useEffect(() => {
        const guestIds = JSON.parse(localStorage.getItem('roastique_guest_ids')) || [];
        
        const filteredBookings = reservations
            .filter(res => guestIds.includes(res.id))
            .map(res => {
                const [year, month, day] = res.date.split('-');
                const dateObj = new Date(year, month - 1, day);
                
                const formattedDate = {
                    dayName: dateObj.toLocaleDateString('en-US', { weekday: 'long' }), 
                    month: dateObj.toLocaleString('en-US', { month: 'short' }).toUpperCase(),
                    dayNum: dateObj.getDate().toString().padStart(2, '0'),
                    year: dateObj.getFullYear() 
                };

                // format to 12-hour AM/PM time
                const [hourStr, minStr] = res.time.split(':');
                const hour = parseInt(hourStr, 10);
                const ampm = hour >= 12 ? 'PM' : 'AM';
                const hour12 = hour % 12 || 12;
                const formattedTime = `${hour12}:${minStr} ${ampm}`;

                // preOrder details and quantities
                const preOrderDetails = (res.preOrder || []).map(itemId => {
                    const menuItem = menu.find(m => m.id === itemId);
                    if (!menuItem) return null;

                    const quantity = res.preOrderQuantities?.[itemId] || 1;

                    return { ...menuItem, quantity };
                }).filter(Boolean);

                return {
                    ...res,
                    formattedDate,
                    formattedTime,
                    preOrderDetails
                };
            });

        setMyReservations(filteredBookings);
    }, [reservations, menu]); 

    return { myReservations };
};