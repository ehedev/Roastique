import { useRestaurant } from '../../store/RestaurantContext';

export const useOverview = () => {
    const { menu, reservations } = useRestaurant();
    const totalMenuItems = menu?.length || 0;
    const pendingReservations = reservations?.filter(res => res.status === 'Pending').length || 0;
    
    const today = new Date();
    const localToday = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    const todaysBookings = reservations?.filter(res => res.date === localToday).length || 0;
    const soldOutItems = menu?.filter(item => !item.isAvailable) || [];

    // format time to 12-hour AM/PM
    const formatTime = (time24) => {
        const [hourStr, minStr] = time24.split(':');
        const hour = parseInt(hourStr, 10);
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const hour12 = hour % 12 || 12;
        return `${hour12}:${minStr} ${ampm}`;
    };

    const recent = (reservations?.slice(0, 5) || []).map(res => ({
        ...res,
        formattedTime: formatTime(res.time)
    }));
    
    const todaysReservations = (reservations?.filter(res => res.date === localToday) || []).map(res => ({
        ...res,
        formattedTime: formatTime(res.time)
    }));

    return {
        totalMenuItems, pendingReservations,
        todaysBookings, soldOutItems,
        recent, todaysReservations
    };
};