import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import * as BooksActions from './books.actions';
import { Book } from '../shared/book';

export const booksFeatureKey = 'books';

export interface State {
  books: Book[];
  loading: boolean;
}

export const initialState: State = {
  books: [],
  loading: false,
};

export const reducer = createReducer(
  initialState,

  on(BooksActions.loadBooks, (state): State => {
    return { ...state, loading: true };
  }),

  on(BooksActions.loadBooksSuccess, (state, action): State => {
    return {
      ...state,
      loading: false,
      books: action.data,
    };
  }),

  on(BooksActions.loadBooksFailure, (state, action): State => {
    return { ...state, loading: false };
  })
);
