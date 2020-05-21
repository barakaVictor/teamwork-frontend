import Api from "../../../services/api";

const api = Api('http://localhost:5000')

const apiAccess = ({dispatch, getState}) => {
    return next => async action => {
        next(action)
        const state = getState();
        const { token } = state.auth.user
        if(action.hasOwnProperty('tags') && action.tags.includes("API")){
            if (action.tags.includes("REQUIRES_AUTH")){
                action.payload.options.headers = {
                    ...action.payload.options.headers,
                    'Authorization': `Bearer ${token}`
                }
            }
            try {
                let response = await api.trigger(action.payload);
                const { data } = response;
                return dispatch(action.success(data));
            }
            catch (error) {
                return dispatch(action.failure(error));
            }
        }
    }
}

export default apiAccess;