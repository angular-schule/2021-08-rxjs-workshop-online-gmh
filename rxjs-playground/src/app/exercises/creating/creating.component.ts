import { Component, OnInit } from '@angular/core';
import { Observable, of, from, timer, interval, ReplaySubject, forkJoin } from 'rxjs';
import { map, filter, delay, concatMap } from 'rxjs/operators';

@Component({
  selector: 'rxw-creating',
  templateUrl: './creating.component.html',
})
export class CreatingComponent implements OnInit {

  logStream$ = new ReplaySubject<string | number>();

  ngOnInit() {
    /**
     * 1. Erstelle ein Observable und abonniere den Datenstrom.
     *    Probiere dazu die verschiedenen Creation Functions aus: of(), from(), timer(), interval()
     * 2. Implementiere außerdem ein Observable manuell, indem du den Konstruktor "new Observable()" nutzt.
     *
     * Tipps:
     * Zum Abonnieren kannst du einen (partiellen) Observer oder ein einzelnes next-Callback verwenden.
     * Du kannst die Methode this.log() verwenden, um eine Ausgabe in der schwarzen Box im Browser zu erzeugen.
     */

    /******************************/



    /*function producer(o) {
      setTimeout(() => {
        o.next(Math.random() * 10);
      }, 2000);

      setTimeout(() => {
        o.next(10);
      }, 3000);
    }

    // Observer
    const obs = {
      next: (result) => {
        console.log(result);
      },
      error: err => console.error(err),
      comeplete: () => {}
    }

    // producer(obs);
    const myObs$ = new Observable(producer);
    // myObs$.subscribe(obs);
    // myObs$.subscribe(obs);
    // myObs$.subscribe(obs);
    myObs$.subscribe(e => console.log(e));

    new Observable(o => {
      o.next(5);
      o.complete();
    })*/

    /*timer(2000, 500).pipe(
      map(e => e * 3),
      filter(e => e % 2 === 0)
    ).subscribe({
      next: e => this.log(e),
      complete: () => this.log('Complete')
    });*/


    function getAuthor(id: number): Observable<{ name: string }> {
      const authors = {
        1: { name: 'Ferdinand Malcher' },
        2: { name: 'Johannes Hoppe' },
        3: { name: 'Danny Koppenhagen' }
      };
      return of(authors[id] || { name: 'unknown' }).pipe(delay(1000));
    }

    function getBook() {
      return of({
        isbn: '111',
        title: 'Angular',
        authorIds: [1, 2]
      }).pipe(delay(1000));
    }


    getBook().pipe(
      concatMap(book => forkJoin(book.authorIds.map(id => getAuthor(id))).pipe(
        map(authors => {
          return {
            ...book,
            authors
          }
        })
      )),
    ).subscribe(e => console.log(e));




    /******************************/
  }

  private log(msg: string | number) {
    this.logStream$.next(msg);
  }

}
