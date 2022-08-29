//import { DISHES2 } from '../shared/dishes2';
import * as ActionTypes from './ActionTypes';

export const Dishes = (state = { isLoading: true,
    errMess: null,
    dishes:[]}, action) => {
    console.log('Por medio de la accion ya registrada ejecuta el reducer dishes: redux>dishes.js');
    console.log(action.type);

    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload};

        case ActionTypes.DISHES_LOADING:
            console.log('ACTION TYPE CASE: DISHES_LOADING');
            return {...state, isLoading: true, errMess: null, dishes: []}

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
          return state;
      }
};