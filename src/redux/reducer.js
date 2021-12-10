import * as types from './actionTypes';

// gia tri khoi tao state ban dau
const initialState = {
    currentUser: null,
    loading: false,
    err: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGOUT_START:
        case types.LOGIN_START:
        case types.REGISTER_START:
        case types.LOGIN_GOOGLE_START:
        case types.LOGIN_FACEBOOK_START:    
            return {
                ...state,
                loading: true
            }
        case types.LOGOUT_SUCCESS: 
            return {
                ...state,
                loading: false,
                currentUser: null
            }
        case types.lOGIN_SUCCESS: 
        case types.REGISTER_SUCCESS:
        case types.SET_USER :
        case types.lOGIN_GOOGLE_SUCCESS:
        case types.LOGIN_FACEBOOK_SUCCESS: 
            return {
                ...state,
                loading: false,
                currentUser: action.payload
            }
        case types.LOGIN_ERROR: 
        case types.REGISTER_ERROR: 
        case types.LOGOUT_ERROR: 
        case types.LOGIN_GOOGLE_ERROR:
            case types.LOGIN_FACEBOOK_ERROR:
            return {
                ...state,
                loading: false,
                err: action.payload
            }
        default:
            return state
    }
}

export default userReducer