import fetch from 'isomorphic-fetch';
import {receivePosts} from '../blog/blogActions'

export const DELETE_POST = 'DELETE_POST';
export const UPDATE_POST = 'UPDATE_POST';

export function deletePost(postId) {
    return function (dispatch) {
        dispatch(deleteStoredPost(postId));

        return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: 'DELETE'
        })
    }
}

export function fetchPost(postId) {
    return function (dispatch) {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => response.json())
            .then(json => dispatch(receivePosts([json])))
    }
}

export function updatePost(postId, data) {
    return function (dispatch) {
        dispatch(updateStoredPost(postId, data));

        return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(json => dispatch(updateStoredPost(postId, json)));
    }
}

function updateStoredPost(postId, data) {
    return {
        type: UPDATE_POST,
        postId: postId,
        data: data
    };
}

function deleteStoredPost(postId) {
    return {
        type: DELETE_POST,
        postId: postId
    };
}