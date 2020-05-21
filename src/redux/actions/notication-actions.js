import { CREATE_NOTIFICATION, CLEAR_NOTIFICATION } from './types';

export function notify(message) {
    return {
        type: CREATE_NOTIFICATION,
        message
    }
}

export function clearNotification(index) {
    return {
        type: CLEAR_NOTIFICATION,
        index
    }    
}