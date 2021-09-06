import { StaticReflector } from '@angular/compiler';
import { Action, createReducer, on } from '@ngrx/store';
import { ExpandSubscriber } from 'rxjs/internal/operators/expand';
import * as CounterActions from './counter.actions';

export const counterFeatureKey = 'counter';

export interface State {
  counter: number;
  foo: string;
}

export const initialState: State = {
  counter: 0,
  foo: '',
};

export const reducer = createReducer(
  initialState,

  on(CounterActions.increment, (state, action): State => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),

  on(CounterActions.decrement, (state, action): State => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),

  on(CounterActions.reset, (state, action): State => {
    return {
      ...state,
      counter: 0,
    };
  })
);
