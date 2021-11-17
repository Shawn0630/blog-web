import { Layout } from "antd";
import * as React from "react";
import BlogHeader from "../component/BlogHeader";

interface BlogLayoutProps {
    test: boolean
}

interface BlogLayoutStates {
    test: boolean
}

export default class BlogLayout extends React.Component<BlogLayoutProps, BlogLayoutStates> {
    public render(): JSX.Element {
        return <Layout>
            <BlogHeader test />
        </Layout>
    }
}