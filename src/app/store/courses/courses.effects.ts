import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, filter } from 'rxjs/operators';
import { requestAllCoursesSuccess, requestFilteredCourses } from './courses.actions';
import { coursesStateFacade } from './courses.facade';

@Injectable()
export class userEffects {
    getAll$ = createEffect(():any => {
        return this.actions$.pipe(
        ofType('[Courses] Request All Courses'),
        mergeMap(() => this.coursesService.getAll()
        .pipe(
            map(courses => requestAllCoursesSuccess({ courses })),
            catchError(courses => requestAllCoursesFail({ courses }))
        ))
        )
    });

    filteredCourses$ = createEffect(():any => {
        return this.actions$.pipe(
            mergeMap(() => this.coursesStateFacade.getAllCourses()
            .pipe(
                filter(searchValue => requestFilteredCourses({ searchValue }))
            ))
            )
        });

  constructor(
    private actions$: Actions,
    private coursesStateFacade: coursesStateFacade ) {}
}