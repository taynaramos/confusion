// use combineReducers to combine smaller reducers into one
import { createStore, combineReducers } from 'redux'

// smaller reducers being imported
import { Dishes } from './dishes'
import { Comments } from './comments'
import { Promotions } from './promotions'
import { Leaders } from './leaders'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            // what is managed: who is managing
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        })
    );

    return store;
};