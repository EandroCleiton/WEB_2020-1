import { SIGNUP_SUCCESS, SIGNUP_ERROR, SIGNIN_SUCCESS,SIGNIN_ERROR,SIGNOUT_SUCCESS,SIGNOUT_ERROR} from './actionsTypes'
import firebase from '../../utils/firebase'

export const signup = (email, password) => {
    return dispatch => {
        try{
            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(
                    ()=>{
                        firebase.auth().onAuthStateChanged(
                            (user)=>{
                                if (user) {
                                    dispatch({
                                        type:SIGNUP_SUCCESS,
                                        payload:{
                                            authMessage:`cadastro efetuado com sucesso`,
                                            userMail:user.email}
                                    })
                                }else{
                                    dispatch({
                                        type:SIGNUP_ERROR,
                                        payload:{
                                            authMessage:`Não foi possível conectar`}
                                    })
                                }
                            }
                        )
                    }
                )
                .catch(
                    (error)=>{
                        dispatch({
                            type: SIGNUP_ERROR,
                            payload: { authMessage: `Erro na criação do usuário: ${error}` }
                        })
                    }
                )
   
        }catch(error){
            dispatch({
                type: SIGNUP_ERROR,
                payload: { authMessage: `Erro na conexão com o firebase: ${error}` }
            })
        }
    }
}

export const signin = (email, password,callback) => {
    return dispatch => {
        try{
            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(
                   (data)=>{
                       dispatch({
                           type: SIGNIN_SUCCESS,
                           payload:{
                               authMessage:`Login efetuado com sucesso`,
                                userMail: data.user.email }
                       })
                       callback()
                   }
                )
                .catch(
                    (error)=>{
                        dispatch({
                            type: SIGNIN_ERROR,
                            payload: { authMessage: `Erro no login do usuário: ${error}` }
                        })
                        callback()
                    }
                )
   
        }catch(error){
            dispatch({
                type: SIGNIN_ERROR,
                payload: { authMessage: `Erro na conexão com o firebase: ${error}` }
            })
            callback()
        }
    }
}


export const signout = (callback) => {
    return dispatch => {
        try {
            firebase
                .auth()
                .signOut()
                .then(
                    () => {
                        dispatch({
                            type: SIGNOUT_SUCCESS,
                            payload: { authMessage: `Signout efetuado com sucesso`, verified: false }
                        })
                        callback()
                    }
                )
                .catch(
                    (error) => {
                        dispatch({
                            type: SIGNOUT_ERROR,
                            payload: { authMessage: `Erro logout: ${error}` }
                        })
                        callback()
                    }
                )

        } catch (error) {
            dispatch({
                type: SIGNOUT_ERROR,
                payload: { authMessage: `Erro na conexão com o firebase: ${error}` }
            })
            callback()
        }
    }
}
