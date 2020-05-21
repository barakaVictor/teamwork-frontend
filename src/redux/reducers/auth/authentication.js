import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT,
} from '../../actions/types';

const initialstate = {
    user: {
        token: null,
        role: null,
        authenticating: false,
        isAuthenticated: false,
        error: ""
    }
}

export default function (state = initialstate, action){
    switch(action.type){
        case LOGIN_REQUEST:
            return Object.assign({}, state, {
                user: {
                    ...action.data,
                    authenticating: true,
                }
            })
        
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                user: {
                    ...action.data,
                    authenticating:false,
                    isAuthenticated: true,
                    error: ""
                },
            })

        case LOGIN_FAILED:
            return Object.assign({}, state, {
                user: {
                    token: null,
                    role: null,
                    authenticating: false,
                    isAuthenticated: false,
                    error: action.error
                },
            })
        
        case LOGOUT:
            return Object.assign({}, state, {
                user: {
                    token: null,
                    role: null,
                    authenticating: false,
                    isAuthenticated: false,
                    error: ""
                }
            })

        default:
            return state;
    };

};
