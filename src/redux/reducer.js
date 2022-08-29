import { DISHES2 } from '../shared/dishes2';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

export const initialState = {
    dishes: DISHES2,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS,
    isModalOpen: false
};

export const Reducer = (state = initialState, action) => {
    return state;
};