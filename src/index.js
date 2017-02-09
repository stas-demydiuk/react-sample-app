import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import Blog from './components/blog/BlogContainer';
import PostEditForm from './components/post-edit-form/PostEditFormContainer';

import rootReducer from './rootReducer';
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(
            thunkMiddleware,
            createLogger()
        )
    ));

ReactDOM.render((
        <Provider store={store}>
            <Router history={hashHistory}>
                <Route path="/">
                    <IndexRoute component={Blog}/>

                    <Route path="/edit/(:postId)" component={PostEditForm}/>
                </Route>
            </Router>
        </Provider>
    ), document.getElementById('root')
);
