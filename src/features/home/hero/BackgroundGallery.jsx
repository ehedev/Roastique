import React from 'react';
import { useHero } from '../../../hooks/home/hero/useHero';

const BackgroundGallery = () => {
    const { HERO_IMAGES, activeIndex, isReady } = useHero();
    
    return (
        <>
            {HERO_IMAGES.map((img, index) => {
                const isActive = index === activeIndex;
                const shouldAnimate = isActive && (index !== 0 || isReady);

                return (
                    <div 
                        key={index} 
                        className={`hero-slide ${isActive ? 'active' : ''} ${shouldAnimate ? 'animate-zoom' : ''}`}
                    >
                        <img 
                            src={img} 
                            alt={`Slide ${index + 1}`} 
                            className="w-100 h-100 object-fit-cover" 
                        />
                    </div>
                );
            })}
        </>
    );
};

export default BackgroundGallery;