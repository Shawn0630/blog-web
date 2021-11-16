import * as React from "react";
import NavigationBar from "../component/NavigationBar";

interface BlogLayoutProps {
    test: boolean
}

interface BlogLayoutStates {
    test: boolean
}

export default class BlogLayout extends React.Component<BlogLayoutProps, BlogLayoutStates> {
    public render(): JSX.Element {
        return <React.Fragment>
            <NavigationBar test />
        </React.Fragment>
    }
}