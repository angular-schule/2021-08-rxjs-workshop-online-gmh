import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { BooksRoutingModule } from './books-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { RepeatDirective } from './shared/repeat.directive';
import { CreateBookComponent } from './create-book/create-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookFormComponent } from './book-form/book-form.component';
import * as fromBooks from './+state/books.reducer';
import { BooksEffects } from './+state/books.effects';

@NgModule({
  declarations: [
    DashboardComponent,
    BookComponent,
    RepeatDirective,
    BookFormComponent,
    CreateBookComponent,
    BookDetailsComponent,
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromBooks.booksFeatureKey, fromBooks.reducer),
    EffectsModule.forFeature([BooksEffects]),
  ],
})
export class BooksModule {}
