import { useState, useEffect } from 'react';
import { useImages } from '../../useImages';

export const useHero = () => {
    const { HERO_IMAGES } = useImages;
    const [activeIndex, setActiveIndex] = useState(0);
    const [isReady, setIsReady] = useState(false);
    
    useEffect(() => {
        const entryTimeout = setTimeout(() => {
            setIsReady(true);
        }, 50);

        const interval = setInterval(() => {
            setActiveIndex((current) => (current === HERO_IMAGES.length - 1 ? 0 : current + 1));
        }, 5000);

        return () => {
            clearTimeout(entryTimeout);
            clearInterval(interval);
        };
    }, []);

    return { HERO_IMAGES, activeIndex, isReady };
};