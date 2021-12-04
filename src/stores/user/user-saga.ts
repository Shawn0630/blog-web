import { loggedin, loggedinError } from "./user-actions"
import { all, call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { UserActionTypes } from "./types"

function* handleLogin() {
    try {
      // To call async functions, use redux-saga's `call()`.
    //   const res = yield call(callApi, 'get', API_ENDPOINT, '/teams')
  
    //   if (res.error) {
    //     yield put(loggedinError(res.error))
    //   } else {
    //     yield put(loggedin())
    //   }
    yield put(loggedin());
    } catch (err) {
      if (err instanceof Error && err.stack) {
        yield put(loggedinError(err.stack))
      } else {
        yield put(loggedinError('An unknown error occured.'))
      }
    }
  }

// This is our watcher function. We use `take*()` functions to watch Redux for a specific action
// type, and run our saga, for example the `handleFetch()` saga above.
function* watchLoginRequest() {
    yield takeEvery(UserActionTypes.LOGIN, handleLogin)
  }

// We can also use `fork()` here to split our saga into multiple watchers.
function* userSaga() {
    yield all([
        fork(watchLoginRequest)
    ])
}

export default userSaga