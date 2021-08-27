import { Action, createReducer, on } from '@ngrx/store';
import * as CounterActions from './counter.actions';

export const counterFeatureKey = 'counter';

export interface State {}

export const initialState: State = {};

export const reducer = createReducer(
  initialState,

  on(CounterActions.dummyAction, (state, action): State => state)
);
