import { useState } from "react";
import "./App.css"
export default function App() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    const winner = calculateWinner(board);
    const isDraw = !winner && board.every(Boolean);

    function handleClick(index) {
        if (board[index] || winner) return;

        const nextBoard = board.slice();
        nextBoard[index] = isXNext ? "X" : "O";

        setBoard(nextBoard);
        setIsXNext(!isXNext);
    }

    function resetGame() {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
    }

    function statusMessage() {
        if (winner) return `Winner: ${winner}`;
        if (isDraw) return "Draw!";
        return `Next player: ${isXNext ? "X" : "O"}`;
    }

    return (
        <div className="app">
            <h1>3×3 Cross Game</h1>

            <div className="status">{statusMessage()}</div>

            <div className="board">
                {board.map((cell, i) => (
                    <button
                        key={i}
                        className="cell"
                        onClick={() => handleClick(i)}
                    >
                        {cell}
                    </button>
                ))}
            </div>

            <button className="reset" onClick={resetGame}>
                Reset
            </button>
        </div>
    );
}

function calculateWinner(board) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let [a, b, c] of lines) {
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return null;
}
