import { 
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT,
} from '../types';

export function login(creds){
    return {
        type: LOGIN_REQUEST,
        tags: ['API'],
        payload: {
            endpoint: '/api/v1/auth/signin',
            options: {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(creds)
            }
        },
        success: (data) => {
            const {token} = data
            const {user} = JSON.parse(atob(token.split('.')[1]))
            localStorage.setItem("token", token)
            return {
                type: LOGIN_SUCCESS,
                data: Object.assign({}, user, {
                    token, 
                    role: user.role.toLowerCase()
                })
            }
        },
        failure: (error) => {
            return {
                type: LOGIN_FAILED,
                error: error
            }
        }
    }
}

export function logout(){
    return {
        type: LOGOUT,
        /*tags: ['API', 'REQUIRES_AUTH'],
        payload: {
            endpoint: '/api/v1/auth/signOut',
            options: {
                method: 'GET',
            }
        },
        success: (response) => {
            return {
                type: CREATE_NOTIFICATION,
                notification: {
                    status: "success",
                    message: "You have successfully logged out"
                }
            }
        },
        failure: (error) => {
            return {
                type: CREATE_NOTIFICATION,
                notification: {
                    status: "error",
                    message: "An error occured while performing logout action"
                }
            }
        }*/
    }
}
