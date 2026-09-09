import React from 'react';
import BackgroundGallery from '../../../features/home/hero/BackgroundGallery'
import Overlay from '../../../features/home/hero/Overlay'
import Content from '../../../features/home/hero/Content'

const HeroSection = () => {
    return (
        <section className="position-relative w-100 overflow-hidden" style={{ height: '100vh' }}>
            <BackgroundGallery />
            <Overlay />
            <Content />
        </section>
    );
};

export default HeroSection;