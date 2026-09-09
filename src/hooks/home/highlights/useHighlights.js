import { useNavigate } from 'react-router-dom';
import { useRestaurant } from '../../../store/RestaurantContext';

export const useHighlights = () => {
    const { menu } = useRestaurant();
    const navigate = useNavigate();

    const HighlightItems = menu.filter(item => item.isAvailable).slice(0, 3);

    const handleItemMenu = (itemId) => {
        navigate('/reservations', { state: { preSelectedItemId: itemId } });
        window.scrollTo(0, 0); 
    };

    return { HighlightItems, handleItemMenu };
};