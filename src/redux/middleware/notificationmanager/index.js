const notify = ({dispatch}) => {
    return next => action => {
        next(action);
        if (action.hasOwnProperty('tags') && action.tags.includes("NOTIFY")) {
            dispatch({
                type: 'NOTIFICATION',
                status: action.status,
                message: action.message
            });
        }
    };
}

  export default notify;