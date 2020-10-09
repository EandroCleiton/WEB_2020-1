import {createStore, combineReducers} from 'redux'
import {NOVO_VALOR} from './actions/types'

const reducers = combineReducers({
    
    Soma: function(state, action){
        switch(action.type){
            case NOVO_VALOR:
                return {
                    soma: action.payload
                }
            default: 
                return{
                    soma:0
                } 
        }
    },

    Maior : function(state, action){
        switch(action.type){
            case NOVO_VALOR:
                return{
                    maior: action.payload
                }
            default:
                return{
                    maior: 0
                }
        }
    },

    Multiplicacao: function (state, action) {
        switch(action.type){
            case NOVO_VALOR:
                return{
                    mult: action.payload
                }
            default:
                return{
                    mult: 0
                }
        }
    },

    Numero1: function (state, action) {
        return {
            numero1: 8
        }
    },

    Numero2: function (state, action) {
        return {
            numero2: 9
        }
    }

}
    
) 

function storeConfig(){
    return createStore(reducers)
}

export default storeConfig