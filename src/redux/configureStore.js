// use combineReducers to combine smaller reducers into one
import { createStore, combineReducers, applyMiddleware } from 'redux'

// smaller reducers being imported
import { Dishes } from './dishes'
import { Comments } from './comments'
import { Promotions } from './promotions'
import { Leaders } from './leaders'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            // what is managed: who is managing (reducers)
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};