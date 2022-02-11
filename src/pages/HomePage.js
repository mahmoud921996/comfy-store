import React from 'react';
import Contact from '../components/Contact';
import FeaturedProducts from '../components/FeaturedProducts';
import Footer from '../components/footer';
import Hero from '../components/Hero';
import Services from '../components/services';

const Home =()=>{
    return <div>
        <Hero/>
        <FeaturedProducts/>
        <Services/>
        <Contact/>
        <Footer/>
    </div>
}

export default Home;
