// Use `enum`s for better autocompletion of action type names. These will
// be compiled away leaving only the final value in your compiled code.
//
// Define however naming conventions you'd like for your action types, but
// personally, I use the `@@context/ACTION_TYPE` convention, to follow the convention

import { ArticleProfile } from "~src/models/Article";

// of Redux's `@@INIT` action.
export enum ArticleActionType {
    FETCH_ARTICLE = '@@article/FETCH',
    FETCHED_ARTICLE = '@@article/FETCHED',
}

// Declare state types with `readonly` modifier to get compile time immutability.
// https://github.com/piotrwitek/react-redux-typescript-guide#state-with-type-level-immutability
export interface ArticleState {
    readonly profileList: ArticleProfile[];
    readonly isLoading: boolean;
    readonly isLoadEnd: boolean;
}