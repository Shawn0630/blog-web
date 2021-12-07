import * as React from "react";
import { connect, DispatchProp, MapDispatchToProps, MapStateToProps } from "react-redux";
import { ArticleProfile } from "~src/models/Article";
import { RootState } from "~src/stores";
import { fetchArticle } from "~src/stores/articles/article-actions";
import { ArticleActionType } from "~src/stores/articles/types";
import ArticleProfileItem from "../component/ArticleProfileItem";
import * as styles from "./ArticleLandingPage.module.scss";

interface ArticleLandingPageProps {
    test?: boolean
}

// interface ArticleLandingPageStates {

// }

interface StoreProps {
    articles?: ArticleProfile[]
}

interface DispatchProps {
    fetch?: typeof fetchArticle
}

const mapStateToProps: MapStateToProps<StoreProps, ArticleLandingPageProps> = (state: RootState, props: ArticleLandingPageProps) => {
    return {
      articles: state.article.profileList
    };
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, unknown> = {
    fetch: fetchArticle
};

export default connect<StoreProps, DispatchProps>(
    mapStateToProps,
    mapDispatchToProps)
(class ArticleLandingPage extends React.PureComponent<ArticleLandingPageProps & StoreProps & DispatchProps, unknown> {
    constructor(props: ArticleLandingPageProps & StoreProps & DispatchProps) {
        super(props);
    }

    componentDidMount() {
        this.props.fetch!();
    }

    public render(): JSX.Element {
        return <div className="left">
            <ul className="note-list" id="list">
                {
                    this.props.articles?.map((profile: ArticleProfile) =>
                        <ArticleProfileItem profile={profile} key={`artile-profile-${profile._id}`}/>)
                }
            </ul>
        </div>
    }
})