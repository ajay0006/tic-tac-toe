import {useState} from "react";

export default function Player({name, symbol, isPlayerActive}) {
    const [isEditing, setIsEditing] = useState(false)
    const [playerName, setPlayerName] = useState(name)
    let playerNameElement = <span className='player-name'>{playerName}</span>


    function onClickEdit() {
        setIsEditing(prevState => !prevState)
        // setIsEditing(!isEditing)
    }

    function onPlayerNameChange(e) {
        setPlayerName(e.target.value)
    }

    if (isEditing) {
        playerNameElement = <input type='text' required value={playerName} onChange={onPlayerNameChange}/>
    }

    return (
        // if the isPlayer is true, it means it was an X and O was a false, X was false, and O is true, then
        // isPlayer would be active for the O component but false aka not active for the X component
        <li className={isPlayerActive? 'active': undefined }>
            <span className="player">
                {playerNameElement}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={onClickEdit}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}