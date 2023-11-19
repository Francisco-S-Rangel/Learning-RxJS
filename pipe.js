import { of, map, filter } from "rxjs";

//Examples of the operator pipe(), pipe is literally a pipe you basically put oyher operators inside it
let observable$ = of(1,46,289,2,45).pipe(
    map((val)=> val*2)
)

observable$.subscribe(value => console.log(value));

console.log("-------");
// Remember that use double the value of the numbers in the Observable(observable$)
let modifiedNumbers$ = observable$.pipe(
    filter(value => value % 2 === 0) // Filter only even numbers
);

modifiedNumbers$.subscribe(value => console.log(value));

/* Certainly! In RxJS, the pipe function is used to compose multiple operators in a sequence, 
creating a pipeline for transforming or manipulating data within an observable stream. 
It allows you to apply a series of operators to an observable, making your code more modular and readable.*/

console.log("-------");
// divding by 2 to get back to the originals values
observable$ = observable$.pipe(
    map((value)=> value/2)
)

observable$.subscribe(value => console.log(value));

console.log("-------");

//Now priting only the even numbers of the orinals numbers
modifiedNumbers$ = observable$.pipe(
    filter(value=> value % 2 === 0)
);

modifiedNumbers$.subscribe(value => console.log(value));