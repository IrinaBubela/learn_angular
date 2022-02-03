import { Token } from "@angular/compiler";
import { createAction, props } from "@ngrx/store";

export const requestAuthors = createAction(
    '[Authors] Request Authors'
)

export const requestAuthorsSuccess = createAction(
    '[Authors] Request Authors success'
)

export const requestAuthorsFail = createAction(
    '[Authors] Request Authors fail'
)

export const requestAddAuthor = createAction(
    '[Authors] Request Authors add'
)

export const requestAddAuthorSuccess = createAction(
    '[Authors] Request add Authors success'
)

export const requestAddAuthorFail = createAction(
    '[Authors] Request add Authors fail'
)

export const resetAddedAuthor = createAction(
    '[Authors] Reset added Authors'
)