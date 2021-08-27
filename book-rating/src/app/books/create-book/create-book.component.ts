import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss'],
})
export class CreateBookComponent {
  constructor(private bs: BookStoreService, private router: Router) {}

  createBook(book: Book) {
    this.bs.create(book).subscribe(() => {
      this.router.navigate(['/books', book.isbn]);
    });
  }
}
