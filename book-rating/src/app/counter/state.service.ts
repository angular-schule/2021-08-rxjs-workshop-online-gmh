import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { scan, startWith } from 'rxjs/operators';

export interface MyState {
  counter: number;
  foo: string;
}

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private input$ = new Subject<string>();
  private initialState: MyState = {
    counter: 0,
    foo: '',
  };

  state$ = this.input$.pipe(
    startWith('INIT'),
    scan(this.reducer, this.initialState)
  );

  private reducer(state: MyState, message: string): MyState {
    switch (message) {
      case 'INC':
        return { ...state, counter: state.counter + 1, foo: '++++' };
      case 'DEC':
        return { ...state, counter: state.counter - 1, foo: '-----' };
      case 'RESET':
        return { ...state, counter: 0 };
      case 'FOO':
        return { ...state, foo: 'HALLO' };

      default:
        return state;
    }
  }

  dispatch(input: string) {
    this.input$.next(input);
  }

  constructor() {
    this.state$.subscribe(console.log);
  }
}
