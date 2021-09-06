
## Buchformular
- Migriere das Buchformular (Buch erstellen) zu NgRx.
- Lege dazu zwei neue Actions `createBook({ book })` und `createBookSuccess({ book })` an, ggf. auch `createBookFailure({ error })`.
- Implementiere einen Effect, um den HTTP-Request auszuführen.
- bei Erfolg: Füge das neue Buch in den State ein. Achte auf die Immutability. Navigiere danach zur Detailseite (im Effect).
- Tipp: Mit der Einstellung `{ dispatch: false }` im 2. Argument von `createEffect()` kannst Du verhindern, dass das Ergebnis der Effect-Pipeline dispatcht wird.

## Rating
- Migriere das Rating zu NgRx. Es soll zunächst nur lokal funktionieren, ohne HTTP.
- Lege diese Actions an: `rateUp({ book })` und `rateDown({ book })`
- Der Code aus dem Dashboard muss inhaltlich in den Reducer migriert werden.
- Nutze @ngrx/entity, um das Buch im Reducer zu updaten.
- Achte auf die Immutability.

## Detailseite
- Baue die Detailseite mit NgRx um.
- Dazu sollte die aktuelle ISBN aus der URL im State gespeichert werden (z.B. `selectedIsbn`)
- Ein Selektor soll anhand dieser ISBN immer das aktuelle Buch liefern.
- Baue einen Effect, der das Buch lädt und in die (existierende) Buchliste einfügt.
