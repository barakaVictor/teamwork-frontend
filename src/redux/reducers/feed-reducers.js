import {
    REQUEST_READ_FEED,
    SUCCESS_READ_FEED,
    FAILED_READ_FEED
} from '../actions/types';

const initialState = {
    data: [],
    fetchingFeed: false,
    error: false,
    errorMessage: ''
}

export default function(state = initialState, action) {
    switch(action.type){
        case REQUEST_READ_FEED:
            return Object.assign({}, state, {
                fetchingFeed: true
            })
        case SUCCESS_READ_FEED:
            return Object.assign({}, state, {
                data: action.feed,
                fetchingFeed: false,
                error: false,
                errorMessage: ''
            })
        case FAILED_READ_FEED:
            return Object.assign({}, state, {
                error: true,
                errorMessage: action.message
            })
        default:
            return state
    }
}