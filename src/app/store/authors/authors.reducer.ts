import { createReducer, on } from "@ngrx/store";
import { requestAuthors, requestAuthorsSuccess, requestAuthorsFail, requestAddAuthor, requestAddAuthorSuccess, requestAddAuthorFail, resetAddedAuthor } from "./authors.actions";

export const authorsFeatureKey = 'authorsFeatureStore';

export interface AuthorsState {
    authors: string[],
    addedAuthor: string
}

interface Action {
    type: string;
}

export const initialState: AuthorsState = {
    authors: ['author1, author2'],
    addedAuthor: 'Added author'
}


export const reducer = createReducer(
    initialState,
    on(
        requestAuthors, requestAuthorsSuccess, requestAuthorsFail, requestAddAuthor, requestAddAuthorSuccess, requestAddAuthorFail, resetAddedAuthor,
        (state) => (state)
    )
);


export const authorsReducer = 
    (state: AuthorsState, action: Action): AuthorsState => 
    reducer(state, action);
