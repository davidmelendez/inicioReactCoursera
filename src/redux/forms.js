import * as ActionTypes from './ActionTypes';

export const InitialFeedback = {
    firstname: 'david',
    lastname: 'melendez',
    telnum: '62996372',
    email: 'melenava@gmail.com',
    agree: false,
    contactType: 'Tel.',
    message: 'test precargado'
};


export const FeedBack = (state = { errMess: null, feedbacks: [] }, action) => {
    switch (action.type) {
        case ActionTypes.FEEDBACK_ADD:
            var feedBack = action.payload;
            console.log(">>>>>>>>>>>>>>>><<Comment: ", feedBack);
            return {...state, feedbacks: state.feedbacks.concat(feedBack) };//fixed
            alert(state.feedbacks.feedbacks);
        default:
            return state;
    }
};