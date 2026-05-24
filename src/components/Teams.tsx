import React from 'react'
import { Card, Avatar, Badge } from '@khelahobe/kui'
import type { TeamMember } from '../types'
import './Teams.css'

const Teams: React.FC = () => {
  const team: TeamMember[] = [
    {
      id: '1',
      name: 'Imtiaz Khaled',
      role: 'chief vibe officer',
      bio: 'vibe coding a lot',
    },
    {
      id: '2',
      name: 'Mushfiq Rashid',
      role: 'the general nel',
      bio: 'is called general nel',
    },
    {
      id: '3',
      name: 'Nahian Alam',
      role: 'lore lord',
      bio: 'writes the lore',
    },
  ]

  return (
    <section className="teams" id="teams">
      <div className="teams__container">
        <div className="teams__header">
          <h2 className="teams__title">Our Team</h2>
          <p className="teams__subtitle">The people behind the games</p>
        </div>
        <div className="teams__grid">
          {team.map((member) => (
            <Card key={member.id}>
              <Card.Body className="team-card__body">
                <Avatar initial={member.name} size="xl" color="var(--kui-primary)" />
                <div className="team-card__info">
                  <h3 className="team-card__name">{member.name}</h3>
                  <Badge variant="default">{member.role}</Badge>
                  {member.bio && <p className="team-card__bio">{member.bio}</p>}
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Teams
