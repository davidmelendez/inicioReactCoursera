import { DISHES2 } from '../shared/dishes2';

export const Dishes = (state = DISHES2, action) => {
    console.log('Por medio de la accion ya registrada ejecuta el reducer dishes: redux>dishes.js');
    console.log(action.type);

    switch (action.type) {
        default:
          return state;
      }
};