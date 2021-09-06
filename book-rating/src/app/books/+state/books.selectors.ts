import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBooks from './books.reducer';

const entitySelectors = fromBooks.booksAdapter.getSelectors();

export const selectBooksState = createFeatureSelector<fromBooks.State>(
  fromBooks.booksFeatureKey
);

export const selectAllBooks = createSelector(
  selectBooksState,
  entitySelectors.selectAll
);

// state => { return state.ids.map(id => state.entities[id]); }

export const selectLoading = createSelector(
  selectBooksState,
  state => state.loading
);

export const selectEntities = createSelector(
  selectBooksState,
  entitySelectors.selectEntities
);

export const selectBookById = (isbn: string) => {
  return createSelector(selectEntities, entities => entities[isbn]);
};
