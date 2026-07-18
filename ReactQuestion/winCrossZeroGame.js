import React from 'react';
import { useState, useEffect, useMemo } from 'react'
import './styles.css';

function App() {
    const [data, setData] = useState(Array(9).fill(null));
    const [user, setUser] = useState("p1");
    const [winner, setWinner] = useState()

    const handleChange = (i) => {
        // Prevent overwriting existing move

        if (data[i] || winner) return;
        const dataSet = [...data]

        dataSet[i] = user === "p1" ? "0" : "X";

        const win = checkWinning(dataSet)
        setUser(prev => (prev === "p1" ? "p2" : "p1"));
        setData(dataSet)
        setWinner(win)
    };

    const generateWinningPattern = (size) => {
        let patterns = [];

        for (let row = 0; row < size; row++) {
            const rowPattern = []

            for (let column = 0; column < size; column++) {
                rowPattern.push(row * size + column)
            }
            patterns.push(rowPattern)
        }

        for (let col = 0; col < size; col++) {
            const colPattern = []

            for (let row = 0; row < size; row++) {
                colPattern.push(row * size + col)
            }
            patterns.push(colPattern)
        }

        let mainDiagnal = []
        for (let main = 0; main < size; main++) {
            mainDiagnal.push(main * size + main)
        }

        patterns.push(mainDiagnal)

        let crossPtrn = []
        for (let cross = 0; cross < size; cross++) {
            crossPtrn.push(cross * size + (size - 1 + cross))
        }

        patterns.push(crossPtrn)

        return patterns
    }

    const winningPatterns = generateWinningPattern(3);


    const checkWinning = (board) => {
        for (let [a, b, c] of winningPatterns) {
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a]
            }
        }

        return null
    }

    console.log(data);

    return (
        <div className='d-grid'>
            {data.map((e, index) => {
                return <div onClick={() => handleChange(index)} key={index}>{e}</div>
            })}

        </div>
    )
}

export default App
