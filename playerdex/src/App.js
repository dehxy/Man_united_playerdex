import React, { useState, useEffect } from 'react';
import playerData from './Playerdex.json';
import PlayerCard from './PlayerCard';
import './App.css';

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    setPlayers(playerData[0].Player);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Manchester United Playerdex</h1>
      </header>
      <div className="player-grid">
        {players.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
}

export default App;