import React from 'react';
import Navbar from './Navbarr';
import Banner from './Banner';
import FeaturedProducts from './FeaturedProducts';
import AboutUs from './About';

function Home() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <FeaturedProducts />
      <AboutUs />
    </div>
  );
}

export default Home;