import fetch from 'isomorphic-fetch';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export function fetchPosts() {
    return function(dispatch) {
        dispatch(requestPosts());

        return fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
            .then(response => response.json())
            .then(json => dispatch(receivePosts(json)))
    }
}

function requestPosts() {
    return {
        type: REQUEST_POSTS
    };
}

export function receivePosts(posts) {
    return {
        type: RECEIVE_POSTS,
        posts: posts
    };
}