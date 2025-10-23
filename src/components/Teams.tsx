import React from 'react';
import type { TeamMember } from '../types';
import './Teams.css';

const Teams: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Imtiaz Khaled',
      role: 'vibe coder',
      bio: 'vibe coding a lot'
    },
    {
      id: '2',
      name: 'Mushfiq Rashid',
      role: 'general nel',
      bio: 'is called general nel'
    }
  ];

  return (
    <section className="teams" id="teams">
      <div className="container">
        <h2 className="section-title">Our Team</h2>
        <p className="section-subtitle">Meet the talented people behind our games</p>
        
        <div className="teams-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-avatar">
                <div className="avatar-placeholder">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <div className="team-content">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
