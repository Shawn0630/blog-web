import { Layout } from "antd";
import { Content, Footer } from "antd/lib/layout/layout";
import { RouterState } from "connected-react-router";
import * as React from "react";
import { connect, MapStateToProps } from "react-redux";
import { BrowserRouter as Router, Route, RouteComponentProps } from "react-router-dom";
import { RootState } from "~src/stores";
import BlogHeader from "../component/BlogHeader";
import { App } from "../demo/App";
import { ContentDemo } from "../demo/ContentDemo";
import * as styles from "./BlogLayout.module.scss";

interface BlogLayoutProps {
    test?: boolean
}

export interface StoreProps {
    router?: RouterState
}

interface BlogLayoutStates {
    test: boolean
}

const mapStateToProps: MapStateToProps<StoreProps, unknown> = (state: RootState, props: unknown) => {
    return {
      router: state.router,
    };
};

export default connect<StoreProps, undefined>(
    mapStateToProps,
    undefined)
(class BlogLayout extends React.Component<BlogLayoutProps & RouteComponentProps & StoreProps, BlogLayoutStates> {
    public render(): JSX.Element {
        const basePath: string = '/blog';

        return <Layout>
            <BlogHeader />
            <Content className={styles.layoutContent}>
                <Router basename={ basePath } key={this.props.location.pathname}>
                    <Route path="/" exact={true} component={App}/>
                    <Route path="/home" exact={true} component={ContentDemo}/>
                    <Route path="/articles" exact={true} component={App}/>
                    <Route path="/projects" exact={true} component={App}/>
                    <Route path="/about" exact={true} component={App}/>
                </Router>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2021 Created by Shawn</Footer>
        </Layout>
    }
})