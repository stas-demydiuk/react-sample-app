import {RECEIVE_POSTS} from './blogActions';
import {UPDATE_POST, DELETE_POST} from '../post/postActions';

export default (state = [], action) => {
    if (action.type === RECEIVE_POSTS) {
        return action.posts;
    }

    if (action.type === DELETE_POST) {
        return state.filter(post => post.id !== action.postId);
    }

    if (action.type === UPDATE_POST) {
        return state.map(post => {
            return post.id === action.postId
                ? {...post, ...action.data}
                : post
        });
    }

    return state;
}