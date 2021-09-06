import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  map,
  concatMap,
  mergeMap,
  switchMap,
} from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as BooksActions from './books.actions';
import { BookStoreService } from '../shared/book-store.service';

@Injectable()
export class BooksEffects {
  loadBooks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BooksActions.loadBooks),
      switchMap(() =>
        this.bs.getAll().pipe(
          map(data => BooksActions.loadBooksSuccess({ data })),
          catchError(error => of(BooksActions.loadBooksFailure({ error })))
        )
      )
    );
  });

  constructor(private actions$: Actions, private bs: BookStoreService) {}
}
