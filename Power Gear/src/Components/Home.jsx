import React from "react";
import Navbar from "./Navbarr";
import Banner from "./Banner";
import FeaturedProducts from "./FeaturedProducts";
import AboutUs from "./About";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <FeaturedProducts />
      <div  style={{
            color: "#023047",
            backgroundColor: "#FFB703",
          }}>
        <Typography
          variant="h2"
          gutterBottom
          component={Link}
          to="/about"
          style={{
            color: "#023047",
            backgroundColor: "#FFB703",
            marginLeft: "50px",
            textDecoration: 'none'
          }}
        >
          About Us
        </Typography>
        <Typography
           style={{
            color: "#023047",
            backgroundColor: "#FFB703",
            marginLeft: "50px",
            textDecoration: 'none'
          }}
          component={Link}
          to="/about"
        >
          <div>
            <h1>Power Gear: Fueling Your Potential</h1>
            <h2>Our Story</h2>
            <ul>
              <li>Born from the raw power of athletes pushing their limits.</li>
              <li>Built to empower athletes to conquer their goals.</li>
            </ul>
          </div>
        </Typography>
      </div>
    </div>
  );
}

export default Home;
