import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authFeatureKey } from './auth.reducer';

export const featureState = createFeatureSelector(authFeatureKey); 

export const isUserAuthorized = createSelector(
    featureState, 
    (state: any) => state.isUserAuthorized 
);

export const getToken = createSelector(
    featureState, 
    (state: any) => state.getToken 
);

export const getSpecificErrorMessage = createSelector(
    featureState, 
    (state: any) => state.getSpecificErrorMessage 
);