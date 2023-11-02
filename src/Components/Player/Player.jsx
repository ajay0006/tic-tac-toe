import {useState} from "react";

export default function Player({name, symbol}) {
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
        <li>
            <span className="player">
                {playerNameElement}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={onClickEdit}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}