import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useLocation } from 'react-router-dom';
import { useRestaurant } from '../../store/RestaurantContext';

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Must be a valid email').required('Email is required'),
    phone: yup.string().required('Phone number is required'),
    date: yup.string().required('Please select a date'),
    time: yup.string().required('Please select a time'),
    guests: yup.number().transform(value => (isNaN(value) ? undefined : value)).min(1, 'At least 1 guest').max(12, 'Max 12 guests').required('Required'),
    preOrder: yup.array().of(yup.string()),
    preOrderQuantities: yup.object().nullable()
});

export const useReservations = () => {
    const { menu, addReservation } = useRestaurant();
    const location = useLocation();
    
    const availableItems = menu.filter(item => item.isAvailable);
    const [successData, setSuccessData] = useState(null);

    const incomingItemId = location.state?.preSelectedItemId;

    const { register, handleSubmit, formState: { errors }, reset, watch, setValue } = useForm({
        resolver: yupResolver(schema),
        defaultValues: { 
            preOrder: incomingItemId ? [incomingItemId] : [], 
            preOrderQuantities: incomingItemId ? { [incomingItemId]: 1 } : {}
        }
    });

    useEffect(() => {
        if (incomingItemId && window.innerWidth < 992) {
            setTimeout(() => {
                const target = document.getElementById('pre-order-section');
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        }
    }, [incomingItemId]);

    const onSubmit = (data) => {
        const finalQuantities = {};
        (data.preOrder || []).forEach(itemId => {
            finalQuantities[itemId] = data.preOrderQuantities?.[itemId] || 1;
        });

        const reservationPayload = {
            ...data,
            preOrderQuantities: finalQuantities, 
            status: 'Pending',
            submittedAt: new Date().toISOString()
        };

        const createdBooking = addReservation(reservationPayload);

        // format to 12-hour AM/PM time
        const [hourStr, minStr] = createdBooking.time.split(':');
        const hour = parseInt(hourStr, 10);
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const hour12 = hour % 12 || 12;
        
        const bookingWithFormattedTime = {
            ...createdBooking,
            formattedTime: `${hour12}:${minStr} ${ampm}`
        };

        const existingGuestBookings = JSON.parse(localStorage.getItem('roastique_guest_ids')) || [];
        localStorage.setItem('roastique_guest_ids', JSON.stringify([createdBooking.id, ...existingGuestBookings]));

        setSuccessData(bookingWithFormattedTime); 
        
        window.scrollTo({ top: 0, behavior: 'smooth' });

        setTimeout(() => {
            try {
                if (typeof reset === 'function') reset();
            } catch (e) {
                console.warn("Form reset skipped.");
            }
        }, 100);
    };

    return {
        availableItems, successData, 
        register, handleSubmit, errors, 
        watch, setValue, onSubmit
    };
};