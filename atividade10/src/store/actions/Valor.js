import {NOVO_VALOR} from './types'
export function mudarValor(valor){
    return {
        type: NOVO_VALOR,
        payload: valor
    }
}

export default mudarValor