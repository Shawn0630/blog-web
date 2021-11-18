import { Reducer } from "react"
import {Action} from 'redux';
import { UserActionTypes, UserState } from "./types"

// Type-safe initialState!
export const initialState: UserState = {
    loggedIn: false
}
  
// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const userReducer = (state = initialState, action: Action) => {
    switch (action.type) {
      case UserActionTypes.LOGIN:
          return state;
      case UserActionTypes.LOGGEDIN: {
          return {
              ...state,
              loggedIn: true
          }
      }  
      default: {
        return state
      }
    }
  }

export { UserState, userReducer }