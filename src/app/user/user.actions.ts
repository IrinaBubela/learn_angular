import { createAction, props } from "@ngrx/store";

export const requestCurrentUser = createAction(
    '[Current User] Request current user'
)

export const requestCurrentUserFail = createAction(
    '[Current User] Request current user success'
)

export const requestCurrentUserSuccess = createAction(
    '[Current User] Request current user fail',
    props<{ username: string; }>()
)