import { Token } from "@angular/compiler";
import { createAction, props } from "@ngrx/store";

export const requestLogin = createAction(
    '[Login] Request login'
)

export const requestLoginSuccess = createAction(
    '[Login] Request login success',
    props<{token: Token[]}>()
)

export const requestLoginFail = createAction(
    '[Login] Request login fail',
    props<{token: Token[]}>()
)

export const requestRegister = createAction(
    '[Register] Request register'
)

export const requestRegisterSuccess = createAction(
    '[Register] Request register success'
)

export const requestRegisterFail = createAction(
    '[Register] Request register fail'
)

export const requestLogout = createAction(
    '[Logout] Request Logout'
)

export const requestLogoutSuccess = createAction(
    '[Logout] Request Logout success'
)