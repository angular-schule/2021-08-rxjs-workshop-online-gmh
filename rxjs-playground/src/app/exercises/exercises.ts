import { Exercises } from './types';

export const exercisesList: Exercises = [
    { name: 'Creating Observables', folder: 'creating' },
    { name: 'Window resize: Observables from events', folder: 'fromevent' },
    { name: 'Game Score', folder: 'game-score' },
    { name: 'Multicasting with Subjects', folder: 'multicast' },
    { name: 'Error handling', folder: 'error-handling' },
    { name: 'How to unsubscribe and avoid memory leaks', folder: 'unsubscribe' },
    { name: 'Higher Order Observables with concatMap, mergeMap, switchMap, exhaustMap', folder: 'higherorder' },
    { name: 'Automatic subscriptions with the AsyncPipe', folder: 'asyncpipe' },
    { name: 'Extra: Typeahead search', folder: 'typeahead' },
    { name: 'Extra: Drag and drop', folder: 'dragdrop' },
    { name: 'Extra: Stock exchange: Use values from other Observables', folder: 'stock' },
];
