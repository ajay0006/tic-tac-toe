import Player from "./Components/Player/Player.jsx";
import GameBoard from "./Components/GameBoard/GameBoard.jsx";
import {useState} from "react";

function App() {
    // this state will be passed to both the player component as a boolean value and to the GameBoard component as a char vale "X"
    // or "O"
    const [activePlayer, setActivePlayer] = useState("X")

    // function that sets the variable to x or o depending on whose turn it is
    // keep in mind this assumes the player with X starts first always
    function handleActivePlayer() {
        setActivePlayer((prevActivePlayer) => prevActivePlayer === "X" ? 'O': "X")
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className='highlight-player'>
                    {/*if the activePlayer value is x true is passed else false, vice versa for the twin component*/}
                    <Player symbol='X' name='Player 1' isPlayerActive = {activePlayer === "X"}/>
                    <Player symbol='O' name='Player 2' isPlayerActive= {activePlayer === "O"}/>
                </ol>
                {/*passing the function that modifies the activePlayer boolean to the GameBoard prop*/}
                {/*passing the activePlayer boolean to the GameBoard & Player prop as well*/}
                <GameBoard handleActivePlayer = {handleActivePlayer} activePlayer = {activePlayer}/>
            </div>
        </main>
    )
}

export default App
