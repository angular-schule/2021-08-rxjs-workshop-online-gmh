import { Component } from '@angular/core';
import { TypeaheadService } from './typeahead.service';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs/operators';
import { Book } from './book';

@Component({
  selector: 'rxw-typeahead',
  templateUrl: './typeahead.component.html',
})
export class TypeaheadComponent {

  searchControl = new FormControl('');
  results: Book[];
  loading = false;

  constructor(private ts: TypeaheadService) {
    const searchInput$ = this.searchControl.valueChanges;

    /**
     * Baue eine TypeAhead-Suche, die während der Eingabe eine Suche gegen unsere Buch-API ausführt.
     *
     * Die Eingabewerte aus dem Formular werden durch das Observable searchInput$ bekanntgegeben.
     * Zur Suche soll der Service TypeaheadService verwendet werden, er hat die Methode this.ts.search(term: string).
     * Die aktuellen Ergebnisse sollen im Property this.results gespeichert werden.
     * Der Lade-Indikator wird angezeigt, wenn das Property loading den Wert true hat.
     *
     * Extra: Refaktorisiere den Code und nutze die AsyncPipe von Angular, um die Subscription aufzubauen.
     */

    /******************************/
    searchInput$.pipe(
      filter((term: string) => term.length >= 3 || term.length === 0),
      debounceTime(1000),
      distinctUntilChanged(),
      tap(() => this.loading = true),
      switchMap(term => {
        if (term.length === 0) {
          return of([]);
        } else {
          return this.ts.search(term);
        }
      }),
      tap(() => this.loading = false),
    ).subscribe(books => this.results = books);

    /******************************/
  }

  formatAuthors(authors: string[]) {
    return Array.isArray(authors) ? authors.join(', ') : '';
  }

}
