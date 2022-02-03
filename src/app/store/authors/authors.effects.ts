import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AuthorsService } from 'src/app/services/authors.service';
import { requestAuthorsSuccess, requestAuthorsFail, requestAddAuthorSuccess, requestAddAuthorFail } from './authors.actions';

@Injectable()
export class userEffects {
    getAuthors$ = createEffect(():any => {
        return this.actions$.pipe(
        ofType('[Authors] Request Authors add'),
        mergeMap(() => this.authorsService.getAll()
        .pipe(
            map(authors => requestAuthorsSuccess({ authors })),
            catchError(authors => requestAuthorsFail({ authors }))
        ))
        )
    });

    addAuthor$ = createEffect(():any => {
        return this.actions$.pipe(
            ofType('[Authors] Request add Authors success'),
            mergeMap(() => this.authorsService.addAuthor()
            .pipe(
                map(authors => requestAddAuthorSuccess({ authors })),
                catchError(authors => requestAddAuthorFail({ authors }))
            ))
            )
        });

  constructor(
    private actions$: Actions,
    private authorsService: AuthorsService ) {}
}