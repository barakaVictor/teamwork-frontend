import {
    REQUEST_CREATE_GIF,
    SUCCESS_CREATE_GIF,
    FAILED_CREATE_GIF
} from './types';

export function uploadGif(data){
    return {
        type: REQUEST_CREATE_GIF,
        tags: ['API', 'REQUIRES_AUTH'],
        payload: {
            endpoint: '/api/v1/gifs/',
            options: {
                method: 'POST',
                body: data
            }
        },
        success: (response) => {
            return {
                type: SUCCESS_CREATE_GIF,
                data: response
            }
        },
        failure: (error) => {
            return {
                type: FAILED_CREATE_GIF,
                error: error.toString()
            }
        }
    }
}
