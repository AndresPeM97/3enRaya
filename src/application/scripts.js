import { opciones } from "./constants";

export const saberGanador = (newBoard) => {


    for (const opcion of opciones){
        const [a, b, c] = opcion
        if(
            newBoard[a] &&
            newBoard[a] === newBoard[b] &&
            newBoard[a] === newBoard[c]
        ){
            return newBoard[a]
        }
    }

    return null
}
