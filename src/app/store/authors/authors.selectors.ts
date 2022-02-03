import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authorsFeatureKey } from './authors.reducer';

export const featureState = createFeatureSelector(authorsFeatureKey); 

export const getAddedAuthors = createSelector(
    featureState, 
    (state: any) => state.getAddedAuthors 
);

export const getAuthors = createSelector(
    featureState, 
    (state: any) => state.getAuthors 
);