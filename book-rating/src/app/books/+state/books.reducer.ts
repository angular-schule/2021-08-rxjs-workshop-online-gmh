import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import * as BooksActions from './books.actions';
import { Book } from '../shared/book';

export const booksFeatureKey = 'books';

export interface State extends EntityState<Book> {
  loading: boolean;
}

export const booksAdapter = createEntityAdapter<Book>({
  selectId: book => book.isbn,
});

export const initialState: State = booksAdapter.getInitialState({
  loading: false,
});

export const reducer = createReducer(
  initialState,

  on(BooksActions.loadBooks, (state): State => {
    return { ...state, loading: true };
  }),

  on(BooksActions.loadBooksSuccess, (state, action): State => {
    return {
      ...booksAdapter.setAll(action.data, state),
      loading: false,
    };
  }),

  on(BooksActions.loadBooksFailure, (state, action): State => {
    return { ...state, loading: false };
  })
);
