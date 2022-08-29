import {createStore, combineReducers} from 'redux';
//import { Reducer, initialState } from './reducer'

//reducers
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';


export const ConfigureStore = () => {
    console.log('Se construye el store en el redux>configureStore');
    const store = createStore(
        //Reducer, // reducer simple
        //initialState, // our initialState
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        })
    );

    return store;
}