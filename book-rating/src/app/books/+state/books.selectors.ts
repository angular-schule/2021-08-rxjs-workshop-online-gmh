import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBooks from './books.reducer';

const dummyState = {
  booksx: {
    books: [],
    loading: true,
  },
  counter: {
    counter: 5,
    foo: '',
  },
};

export const selectBooksState = createFeatureSelector<fromBooks.State>(
  fromBooks.booksFeatureKey
);

export const selectAllBooks = createSelector(
  selectBooksState,
  state => state.books
);

export const selectLoading = createSelector(
  selectBooksState,
  state => state.loading
);
