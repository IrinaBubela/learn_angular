import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { requestLoginFail, requestLoginSuccess } from './auth.actions';
import { AuthService } from './services/auth.service';

@Injectable()
export class userEffects {
    login$ = createEffect(():any => {
    return this.actions$.pipe(
        ofType('[Login] Request login'),
        mergeMap(() => this.authService.login()
        .pipe(
            map(token => requestLoginSuccess({ token })),
            catchError(token => requestLoginFail({ token }))
        ))
        )
    }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}
}