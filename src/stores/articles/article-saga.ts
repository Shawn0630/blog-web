import { all, fork, put, takeEvery } from "redux-saga/effects";
import { ArticleProfile } from "~src/models/Article";
import { fetchedArticle } from "./article-actions";
import mockProfiles from "../../mocks/article-profiles.json"
import { ArticleActionType } from "./types";

function* handleFetchArticle() {
      // To call async functions, use redux-saga's `call()`.
    //   const res = yield call(callApi, 'get', API_ENDPOINT, '/teams')
    yield put(fetchedArticle(mockProfiles as unknown as ArticleProfile[]));
}

// This is our watcher function. We use `take*()` functions to watch Redux for a specific action
// type, and run our saga, for example the `handleFetch()` saga above.
function* watchFetchARequest() {
    yield takeEvery(ArticleActionType.FETCH_ARTICLE, handleFetchArticle)
  }

// We can also use `fork()` here to split our saga into multiple watchers.
function* articleSaga() {
    yield all([
        fork(watchFetchARequest)
    ])
}

export default articleSaga