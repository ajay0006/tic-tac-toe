import {useState} from "react";

const gameBoardDefault = Array(3).fill(new Array(3).fill(null))

// the prop activePlayer is required to set whichever players turn it is as active
// i am using lifting of ste up technique, this is possible because Player and Gameboard component
// have a parent component App
// now cos the player 1 and player 2 fields are in the player component, i am passing the active state up from
// player component to the App component and back down to the game board component
// since the value of active player is x or o i am also killing 2 birds with a stone by using it as the input variable for
// the gameBoard matrix
export default function GameBoard({handleActivePlayer, activePlayer}) {
    const [gameBoard, setGameBoard] = useState(gameBoardDefault)

    function onClickGameSquare(rowIndex, colIndex) {
        setGameBoard(prevState => {
            // I am deep copying the previous state array, now because it is a matrix,
            // I am using the spread operator twice
            // once for the whole array, and another time for the individual array using the map feature
            const prevGameBoard = [...prevState.map(innerArray => [...innerArray])]
            // update the array where the square was clicked, which matches with the index on the array
            prevGameBoard[rowIndex][colIndex] = activePlayer

            return prevGameBoard
        })

        handleActivePlayer()
    }
    return (
        <ol id='game-board'>
            {gameBoard.map
                ((row, rowIndex) =>
                        <li key={rowIndex}>
                            <ol>
                                {row.map((colSymbol, colIndex) =>
                                    <li key={colIndex}>
                                        <button onClick={() => onClickGameSquare(rowIndex, colIndex)}>
                                            {colSymbol}
                                        </button>
                                    </li>
                                )}
                            </ol>
                        </li>
                )
            }
        </ol>
    )
}