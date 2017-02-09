import {createSelector} from 'reselect'

const getComments = (state) => state.comments;
const getPostId = (state, props) => props.postId;

export const getPostComments = createSelector(
    [getComments, getPostId],
    (comments, postId) => {
        return comments.filter(comment => comment.postId === postId)
    }
);