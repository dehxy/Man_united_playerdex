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
      <h1>Manchester United Playerdex</h1>
      <div className="player-list">
        {players.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
}

export default App;