import {
    ADMIN_CREATE_USER,
    ADMIN_CREATE_USER_FAILED,
    ADMIN_CREATE_USER_SUCCESS,
} from '../../actions/types';

const initialstate = {
    creatingUser: false,
    userCreationSuccess: false,
    userCreationFailed: false,
    createdUser: {}
}

export default function (state = initialstate, action){
    switch(action.type){

        case ADMIN_CREATE_USER:
            return Object.assign({}, state, {
                creatingUser: true,
                userCreationSuccess: false,
                userCreationFailed: false,
                createdUser: {}
            })

        case ADMIN_CREATE_USER_SUCCESS:
            return Object.assign({}, state, {
                creatingUser: false,
                userCreationSuccess: true,
                userCreationFailed: false,
                createdUser: {...action.data}
            })

        case ADMIN_CREATE_USER_FAILED:
            return Object.assign({}, state, {
                creatingUser: false,
                userCreationSuccess: false,
                userCreationFailed: true,
                createdUser: {}
            })
        
        default:
            return state;
    };

};
