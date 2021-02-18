// use combineReducers to combine smaller reducers into one
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createForms } from 'react-redux-form'
// smaller reducers being imported
import { Dishes } from './dishes'
import { Comments } from './comments'
import { Promotions } from './promotions'
import { Leaders } from './leaders'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { InitialFeedback } from './forms'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            // what is managed: who is managing (reducers)
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};