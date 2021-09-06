import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectBookById } from '../+state/books.selectors';

import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss'],
})
export class CreateBookComponent {
  angularBook$ = this.store.select(selectBookById('9783864907791'));

  constructor(
    private bs: BookStoreService,
    private router: Router,
    private store: Store
  ) {}

  createBook(book: Book) {
    this.bs.create(book).subscribe(() => {
      this.router.navigate(['/books', book.isbn]);
    });
  }
}
