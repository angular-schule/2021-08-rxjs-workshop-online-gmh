import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import * as BooksActions from './books.actions';

export const booksFeatureKey = 'books';

export interface State {}

export const initialState: State = {};

export const reducer = createReducer(
  initialState,

  on(BooksActions.loadBooks, (state): State => {
    return state;
  }),

  on(BooksActions.loadBooksSuccess, (state, action): State => {
    return state;
  }),

  on(BooksActions.loadBooksFailure, (state, action): State => {
    return state;
  })
);
