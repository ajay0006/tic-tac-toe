import Player from "./Components/Player/Player.jsx";
import GameBoard from "./Components/GameBoard/GameBoard.jsx";

function App() {

    return (
        <main>
            <div id="game-container">
                <ol id="players">
                    <Player symbol='X' name='Player 1'/>
                    <Player symbol='O' name='Player 2'/>
                </ol>
                <GameBoard/>
            </div>
        </main>
    )
}

export default App
