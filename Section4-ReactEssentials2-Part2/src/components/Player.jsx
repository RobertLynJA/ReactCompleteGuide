import { useState } from 'react';

export default function Player({ initalName, symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initalName);
     
    const handleEditClick = () => {
        setIsEditing(isEditing => !isEditing);
    };

    return (
        <li>
            <span className="player">
                {isEditing ? 
                    <input type="text" required value={playerName} onChange={e => setPlayerName(e.target.value)}></input> : 
                    <span className="player-name">{playerName}</span>
                }
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}