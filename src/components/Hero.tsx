import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const scrollToGames = () => {
    const gamesSection = document.getElementById('games');
    if (gamesSection) {
      gamesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Khela Hobe Game Studios</h1>
        <p className="hero-tagline">Bringing the joy of Bangladeshi culture into the world of gaming.</p>
        <div className="hero-cta">
          <button className="cta-button" onClick={scrollToGames}>Explore Our Games</button>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-graphic">
          <div className="game-icon">🎮</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
