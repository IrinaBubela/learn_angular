import { createReducer, on } from "@ngrx/store";
import { requestAllCourses, requestAllCoursesSuccess,
    requestAllCoursesFail, requestSingleCourse,
    requestSingleCourseSuccess, requestSingleCourseFail,
    requestFilteredCourses, requestFilteredCoursesSuccess,
    requestDeleteCourse, requestDeleteCourseFail, requestEditCourse,
    requestEditCourseSuccess, requestEditCourseFail, requestCreateCourse,
    requestCreateCourseSuccess, requestCreateCourseFail
     } from "./courses.actions";

export const coursesFeatureKey = 'coursesFeatureStore';

export interface CoursesState {
    allCourses: string[],
    courses: string[],
    course: string,
    isAllCoursesLoading: boolean,
    isSingleCourseLoading: boolean,
    isSearchState: boolean,
    errorMessage: string
}

interface Action {
    type: string;
}

export const initialState: CoursesState = {
    allCourses: ['c1', 'c2'],
    courses: ['c1'],
    course: 'course1',
    isAllCoursesLoading: true,
    isSingleCourseLoading: true,
    isSearchState: true,
    errorMessage: 'error Message'
}


export const reducer = createReducer(
    initialState,
    on(
        requestAllCourses, requestAllCoursesSuccess,
        requestAllCoursesFail, requestSingleCourse,
        requestSingleCourseSuccess, requestSingleCourseFail,
        requestFilteredCourses, requestFilteredCoursesSuccess,
        requestDeleteCourse, requestDeleteCourseFail, requestEditCourse,
        requestEditCourseSuccess, requestEditCourseFail, requestCreateCourse,
        requestCreateCourseSuccess, requestCreateCourseFail,
        (state) => (state)
    )
);


export const authorsReducer = 
    (state: CoursesState, action: Action): CoursesState => 
    reducer(state, action);
