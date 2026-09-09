import React from 'react';
import HeroSection from '../../sections/home/hero/HeroSection';
import HighlightsSection from '../../sections/home/highlights/HighlightsSection'
import PhilosophySection from '../../sections/home/philosophy/PhilosophySection'
import MenuSection from '../../sections/home/menu/MenuSection';
import LocationSection from '../../sections/home/location/LocationSection';

const LandingPage = () => {
    return (
        <>
            <HeroSection />
            <HighlightsSection />
            <PhilosophySection />
            <MenuSection />
            <LocationSection />
        </>
    );
};

export default LandingPage;