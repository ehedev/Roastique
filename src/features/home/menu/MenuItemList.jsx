import React from 'react';
import { useMenu } from '../../../hooks/home/menu/useMenu';
import { formatCurrency } from '../../../utils/formatCurrency';

const MenuItemList = ({ categoryName }) => {
    const { menuByCategory } = useMenu();
    
    const items = menuByCategory[categoryName];

    if (!items || items.length === 0) return null;

    return (
        <div className='mb-5'>
            <h4 className='text-uppercase pb-2 fw-bold' style={{ color: 'var(--accent-color)', letterSpacing: '2px' }}>
                {categoryName}
            </h4>
            
            <div className='mb-4' style={{ width: '60px', height: '2px', backgroundColor: 'var(--accent-color)' }} />
            
            <div className='d-flex flex-column gap-4'>
                {items.map(item => (
                    <div key={item.id}>
                        <div className='d-flex justify-content-between align-items-baseline mb-1'>
                            <h6 className='fw-bold mb-0' style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>
                                {item.name}
                            </h6>
                            <div
                                className='mx-3 flex-grow-1 position-relative'
                                style={{ borderBottom: '2px dotted rgba(44,30,22,0.2)', top: '-4px' }}
                            />
                            <span className='fw-bold' style={{ color: 'var(--accent-color)' }}>
                                {formatCurrency(item.price)}
                            </span>
                        </div>
                        <p className='text-muted mb-0' style={{ fontSize: '0.9rem', fontStyle: 'italic', paddingRight: '15%' }}>
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MenuItemList;