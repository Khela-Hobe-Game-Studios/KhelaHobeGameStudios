import React from 'react'
import { TitleBlock, Button } from '@khelahobe/kui'
import './Hero.css'

const Hero: React.FC = () => {
  const scrollToGames = () => {
    document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <TitleBlock
        title="KhelaHobe"
        subtitle="Game Studios"
        tagline="Homegrown games with a Bangladeshi soul."
        watermark="খেলা হবে"
      />
      <Button variant="primary" size="lg" onClick={scrollToGames}>
        See Our Games
      </Button>
    </section>
  )
}

export default Hero
