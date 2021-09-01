import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, Observable, ConnectableObservable, timer } from 'rxjs';
import { map, publish, refCount, share, take, tap } from 'rxjs/operators';

import { MeasureValuesService } from './measure-values.service';
import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'rxw-multicast',
  templateUrl: './multicast.component.html',
})
export class MulticastComponent {

  listeners = [];
  logStream$ = new ReplaySubject<string>();

  measureValues$: Subject<number>;

  constructor(private mvs: MeasureValuesService, private es: ExerciseService) {
    /******************************/

    /*this.measureValues$ = this.mvs.getValues().pipe(
      tap(e => console.log(e)),
      share() // === publish + refCount
    );*/

    this.measureValues$ = new ReplaySubject<number>(1);
    this.mvs.getValues().pipe(tap(e => console.log(e)))
      .subscribe(this.measureValues$);





    // this.measureValues$ = timer(3000, 10000000000).pipe(map((e) => e + 10), share());

    /*setTimeout(() => {
      (this.measureValues$ as ConnectableObservable<number>).connect();
    }, 3000)*/


    /******************************/
  }

  addListener() {
    this.listeners.push(this.es.generateRandomString(5));
  }

  addConsoleListener() {
    const randomString = this.es.generateRandomString(5);
    this.measureValues$.subscribe(e => this.logStream$.next(`${randomString} ${e}`));
  }

}
