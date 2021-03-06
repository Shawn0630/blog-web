import {MuiThemeProvider as MuiThemeProviderCore} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import * as ReactRedux from 'react-redux';
import * as Redux from 'redux';
import {ThunkDispatch} from 'redux-thunk';

import {muiThemeCore} from '~src/Themes';

import {App} from '~src/app/demo/App';

import { BrowserRouter as Router, Redirect, Route, RouteComponentProps, RouteProps } from "react-router-dom";
import { ErrorPage, Page404 } from '~src/app/pages/ErrorPage';
import BlogLayout, { StoreProps } from './app/layout/BlogLayout';

function mapStateToProps(state: unknown, ownProps: unknown): unknown {
    return {};
}

function mapDispatchToProps(
    dispatch: ThunkDispatch<unknown, unknown, Redux.AnyAction>,
): unknown {
    return {};
}

interface AuthProps extends RouteProps {
    loggedIn: boolean;
    role: string;
}

const UserRoute: React.FunctionComponent<AuthProps> = (originalProps: AuthProps): JSX.Element => {
    const component: React.ComponentType= originalProps.component!;
    function renderContent(props: RouteComponentProps): React.ReactNode {
        if (originalProps.loggedIn === false) {
            return <Redirect to={{pathname: "/", state: {from: props.location}}} />;
        } else {
            return React.createElement(component, props as React.Attributes);
        }
    }

    return <Route exact={originalProps.exact} path={originalProps.path} render={renderContent} />;
};

const AdminRoute: React.FunctionComponent<AuthProps> = (originalProps: AuthProps): JSX.Element => {
    const component: React.ComponentType = originalProps.component!;

    function renderContent(props: RouteComponentProps): React.ReactNode {
        if (originalProps.loggedIn === false) {
            return <Redirect to={{pathname: "/", state: {from: props.location}}} />;
        } else if (originalProps.role !== Roles.SYS_ADMIN) {
            return <ErrorPage title="Permission Denied" error="You do not have the permission to view this page" />;
        } else {
            return React.createElement(component, props as React.Attributes);
        }
    }

    return <Route exact={originalProps.exact} path={originalProps.path} render={renderContent} />;
};

class Root extends React.PureComponent<unknown> {
    public render(): JSX.Element {
        const basePath: string = process.env.BASE_PATH || '/';
        return (
            <Router basename={ basePath }>
                <Route path="/" exact={true} component={App}/>
                <Route path="/blog" exact={false} component={(props: RouteComponentProps & StoreProps) => <BlogLayout {...props}/>}/>
                <Route path="/404" exact={true} component={Page404}/>
            </Router>
        );
    }
}

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Root);
