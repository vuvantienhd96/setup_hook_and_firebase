
import * as types from './actionTypes';
import { auth } from '../firebase';

// rehister
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

// login
const loginStart = () => ({
    type: types.LOGIN_START
})

const loginSuccess = (user) => ({
    type: types.lOGIN_SUCCESS,
    payload: user
})

const loginError = (err) => ({
    type: types.LOGIN_ERROR,
    payload: err 
})

// logout
const logoutStart = () => ({
    type: types.LOGOUT_START
})

const logoutSuccess = (user) => ({
    type: types.LOGOUT_SUCCESS,
    payload: user
})

const logoutError = (err) => ({
    type: types.LOGOUT_ERROR,
    payload: err 
})


export const registerInitial = (email, password, username) => {
    return function(dispatch){

        dispatch(registerStart());

        // firebase 
        auth.createUserWithEmailAndPassword (email, password).then(({user}) => {
            user.updateProfile({
                username
            })
            dispatch(registerSuccess(user))
        }).catch(err => dispatch(registerError(err.message)))
    }
}

export const loginUser = (email, password) => {
    return function(dispatch){

        dispatch(loginStart());

        // firebase 
        auth.signInWithEmailAndPassword(email, password).then(({user}) => {
            dispatch(loginSuccess(user))
        }).catch(err => dispatch(loginError(err.message)))
    }
}

export const logoutUser = () => {
    return function(dispatch){

        dispatch(logoutStart());

        // firebase 
        auth.signOut().then((res) => {
            dispatch(logoutSuccess())
        }).catch(err => dispatch(logoutError(err.message)))
    }
}

export const addSomethingNew = () => console.log('12334567');