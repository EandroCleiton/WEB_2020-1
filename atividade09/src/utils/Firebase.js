import firebase from 'firebase/app'
import 'firebase/firestore'

import key from '../keys/Firebase'

export default class Firebase{
    constructor(){
        firebase.initializeApp(key)  
    }

    getFirestore(){
        return firebase.firestore()
    }

} 