import {
    ADMIN_CREATE_USER,
    ADMIN_CREATE_USER_SUCCESS,
    ADMIN_CREATE_USER_FAILED
} from '../types'

export function registerUser(user) {
    return {
        type: ADMIN_CREATE_USER,
        tags: ['API', 'REQUIRES_AUTH'],
        payload: {
            endpoint: '/api/v1/auth/create-user',
            options: {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            }
        },
        success: (user) => {
            return {
                type: ADMIN_CREATE_USER_SUCCESS,
                payload: user
            }
        },
        failure: (error) => {
            return {
                type: ADMIN_CREATE_USER_FAILED,
                payload: error
            }
        }
    }
    
}
