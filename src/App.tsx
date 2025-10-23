import React from 'react';
import Hero from './components/Hero';
import Games from './components/Games';
import Teams from './components/Teams';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Hero />
      <Games />
      <Teams />
    </div>
  );
};

export default App
