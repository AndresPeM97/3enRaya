import { useState } from "react"

const turns = {
    X: 'x',
    O: 'o'
}
const Square = ({ children, isSelected, updateBoard, index }) => {
    const className = `square ${isSelected ? 'is-selected' : ''}`
    const handleClick = () => {
        updateBoard(index)
    }
    return (
        <div onClick={handleClick} className = {className}>
            {children}
        </div>
    )
}

const saberGanador = (newBoard) => {
    let encontrado = null
    newBoard.forEach((casilla, index) => {
        let i = (index === 2 && index === 5) ? 2: 1
            i = (index === 3) ? 3 : i
        let posicion = 0
        while (encontrado === null && i <= 4 && casilla !== null){
            if(casilla === newBoard[index + i]){

                posicion = i
                console.log(posicion)
            }

            if(posicion !== 0 && casilla === newBoard[index - posicion] && index !== 2 && index !== 5){

                console.log(casilla)
                encontrado = casilla
            }
            i++
        }
    });

    return encontrado
}

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
                ganador !== null && (
                    <section className="winner">
                        <div className="text">
                            <h2>
                                {
                                    ganador === false ? 'Empate' : 'Ganó ' + ganador
                                }
                            </h2>
                            <header className="win">
                                {ganador && <Square>{ganador}</Square>}
                            </header>

                            <footer>
                                <button onClick={resetGame}>
                                    Empezar de nuevo
                                </button>
                            </footer>
                        </div>
                    </section>
                )
            }
        </main>
    )
}