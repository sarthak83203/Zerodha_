import React from 'react';
import Navbar from '../Navbar';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Footer from '../Footer';
function ProductPage() {
    return ( 
        <>
        <Navbar/>
        <Hero/>
        <LeftSection/>
        <RightSection/>
        <Footer/>
        </>
     );
}

export default ProductPage;