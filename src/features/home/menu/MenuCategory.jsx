import React from 'react';
import { useMenu } from '../../../hooks/home/menu/useMenu';
import MenuItemList from './MenuItemList';

const MenuCategory = ({ side }) => {
    const { leftColCategories, rightColCategories } = useMenu();

    const categories = side === 'left' ? leftColCategories : rightColCategories;

    if (!categories || categories.length === 0) return null;

    return (
        <>
            {categories.map(categoryName => (
                <MenuItemList 
                    key={categoryName} 
                    categoryName={categoryName} 
                />
            ))}
        </>
    );
};

export default MenuCategory;