import React from 'react'
import { Card, Button } from '@khelahobe/kui'
import type { Game } from '../types'
import './Games.css'

const Games: React.FC = () => {
  const games: Game[] = [
    {
      id: '1',
      name: 'Chor Police Daktar Babu',
      link: 'https://chor.khelahobe.store/',
      description: 'Bluff, deduce, and survive. Everyone\'s a suspect.',
    },
    {
      id: '2',
      name: 'Ekdaam',
      link: 'https://ekdaam.khelahobe.store/',
      description: 'How well do you know the bazaar? Beat the daam — or the daam beats you.',
    },
    {
      id: '3',
      name: 'Dhaka Yard',
      description: 'Chase or be chased through the streets of Dhaka.',
      underConstruction: true,
    },
  ]

  return (
    <section className="games" id="games">
      <div className="games__container">
        <div className="games__header">
          <h2 className="games__title">Our Games</h2>
          <p className="games__subtitle">Discover the amazing games we&apos;ve created</p>
        </div>
        <div className="games__grid">
          {games.map((game) => (
            <Card key={game.id}>
              <Card.Header>{game.name}</Card.Header>
              {game.description && (
                <Card.Body>
                  <p className="game-card__desc">{game.description}</p>
                </Card.Body>
              )}
              <Card.Footer>
                {game.underConstruction ? (
                  <Button variant="secondary" size="md" disabled>Under Construction</Button>
                ) : (
                  <a href={game.link} target="_blank" rel="noopener noreferrer" className="game-card__link">
                    <Button variant="primary" size="md">Play Now</Button>
                  </a>
                )}
              </Card.Footer>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Games
