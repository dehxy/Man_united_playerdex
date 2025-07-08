import React from 'react';
import './PlayerCard.css';

const PlayerCard = ({ player }) => {
    return (
        <div className="player-card">
            <img src={player.img} alt={player.name} />
            <h2>{player.name}</h2>
            <div className="player-details">
                <p>
                    <strong>Position:</strong> {player.Position.join(', ')}
                </p>
                <p>
                    <strong>Height:</strong> {player.height} cm
                </p>
                <p>
                    <strong>Weight:</strong> {player.weight} kg
                </p>
                <p>
                    <strong>Team:</strong> {player.team}
                </p>
            </div>
        </div>
    );
};

export default PlayerCard;