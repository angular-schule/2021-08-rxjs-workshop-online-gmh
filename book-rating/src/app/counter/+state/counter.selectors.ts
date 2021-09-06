import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCounter from './counter.reducer';
/*
{
  books: {},
  counter: {
    foo: '',
    counter: 5
  }
}*/

export const selectCounterState = createFeatureSelector<fromCounter.State>(
  fromCounter.counterFeatureKey
);

export const selectCounter = createSelector(
  selectCounterState,
  state => state.counter
);
