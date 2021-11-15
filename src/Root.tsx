import {MuiThemeProvider as MuiThemeProviderCore} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import * as ReactRedux from 'react-redux';
import * as Redux from 'redux';
import {ThunkDispatch} from 'redux-thunk';

import {muiThemeCore} from '~src/Themes';

import {App} from '~src/app/demo/app';

import { BrowserRouter as Router } from "react-router-dom";

function mapStateToProps(state: unknown, ownProps: unknown): unknown {
    return {};
}

function mapDispatchToProps(
    dispatch: ThunkDispatch<unknown, unknown, Redux.AnyAction>,
): unknown {
    return {};
}

class Root extends React.PureComponent<unknown> {
    public render(): JSX.Element {
        const basePath: string = process.env.BASE_PATH || '/';
        return (
            <Router basename={ basePath }>
            </Router>
        );
    }
}

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Root);
