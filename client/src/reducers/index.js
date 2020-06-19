import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import profileReducer from './profileReducer';
import postReducer from './postReducer';
import newsReducer from './newsReducer';
import articleReducer from './articleReducer';
import reviewReducer from './reviewReducer';

export default combineReducers({
    auth: authReducer,
    errors:errorReducer,
    profile: profileReducer,
    post: postReducer,
    news: newsReducer,
    article:articleReducer,
    review: reviewReducer
});