import { createFeatureSelector, createSelector } from '@ngrx/store';
import { coursesFeatureKey } from './courses.reducer';

export const featureState = createFeatureSelector(coursesFeatureKey); 

export const isAllCoursesLoadingSelector = createSelector(
    featureState, 
    (state: any) => state.isAllCoursesLoadingSelector 
);

export const isSearchingStateSelector = createSelector(
    featureState, 
    (state: any) => state.isSearchingStateSelector 
);


export const isSingleCourseLoadingSelector = createSelector(
    featureState, 
    (state: any) => state.isSingleCourseLoadingSelector 
);

export const getCourses = createSelector(
    featureState, 
    (state: any) => state.getCourses 
);


export const getAllCourses = createSelector(
    featureState, 
    (state: any) => state.getAllCourses 
);

export const getCourse = createSelector(
    featureState, 
    (state: any) => state.getCourse 
);

export const getErrorMessage = createSelector(
    featureState, 
    (state: any) => state.getErrorMessage 
);