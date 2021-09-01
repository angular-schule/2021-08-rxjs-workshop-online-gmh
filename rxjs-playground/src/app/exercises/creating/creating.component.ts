import { Component, OnInit } from '@angular/core';
import { Observable, of, from, timer, interval, ReplaySubject } from 'rxjs';
import { map, filter } from 'rxjs/operators';

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

    timer(2000, 500).pipe(
      map(e => e * 3),
      filter(e => e % 2 === 0)
    ).subscribe({
      next: e => this.log(e),
      complete: () => this.log('Complete')
    });



    /******************************/
  }

  private log(msg: string | number) {
    this.logStream$.next(msg);
  }

}
