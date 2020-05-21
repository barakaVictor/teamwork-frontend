import {
    REQUEST_READ_ARTICLE,
    SUCCESS_READ_ARTICLE,
    FAILED_READ_ARTICLE,
    REQUEST_CREATE_ARTICLE,
    SUCCESS_CREATE_ARTICLE,
    FAILED_CREATE_ARTICLE
} from './types';

export function getArticle(id) {
    return {
        type: REQUEST_READ_ARTICLE,
        id: id
    }
}

export function getArticleSuccess(article) {
    return {
        type: SUCCESS_READ_ARTICLE,
        article: article
    }
    
}

export function getArticleFailed(msg) {
    return {
        type: FAILED_READ_ARTICLE,
        error: msg
    }
    
}
export function createArticle(article) {
    return {
        type: REQUEST_CREATE_ARTICLE,
        tags: ['API', 'REQUIRES_AUTH'],
        payload: {
            endpoint: '/api/v1/articles',
            options: {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(article)
            }
        },
        success: (response) => {
            return {
                type: SUCCESS_CREATE_ARTICLE,
                article: response
            }
        },
        failure: (error) => {
            return {
                type: FAILED_CREATE_ARTICLE,
                error: error.toString()
            }
        }
    }
}
