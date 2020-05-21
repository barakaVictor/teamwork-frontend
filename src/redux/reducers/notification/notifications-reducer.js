import {
    CREATE_NOTIFICATION, CLEAR_NOTIFICATION
} from '../../actions/types';

const initialstate = []
export default function (state = initialstate, action){
    switch(action.type){
        case CREATE_NOTIFICATION:
            return [...state, action.notification]
        case CLEAR_NOTIFICATION:
            return [...state.filter((_notification, index) => index !== action.index)]
        default:
            return state
    }
};
