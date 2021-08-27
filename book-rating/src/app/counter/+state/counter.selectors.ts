import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCounter from './counter.reducer';

export const selectCounterState = createFeatureSelector<fromCounter.State>(
  fromCounter.counterFeatureKey
);
