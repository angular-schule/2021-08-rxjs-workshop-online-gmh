import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as BooksActions from './books.actions';
import { BookStoreService } from '../shared/book-store.service';

@Injectable()
export class BooksEffects {
  constructor(private actions$: Actions, private bs: BookStoreService) {}
}
