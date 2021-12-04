import * as Redux from 'redux';
import { all, fork } from 'redux-saga/effects'
import { History } from 'history';
import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { UserState } from '../user/types';
import { userReducer } from '../user/user-reducer';
import userSage from '../user/user-saga';
import { ArticleState } from '../articles/types';
import { articleReducer } from '../articles/article-reducer';
import articleSaga from '../articles/article-saga';

export interface RootState {
    router: RouterState
    user: UserState
    article: ArticleState
}

export const rootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    user: userReducer,
    article: articleReducer
});


// Here we use `redux-saga` to trigger actions asynchronously. `redux-saga` uses something called a
// "generator function", which you can read about here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
export function* rootSaga() {
    yield all([
        fork(userSage),
        fork(articleSaga)
    ])
  }
