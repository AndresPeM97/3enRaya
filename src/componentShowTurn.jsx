import { Square } from "./componentSquare"
export const ShowTurn = ({ganador, resetGame}) => {

    if (ganador === null) {return null}

    return(
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