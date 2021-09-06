import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { pipe } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { decrement, increment, reset } from '../+state/counter.actions';
import { selectCounter } from '../+state/counter.selectors';

import { MyState, StateService } from '../state.service';

// export const selectCounter = (state: MyState) => state.counter;

// const select = selector => pipe(map(selector), distinctUntilChanged());

@Component({
  selector: 'br-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  counter$ = this.store.select(selectCounter);

  constructor(private service: StateService, private store: Store) {}

  increment() {
    // this.service.dispatch('INC');
    this.store.dispatch(increment());
  }

  decrement() {
    // this.service.dispatch('DEC');
    this.store.dispatch(decrement());
  }

  reset() {
    // this.service.dispatch('FOO');
    this.store.dispatch(reset());
  }
}
