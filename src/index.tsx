/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import '~styles/styles.less';
import '~styles/styles.scss';
import 'antd/dist/antd.less';

import React from 'react';
import ReactDom from 'react-dom';
import * as ReactRedux from 'react-redux';
import * as Redux from 'redux';
import { createBrowserHistory } from 'history'

import Root from '~src/Root';
import { ConnectedRouter } from 'connected-react-router';
import configureStore from './configureStore';


// We use hash history because this example is going to be hosted statically.
// Normally you would use browser history.
const history = createBrowserHistory()

const initialState = window.INITIAL_REDUX_STATE
const store = configureStore(history, initialState)

ReactDom.render(
    <ReactRedux.Provider store={store}>
        <ConnectedRouter history={history}>
            <Root />
        </ConnectedRouter>
    </ReactRedux.Provider>,
    document.getElementById('root'),
);
