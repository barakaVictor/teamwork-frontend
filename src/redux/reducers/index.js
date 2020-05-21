import { combineReducers } from 'redux';

import authReducer from './auth/authentication';
import adminReducer from './admin/create-user-reducer';
import feedReducer from './feed-reducers';
import gifReducer from './gif-reducer';
import articlesReducer from './articles-reducer';
import notificationsReducer from './notification/notifications-reducer';

export default combineReducers({
    auth: authReducer,
    admin: adminReducer,
    feed: feedReducer,
    gif: gifReducer,
    article: articlesReducer,
    notifications: notificationsReducer
});