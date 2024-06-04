import { useState } from "react"
import { turns } from "./application/constants"
import { saberGanador } from "./application/scripts"
import { Square } from "./componentSquare"
import { ShowTurn } from "./componentShowTurn"

export function App() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [turno, setTurno] = useState(turns.X)
    const [ganador, setGanador] = useState(null)

    const resetGame = () => {
        setBoard(Array(9).fill(null))
        setTurno(turns.X)
        setGanador(null)
    }

    const checkEndGame = (newBoard) => {
        return newBoard.every((Square) => Square !== null)
    }

    const updateBoard = (index) => {

        if (board[index] || ganador) return

        const newBoard = [...board]
        newBoard[index] = turno
        setBoard(newBoard)

        const newTurn = turno === turns.X ? turns.O : turns.X
        setTurno(newTurn)

        const newWinner = saberGanador(newBoard)
        if(newWinner !== null){
            setGanador(newWinner)
        }else if (checkEndGame(newBoard)){

        }
        
    }

    return (
        <main className="board">
            <h1>Gato</h1>
            <button onClick={resetGame}>
                Empezar de nuevo
            </button>
            <section className="game">
                {
                    board.map((_, index) => {
                        return (
                            <Square key = {index} index = {index} updateBoard={updateBoard}>
                                {board[index]}
                            </Square>
                        )
                    })
                }
            </section>
            <section className="turn">
                <Square isSelected = {turno === turns.X}>
                    {turns.X}
                </Square>
                <Square isSelected={turno === turns.O}>
                    {turns.O}
                </Square>
            </section>
            {
                <ShowTurn ganador = {ganador} resetGame={resetGame}/>
            }
        </main>
    )
}