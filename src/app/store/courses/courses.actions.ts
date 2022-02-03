import { createAction } from "@ngrx/store";

export const requestAllCourses = createAction(
    '[Courses] Request All Courses'
)

export const requestAllCoursesSuccess = createAction(
    '[Courses] Request All Courses success'
)

export const requestAllCoursesFail = createAction(
    '[Courses] Request All Courses fail'
)

export const requestSingleCourse = createAction(
    '[Courses] Request Single Courses'
)

export const requestSingleCourseSuccess = createAction(
    '[Courses] Request Single Courses Success'
)

export const requestSingleCourseFail = createAction(
    '[Courses] Request Single Courses Fail'
)

export const requestFilteredCourses = createAction(
    '[Courses] Request Filtered Courses'
)

export const requestFilteredCoursesSuccess = createAction(
    '[Courses] Request Filtered Courses Success'
)

export const requestDeleteCourse = createAction(
    '[Courses] Request Deleted Course'
)

export const requestDeleteCourseFail = createAction(
    '[Courses] Request Deleted Course Fail'
)

export const requestEditCourse = createAction(
    '[Courses] Request Edit Courses '
)

export const requestEditCourseSuccess = createAction(
    '[Courses] Request Edit Course Success '
)

export const requestEditCourseFail = createAction(
    '[Courses] Request Edit Course Fail'
)

export const requestCreateCourse = createAction(
    '[Courses] Request Create Courses '
)

export const requestCreateCourseSuccess = createAction(
    '[Courses] Request Create Course Success '
)

export const requestCreateCourseFail = createAction(
    '[Courses] Request Create Course Fail'
)