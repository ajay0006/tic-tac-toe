import {useState} from "react";

const gameBoardDefault = Array(3).fill(new Array(3).fill(null))

export default function GameBoard() {
    const [gameBoard, setGameBoard] = useState(gameBoardDefault)

    function onClickGameSquare(rowIndex, colIndex) {
        setGameBoard(prevState => {
            // I am deep copying the previous state array, now because it is a matrix,
            // I am using the spread operator twice
            // once for the whole array, and another time for the individual array using the map feature
            const prevGameBoard = [...prevState.map(innerArray => [...innerArray])]
            // update the array where the square was clicked, which matches with the index on the array
            prevGameBoard[rowIndex][colIndex] = "X"

            return prevGameBoard
        })
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