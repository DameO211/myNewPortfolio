import React from 'react';
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";


function Home() {
    return (
        <div>
            <Navbar />
            <HeroSection />

            <h1>Welcome to my website!</h1>
            <p>This is the homepage of my website. Thanks for visiting!</p>


        </div>

    );
}

export default Home;