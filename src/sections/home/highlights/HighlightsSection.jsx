import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../../features/home/highlights/Header';
import HighlightItems from '../../../features/home/highlights/HighlightItems';

const HighlightsSection = () => {

    return (
        <section className='py-5' style={{ backgroundColor: 'var(--bg-primary)' }}>
            <Container className='py-5'>
                <Header />
                <HighlightItems />
            </Container>
        </section>
    );
};

export default HighlightsSection;