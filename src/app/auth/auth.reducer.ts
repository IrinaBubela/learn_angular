import { createReducer, on } from "@ngrx/store";
import { requestLogin,
    requestLoginSuccess,
    requestLoginFail,
    requestRegister,
    requestRegisterSuccess,
    requestRegisterFail,
    requestLogout,
    requestLogoutSuccess } 
from "./auth.actions";

export const authFeatureKey = 'authFeatureStore';

export interface AuthState {
    isAuthorized: boolean,
    token: string,
    errorMessage: string
}

interface Action {
    type: string;
}

export const initialState: AuthState = {
    isAuthorized: true,
    token: 'token',
    errorMessage: 'Error Message is here'
}


export const reducer = createReducer(
    initialState,
    on(
        requestLogin, 
        requestLoginSuccess,
        requestLoginFail,
        requestRegister,
        requestRegisterSuccess,
        requestRegisterFail,
        requestLogout,
        requestLogoutSuccess,
        (state) => (state)
    )
);


export const authReducer = 
    (state: AuthState, action: Action): AuthState => 
    reducer(state, action);
