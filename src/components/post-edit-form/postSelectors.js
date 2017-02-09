import {createSelector} from 'reselect'

const getPosts = (state) => state.posts;
const getPostId = (state, props) => parseInt(props.params.postId, 10);

export const getPostById = createSelector(
    [getPosts, getPostId],
    (posts, postId) => {
        return posts.find((post) => post.id === postId);
    }
);