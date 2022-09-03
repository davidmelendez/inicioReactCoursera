import * as ActionTypes from './ActionTypes';

export const Leaders = (state = {
    isLoading: true,
    erroMess: null,
    leaders: []
},
    action) => {
    switch (action.type) {
        case ActionTypes.LEADERS_ADD:
            var leader = action.payload;
            return {
                ...state,
                isLoading: false,
                errMess: null,
                leaders: state.leaders.concat(leader)
            };
        case ActionTypes.LEADERS_FAILED:
            return {
                ...state,
                isLoading: false,
                errMess: action.payload
            };
        case ActionTypes.LEADERS_LOADING:
            return {
                ...state,
                isLoading: true,
                errMess: null,
                leaders: []
            };
        default:
            return state;
    }

};