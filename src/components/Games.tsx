import React from 'react';
import type { Game } from '../types';
import './Games.css';

const Games: React.FC = () => {
  const games: Game[] = [
    {
      id: '1',
      name: 'Chor Police Daktar Babu',
      image: '/src/assets/cpdb.png',
      link: 'https://google.com',
      description: 'The classic game of mafia with a Bangladeshi twist.'
    }
  ];

  return (
    <section className="games" id="games">
      <div className="container">
        <h2 className="section-title">Our Games</h2>
        <p className="section-subtitle">Discover the amazing games we've created</p>
        
        <div className="games-grid">
          {games.map((game) => (
            <div key={game.id} className="game-card">
              <div className="game-image">
                <img 
                  src={game.image} 
                  alt={game.name}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5HYW1lIENhcmQ8L3RleHQ+Cjwvc3ZnPg==';
                  }}
                />
              </div>
              <div className="game-content">
                <h3 className="game-title">{game.name}</h3>
                {game.description && (
                  <p className="game-description">{game.description}</p>
                )}
                <a 
                  href={game.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="game-link"
                >
                  Play Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;
