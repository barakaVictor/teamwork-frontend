import {
    REQUEST_CREATE_GIF,
    SUCCESS_CREATE_GIF,
    FAILED_CREATE_GIF,
    REQUEST_GIF,
    REQUEST_GIF_SUCCESS,
    REQUEST_GIF_FAILED
} from '../actions/types';

const initialState = {
    gif: {},
    uploading: false,
    fetching: false,
    error: false,
    errorMessage: ''
}

export default function(state = initialState, action) {
    switch(action.type){
        case REQUEST_CREATE_GIF:
            return Object.assign({}, state, {
                gif: action.file,
                uploading: true,
                fetching: false,
                error: false,
                errorMessage: ''
            })
        case SUCCESS_CREATE_GIF:
            return Object.assign({}, state, {
                gif: action.data,
                uploading: false,
                fetching: false,
                error: false,
                errorMessage: ''
            })
        case FAILED_CREATE_GIF:
            return Object.assign({}, state, {
                gif: action.file,
                uploading: false,
                fetching: false,
                error: true,
                errorMessage: action.message
            })
        case REQUEST_GIF:
            return Object.assign({}, state, { 
                gif: action.file,
                uploading: false,
                fetching: true,
                error: false,
                errorMessage: ''
            })
        case REQUEST_GIF_SUCCESS:
            return Object.assign({}, state, {
                gif: action.data,
                uploading: false,
                fetching: false,
                error: false,
                errorMessage: ''
            })
        case REQUEST_GIF_FAILED:
            return Object.assign({}, state, {
                gif: action.data,
                uploading: false,
                fetching: false,
                error: true,
                errorMessage: action.message
            })
        default:
            return state
    }
}