import * as Redux from 'redux';
import { History } from 'history';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

const rootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
});


export default rootReducer;
