import { connectRouter, routerMiddleware, RouterState } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { Action, applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { UserState } from './user/types';
import { userReducer } from './user/user-reducer';
import { History } from 'history'
import { all, fork } from 'redux-saga/effects'
import userSaga from './user/user-saga';
import { ArticleState } from './articles/types';
import { articleReducer } from './articles/article-reducer';
import articleSaga from './articles/article-saga';


export interface ActionWithPayload<T> extends Action {
  payload: T;
} 

// The top-level state object
export interface RootState {
  user: UserState
  router: RouterState
  article: ArticleState
}

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    user: userReducer,
    article: articleReducer
  })

// Here we use `redux-saga` to trigger actions asynchronously. `redux-saga` uses something called a
// "generator function", which you can read about here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
export function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(articleSaga)
  ])
}
