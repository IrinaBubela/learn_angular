import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Store, select } from '@ngrx/store';
import { isAllCoursesLoadingSelector, isSearchingStateSelector, isSingleCourseLoadingSelector, getCourses, getAllCourses, getCourse, getErrorMessage } from "./courses.selectors";
import { requestAllCourses,requestSingleCourse,
        requestFilteredCourses, 
        requestDeleteCourse,requestCreateCourse
        } from "./courses.actions";

export interface CoursesState {
    allCourses: string[],
    courses: string[],
    course: string,
    isAllCoursesLoading: boolean,
    isSingleCourseLoading: boolean,
    isSearchState: boolean,
    errorMessage: string
}

@Injectable({
    providedIn: 'root',
})
export class coursesStateFacade {

    public isAllCoursesLoading$: Observable<any>;
    public isSingleCourseLoading$: Observable<any>;
    public isSearchingState$: Observable<any>;
    public courses$: Observable<any>;
    public allCourses$: Observable<any>;
    public course$: Observable<any>;
    public errorMessage$: Observable<any>;

    constructor(private store: Store<CoursesState>) {
        this.isAllCoursesLoading$ = this.store.pipe(select(isAllCoursesLoadingSelector));
        this.isSingleCourseLoading$ = this.store.pipe(select(isSearchingStateSelector));
        this.isSearchingState$ = this.store.pipe(select(isSearchingStateSelector));
        this.courses$ = this.store.pipe(select(getCourses));
        this.allCourses$ = this.store.pipe(select(getAllCourses));
        this.course$ = this.store.pipe(select(getCourse));
        this.errorMessage$ = this.store.pipe(select(getErrorMessage));
    }

    getAllCourses() {
        this.store.dispatch(requestAllCourses());
    }

    getSingleCourse(id: any) {
        this.store.dispatch(requestSingleCourse({ id }));
    }

    getFilteredCourses(searchValue: any) {
        this.store.dispatch(requestFilteredCourses({searchValue}));
    }

    editCourse(body:any, id:any)  {
        this.store.dispatch(requestSingleCourse({ body, id }));
    }

    createCourse(body:any) {
        this.store.dispatch(requestCreateCourse(body));
    }

    deleteCourse(id: any) {
        this.store.dispatch(requestDeleteCourse({ id }));
    }

}
