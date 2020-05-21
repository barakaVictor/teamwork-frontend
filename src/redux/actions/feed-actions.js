import { 
    REQUEST_READ_FEED,
    SUCCESS_READ_FEED,
    FAILED_READ_FEED
} from './types'

export function fetchFeed(){
    return {
        type: REQUEST_READ_FEED,
        tags: ['API'],
        payload: {
            endpoint: '/api/v1/feed',
            options: {
                method: 'GET'
            }
        },
        success: (data) => {
            return {
                type: SUCCESS_READ_FEED,
                fetchingFeed: false,
                feed: data
            }
        },
        failure: (error) => {
            return {
                type: FAILED_READ_FEED,
                error: error.toString()
            }
        }
    }
}