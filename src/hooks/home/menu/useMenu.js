import { useRestaurant } from '../../../store/RestaurantContext';

export const useMenu = () => {
    const { menu } = useRestaurant();
    
    const menuByCategory = menu.filter(item => item.isAvailable).reduce((acc, item) => {
        if (!acc[item.category]) acc[item.category] = [];
        acc[item.category].push(item);
        return acc;
    }, {});

    const categories = Object.keys(menuByCategory);
    const midpoint = Math.ceil(categories.length / 2);
    const leftColCategories = categories.slice(0, midpoint);
    const rightColCategories = categories.slice(midpoint);

    return {
        categories, menuByCategory, leftColCategories, rightColCategories
    };
};