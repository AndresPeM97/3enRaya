export const saberGanador = (newBoard) => {
    let encontrado = null
    newBoard.forEach((casilla, index) => {
        let i = (index === 2 && index === 5) ? 2: 1
            i = (index === 3 ) ? 3 : i
        let posicion = 0
        while (encontrado === null && i <= 4 && casilla !== null){
            if(casilla === newBoard[index + i]){

                posicion = i
                console.log(posicion)
            }

            if(posicion !== 0 && casilla === newBoard[index - posicion] && index !== 2 && (index !== 5 || (index === 5 && i === 3))){

                console.log(casilla)
                encontrado = casilla
            }
            i++
        }
    });

    return encontrado
}
