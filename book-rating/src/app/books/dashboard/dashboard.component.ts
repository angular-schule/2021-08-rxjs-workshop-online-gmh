import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { loadBooks } from '../+state/books.actions';
import { selectAllBooks, selectLoading } from '../+state/books.selectors';

import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  // books: Book[] = [];
  loading$ = this.store.select(selectLoading);
  books$ = this.store.select(selectAllBooks);

  constructor(private bs: BookStoreService, private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadBooks());
  }

  rateUp(book: Book) {
    const ratedBook = { ...book, rating: Math.min(5, book.rating + 1) };
    this.updateList(ratedBook);
  }

  rateDown(book: Book) {
    const ratedBook = { ...book, rating: Math.max(1, book.rating - 1) };
    this.updateList(ratedBook);
  }

  updateList(ratedBook: Book) {
    /*this.books = this.books.map(b =>
      b.isbn === ratedBook.isbn ? ratedBook : b
    );*/
  }

  trackBook(index: number, item: Book) {
    return item.isbn;
  }
}
