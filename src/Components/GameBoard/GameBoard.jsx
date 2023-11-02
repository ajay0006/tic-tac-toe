import {useState} from "react";

const gameBoardDefault = Array(3).fill(new Array(3).fill(null))

export default function GameBoard() {
    const [gameBoard, setGameBoard] = useState(gameBoardDefault)
    return (
        <ol id='game-board'>
            {gameBoardDefault.map
                ((row, rowIndex) =>
                        <li key={rowIndex}>
                            <ol>
                                {row.map((colSymbol, colIndex) =>
                                    <li key={colIndex}>
                                        <button>
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