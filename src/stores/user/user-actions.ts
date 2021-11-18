import { action } from 'typesafe-actions'
import { UserActionTypes } from "./types"

// Here we use the `action` helper function provided by `typesafe-actions`.
// This library provides really useful helpers for writing Redux actions in a type-safe manner.

// For more info: https://github.com/piotrwitek/typesafe-actions
export const login = () => action(UserActionTypes.LOGIN)
export const loggedin = () => action(UserActionTypes.LOGGEDIN)
export const loggedinError = (message: string) => action(UserActionTypes.LOGDIN_ERROR, message)
