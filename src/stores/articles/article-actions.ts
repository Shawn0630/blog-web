import { action } from "typesafe-actions"
import { ArticleProfile } from "~src/models/Article"
import { ArticleActionType } from "./types"

export const fetchArticle = () => action(ArticleActionType.FETCH_ARTICLE)
export const fetchedArticle = (profiles: ArticleProfile[]) => action(ArticleActionType.FETCHED_ARTICLE, profiles)