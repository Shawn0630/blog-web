import * as React from "react";
import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { ArticleDetail } from "~src/models/Article";
import { RootState } from "~src/stores";
import { fetchArticleDetail } from "~src/stores/articles/article-actions";
import ReactMarkdown from 'react-markdown'

import * as styles from "./ArticleDetailPage.module.scss"

interface StoreProps {
    detail?: ArticleDetail
}

interface DispatchProps {
    fetch?: typeof fetchArticleDetail
}

interface ArticleDetailPageProps {
    test?: boolean
}


const mapStateToProps: MapStateToProps<StoreProps, ArticleDetailPageProps> = (state: RootState, props: ArticleDetailPageProps) => {
    return {
      detail: state.article.detail
    };
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, unknown> = {
    fetch: fetchArticleDetail
};


export default connect<StoreProps, DispatchProps>(
    mapStateToProps,
    mapDispatchToProps)
(class ArticleLandingPage extends React.PureComponent<ArticleDetailPageProps & StoreProps & DispatchProps, unknown> {
    constructor(props: ArticleDetailPageProps & StoreProps & DispatchProps) {
        super(props);
    }

    componentDidMount() {
        this.props.fetch!();
    }

    public render(): JSX.Element {
        return <ReactMarkdown>*React-Markdown* is **Awesome**</ReactMarkdown>
    }
})