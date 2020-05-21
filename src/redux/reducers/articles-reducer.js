import {
    REQUEST_READ_ARTICLE,
    SUCCESS_READ_ARTICLE,
    FAILED_READ_ARTICLE,
    REQUEST_CREATE_ARTICLE,
    SUCCESS_CREATE_ARTICLE,
    FAILED_CREATE_ARTICLE
} from '../actions/types';

const initialState = {
    article: {},
    saving: false,
    fetching: false,
    error: false,
    errorMessage: ''
}

export default function(state = initialState, action) {
    switch(action.type){
        case REQUEST_CREATE_ARTICLE:
            return Object.assign({}, state, {
                article: action.article,
                saving: true,
                fetching: false,
                error: false,
                errorMessage: ''
            })
        case SUCCESS_CREATE_ARTICLE:
            return Object.assign({}, state, {
                article: action.article,
                saving: false,
                fetching: false,
                error: false,
                errorMessage: ''
            })
        case FAILED_CREATE_ARTICLE:
            return Object.assign({}, state, {
                saving: false,
                fetching: false,
                error: true,
                errorMessage: action.message
            })
        case REQUEST_READ_ARTICLE:
            return Object.assign({}, state, { 
                article: action.article,
                fetching: true,
                error: false,
                errorMessage: ''
            })
        case SUCCESS_READ_ARTICLE:
            return Object.assign({}, state, {
                article: action.article,
                asving: false,
                fetching: false,
                error: false,
                errorMessage: ''
            })
        case FAILED_READ_ARTICLE:
            return Object.assign({}, state, {
                saving: false,
                fetching: false,
                error: true,
                errorMessage: action.message
            })
        default:
            return state
    }
}