import React from 'react';
import { Typography, Grid, Card, CardContent, Avatar } from '@mui/material';
import Navbar from './Navbarr';
import FitnessEquipment from './FitnessEquipment';
import SportsWear from './SportsWear';
import Nutrition from './Nutrition';

function AboutUs() {
  return (
    
    <div className="Categories">
    <Navbar/>
    {/* <FitnessEquipment />
    <SportsWear />
    <Nutrition />
    <AboutUs /> */}
  </div>
  );
}

export default AboutUs;