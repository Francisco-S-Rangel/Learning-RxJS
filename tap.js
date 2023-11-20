import { tap,of,map } from "rxjs";

/*
The tap() operator in RxJS is used to perform side effects on an observable sequence without affecting the emission of elements. 
It is useful when you need to carry out operations, such as logging, manipulating data, or performing other actions, 
without modifying the data being transmitted by the observable sequence

observable.pipe(
  tap(data => {
    / Perform some action but do not modify the data
    / For example, send data to a monitoring tool
  })
);
 */

//debugging example and modifying data without affecting the main sequence
const obs$ = of(2).pipe(
    //note how you can use tap to see values inside a pipe
    tap({
        next: data => console.log('Received:', data),
        error: error => console.error('Error:', error),
        complete: () => console.log('Complete!')
      }),

    tap(data => console.log('Before Map: ', data)),
    map(data => data * 10),
    tap(data => console.log('After Map: ', data))
);

obs$.subscribe((data) => console.log(data))