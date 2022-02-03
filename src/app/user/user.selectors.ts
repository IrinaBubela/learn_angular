import { createFeatureSelector, createSelector } from '@ngrx/store';
import { userFeatureKey } from './user.reducer';

export const featureState = createFeatureSelector(userFeatureKey); 

export const getName = createSelector(
    featureState, 
    (state: any) => state.getName 
);

export const isAdmin = createSelector(
    featureState, 
    (state: any) => state.isAdmin 
);


