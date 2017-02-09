import {combineReducers} from 'redux';
import blogReducer from './components/blog/blogReducer';
import commentsReducer from './components/comments/commentsReducer'

export default combineReducers({
    posts: blogReducer,
    comments: commentsReducer
});