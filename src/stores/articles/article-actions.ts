import { action } from "typesafe-actions"
import { ArticleDetail, ArticleProfile } from "~src/models/Article"
import { ArticleActionType } from "./types"

export const fetchArticle = () => action(ArticleActionType.FETCH_ARTICLE)
export const fetchedArticle = (profiles: ArticleProfile[]) => action(ArticleActionType.FETCHED_ARTICLE, profiles)

export const fetchArticleDetail = () => action(ArticleActionType.FETCH_ARTICLE_DETAIL)
export const fetchedArticleDetail = (detail: ArticleDetail) => action(ArticleActionType.FETCHED_ARTICLE_DETAIL, detail)