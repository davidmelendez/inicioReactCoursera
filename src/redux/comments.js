import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

export const Comments = (state = { errMess: null, comments: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return { ...state, errMess: null, comments: action.payload };

        case ActionTypes.COMMENTS_FAILED:
            console.log("errrrrrror");
            return { ...state, errMess: action.payload };
        case ActionTypes.ADD_COMMENT:
            console.log(">>>>>>>>>>>>>>>><<Comment procesando>>>>>>>>>>>>>>>>>>>>>>>>>>");
            var comment = action.payload;
            console.log(">>>>>>>>>>>>>>>><<Comment: ", comment);
            return {...state, comments: state.comments.concat(comment) };//fixed
        default:
            return state;
    }
};