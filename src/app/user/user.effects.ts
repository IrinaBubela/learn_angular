import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UserService } from './services/user.service';

@Injectable()
export class userEffects {
    getCurrentUser$ = createEffect(():any => {
    return this.actions$.pipe(
        ofType('[Current User] Request current user'),
        mergeMap(() => this.userService.getUser()
        .pipe(
            map(user => ({ type: '[Current User] Request current user success', payload: user })),
            catchError((error ) => { console.log("Error"); return EMPTY})
        ))
        )
    }
  );

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}