
import { Action } from "typesafe-actions";
import { ArticleActionType, ArticleState } from "./types";

// Type-safe initialState!
export const initialState: ArticleState = {
    profileList: [],
    isLoading: false,
    isLoadEnd: false
}

const articleReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case ArticleActionType.FETCH_ARTICLE:
          return {
            ...state,
            isLoading: true,
            isLoadEnd: false   
          }
      case ArticleActionType.FETCHED_ARTICLE: {
          return {
              ...state,
              profileList: [...state.profileList, action.payload],
              isLoading: false,
              isLoadEnd: true
          }
      }  
      default: {
        return state
      }
    }
  }

export { ArticleState, articleReducer }