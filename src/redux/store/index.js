import { createStore, applyMiddleware, compose} from 'redux'
import rootReducer from '../reducers';
import { logger, apiAccess } from '../middleware';
  
const store = createStore(
  rootReducer, 
  compose(
    applyMiddleware(logger, apiAccess),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
  

export default store