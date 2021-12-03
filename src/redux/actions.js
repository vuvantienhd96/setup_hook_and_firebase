
import * as types from './actionTypes';
import { auth } from '../firebase';


const registerStart = () => ({
    type: types.REGISTER_START
})

const registerSuccess = (user) => ({
    type: types.REGISTER_SUCCESS,
    payload: user
})

const registerError = (err) => ({
    type: types.REGISTER_ERROR,
    payload: err 
})

export const registerInitial = (email, password, username) => {
    return function(dispatch){
        dispatch(registerStart());
        auth.createUserWithEmailAndPassword (email, password).then(({user}) => {
            user.updateProfile({
                username
            })
            dispatch(registerSuccess(user))
        }).catch(err => dispatch(registerError(err)))
    }
}

export const addSomethingNew = () => console.log('12334567');