import fetch from 'isomorphic-fetch';

export const LOAD_COMMENTS = 'LOAD_COMMENTS';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';

export function fetchComments(postId) {
    return function (dispatch) {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(response => response.json())
            .then(json => dispatch(receiveComments(json)))
    }
}

function receiveComments(comments) {
    return {
        type: RECEIVE_COMMENTS,
        comments: comments
    };
}