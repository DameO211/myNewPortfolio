import React, { useState, useEffect } from 'react';
import './HeroSection.css';


const HeroSection = () => {
    const [animationIndex, setAnimationIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimationIndex(animationIndex => (animationIndex + 1) % 3);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    function getSubtitle() {
        switch (animationIndex) {
            case 0:
                return 'Web Developer';
            case 1:
                return 'Designer';
            case 2:
                return 'Gamer';
            default:
                return '';
        }
    }

    return (

        <div className="hero-section">
            <img src="https://media.licdn.com/dms/image/C4D03AQGGmpZrvHaCEA/profile-displayphoto-shrink_800_800/0/1597757679002?e=2147483647&v=beta&t=5IAI19glLV9X5XOFkrVnmMJ_ZJ7bYE9aZlx9aPb7wTc"
                 alt ="Image of me"
                 style={{
                     borderRadius: '50%',
                     width: '200px',
                     height: '200px',
                     boxShadow: '0 0 0 6px red'
                 }}

            />

            <h1 className="hero-name">Dameon Cole</h1>
            <div className="hero-subtitle">
        <span className={`subtitle-item ${animationIndex === 0 ? 'slide-in' : ''}`}>
          {animationIndex === 0 && (
              <React.Fragment>
                  <span className="typing-animation">Web Developer</span>
              </React.Fragment>
          )}
        </span>
                <span className={`subtitle-item ${animationIndex === 1 ? 'slide-in' : ''}`}>
          {animationIndex === 1 && (
              <React.Fragment>
                  <span className="typing-animation">Designer</span>
              </React.Fragment>
          )}
        </span>
                <span className={`subtitle-item ${animationIndex === 2 ? 'slide-in' : ''}`}>
          {animationIndex === 2 && (
              <React.Fragment>
                  <span className="typing-animation">Gamer</span>
              </React.Fragment>
          )}
        </span>
            </div>
        </div>
    );
};

export default HeroSection;
