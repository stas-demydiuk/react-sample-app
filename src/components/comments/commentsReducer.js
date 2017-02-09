import {RECEIVE_COMMENTS} from './commentsActions';
import {DELETE_POST} from '../post/postActions';

export default (state = [], action) => {
    if (action.type === RECEIVE_COMMENTS) {
        return state.concat(action.comments);
    }

    if (action.type === DELETE_POST) {
        return state.filter(comment => comment.postId !== action.postId);
    }

    return state;
}