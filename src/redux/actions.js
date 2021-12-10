import * as types from './actionTypes';
import {
    auth, facebookAuthProvider, googleAuth
} from '../firebase';

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

export const setUser = (user) => ({
    type: types.SET_USER,
    payload: user
})


// login google
const loginGoogleStart = () => ({
    type: types.LOGIN_GOOGLE_START
})

const loginGoogleSuccess = (user) => ({
    type: types.lOGIN_GOOGLE_SUCCESS,
    payload: user
})

const loginGoogleError = (err) => ({
    type: types.LOGIN_GOOGLE_ERROR,
    payload: err
})

// login facebook
const loginFacebookStart = () => ({
    type: types.LOGIN_FACEBOOK_START
})

const loginFacebookSuccess = (user) => ({
    type: types.LOGIN_FACEBOOK_SUCCESS,
    payload: user
})

const loginFacebookError = (err) => ({
    type: types.LOGIN_FACEBOOK_ERROR,
    payload: err
})


export const registerInitial = (email, password, username) => {
    return function (dispatch) {

        dispatch(registerStart());

        // firebase 
        auth.createUserWithEmailAndPassword(email, password).then(({
            user
        }) => {
            user.updateProfile({
                displayName: username,
                photoURL: "https://picsum.photos/id/237/200/300",
                phoneNumber: "999-777-555"
            })
            dispatch(registerSuccess(user))
        }).catch(err => dispatch(registerError(err.message)))
    }
}

export const loginUser = (email, password) => {
    return function (dispatch) {

        dispatch(loginStart());

        // firebase 
        auth.signInWithEmailAndPassword(email, password).then(({
            user
        }) => {
            dispatch(loginSuccess(user))
        }).catch(err => dispatch(loginError(err.message)))
    }
}

export const loginUserGoogle = () => {
    return function (dispatch) {

        dispatch(loginGoogleStart());

        // firebase 
        auth.signInWithPopup(googleAuth).then(({
            user
        }) => {
            dispatch(loginGoogleSuccess(user))
        }).catch(err => dispatch(loginGoogleError(err.message)))
    }
}

export const loginUserFacebook = () => {
    return function (dispatch) {

        dispatch(loginFacebookStart());

        // firebase 
        auth.signInWithPopup(facebookAuthProvider.addScope('user_birthday')).then(({
            user
        }) => {
            dispatch(loginFacebookSuccess(user))
        }).catch(err => dispatch(loginFacebookError(err.message)))
    }
}

export const logoutUser = () => {
    return function (dispatch) {

        dispatch(logoutStart());

        // firebase 
        auth.signOut().then((res) => {
            dispatch(logoutSuccess())
        }).catch(err => dispatch(logoutError(err.message)))
    }
}




export const addSomethingNew = () => console.log('12334567');