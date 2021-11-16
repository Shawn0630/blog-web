/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import '~styles/styles.less';
import '~styles/styles.scss';

import React from 'react';
import ReactDom from 'react-dom';
import * as ReactRedux from 'react-redux';
import * as Redux from 'redux';

import Root from '~src/Root';
import store, {history} from './stores';
import { ConnectedRouter } from 'connected-react-router';


ReactDom.render(
    <ReactRedux.Provider store={store}>
        <ConnectedRouter history={history}>
            <Root />
        </ConnectedRouter>
    </ReactRedux.Provider>,
    document.getElementById('root'),
);
