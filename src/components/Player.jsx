import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {

    const [ playerName, setPlayerName ] = useState(initialName);
    const [ isEditing, setIsEditing ] = useState(false);

    function handleEditClick() {
        setIsEditing((editing) => !editing);
    }

    function handleChange(event) {
        setPlayerName(event.target.value)
    }

    let playerInfo = <span className="player-name">{playerName}</span>

    if (isEditing) {
        playerInfo = <input type="text" required Value={playerName} onChange={handleChange} />
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {playerInfo}
                <span className="player_symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}