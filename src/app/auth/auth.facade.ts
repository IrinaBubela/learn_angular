import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Store, select } from '@ngrx/store';
import { requestLogin, requestLoginSuccess, requestLogout, requestLogoutSuccess, requestRegister,  } from "./auth.actions";
import { initialState } from "./auth.reducer";
import { isUserAuthorized, getToken, getSpecificErrorMessage } from "./auth.selectors";

export interface AuthState {
    isAuthorized: boolean,
    token: string,
    errorMessage: string
}

@Injectable({
    providedIn: 'root',
})
export class AuthStateFacade {

    public isAuthorized$: Observable<any>;
    public getToken$: Observable<any>;
    public getLoginErrorMessage$: Observable<any>;
    public getRegisterErrorMessage$: Observable<any>;

    constructor(private store: Store<AuthState>) {
        this.isAuthorized$ = store.pipe(select(isUserAuthorized));
        this.getToken$ = store.pipe(select(getToken));
        this.getLoginErrorMessage$ = store.pipe(select(getSpecificErrorMessage));
        this.getRegisterErrorMessage$ = store.pipe(select(getSpecificErrorMessage));
    }

    login(body: User) {
        this.store.dispatch(requestLogin({ body }));
    }

    register(body: User) {
        this.store.dispatch(requestRegister({ body }));
    }

    logout() {
        this.store.dispatch(requestLogout());
    }

    closeSession() {
        this.store.dispatch(requestLogoutSuccess());
    }

    setAuthorization() {
        this.store.dispatch(requestLoginSuccess({token: sessionStorage.getToken()}));
    }

}
