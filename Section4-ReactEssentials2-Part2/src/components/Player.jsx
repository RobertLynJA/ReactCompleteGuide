import { useState } from 'react';

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(isEditing => !isEditing);
    };

    return (
        <li>
            <span className="player">
                {isEditing ? 
                    <input type="text" required value={name}></input> : 
                    <span className="player-name">{name}</span>
                }
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}