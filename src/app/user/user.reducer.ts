import { createReducer, on } from "@ngrx/store";
import { requestCurrentUser, requestCurrentUserFail, requestCurrentUserSuccess } from "./user.actions";

export const userFeatureKey = 'featureStore';

interface UserState {
    isAdmin: boolean,
    name: string
}

export const initialState: UserState = {
    isAdmin: true,
    name: 'User1',
};

interface Action {
    type: string;
}


export const reducer = createReducer(
    initialState,
    on(
        requestCurrentUser, 
        requestCurrentUserFail,
        (state) => (state)
    ),
    on(
        requestCurrentUserSuccess, 
        (state, { username }) => ({ ...state, prop: username }))
);

export const userReducer = 
    (state: UserState, action: Action): UserState => 
    reducer(state, action);
