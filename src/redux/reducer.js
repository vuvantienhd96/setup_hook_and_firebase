import * as types from './actionTypes';

// gia tri khoi tao state ban dau
const initialState = {
    currentUser: null,
    loading: false,
    err: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER_START: 
            return {
                ...state,
                loading: true
            }
        case types.REGISTER_SUCCESS: 
            return {
                ...state,
                loading: false,
                currentUser: action.payload
            }
        case types.REGISTER_ERROR: 
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