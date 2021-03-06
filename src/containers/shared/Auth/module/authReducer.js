import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./type"

const initialState = {
    currentUser: null,
    loading: false,
    error: null
}

const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case LOGIN_REQUEST:
            return { ...state, loading: true, error: null }

        case LOGIN_SUCCESS:
            return { ...state, currentUser: payload, loading: false }

        case LOGIN_FAIL:
            return { ...state, error: payload, loading: false }
        case LOGOUT:
            return { ...state, currentUser: payload }

        default:
            return state;
    } 
}
export default authReducer;