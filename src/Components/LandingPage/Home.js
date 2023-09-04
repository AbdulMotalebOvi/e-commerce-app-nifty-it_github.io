import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import Products from './Products/Products';
import useTitle from '../Hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <section>
            <HeroSection />
            <Products />
        </section>
    );
};

export default Home;