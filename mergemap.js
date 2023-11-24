import { mergeMap, of, delay, map } from "rxjs";

/*
MEERGEMAP IS ALSO KNOW AS FLATMAP

Emitted values are processed immediately

- Perform the mapping operation

Emission order is not mantained 

Example: In a competitive run, not necessary the first runner is going to get first
so then the second can finish first and first can finish after and so on and on 

Emissions are processed concurrently ( often more performant )

Order doesn't matter

Retrieving related data when the criteria doesn't change
*/

// Utility function to simulate an asynchronous operation that returns an Observable
function asyncOperation(number) {

    let randomNumber = getRandomValue();
    return of(`Result for ${number}`).pipe(
        delay(randomNumber)
    );
}

// Function to generate a random delay value, either 1000 or 2000
function getRandomValue(){
    const random = Math.floor(Math.random() * 2);
    return random == 0? 1000:2000;
}

// Creating an observable of numbers (1, 2, 3, 4, 5)
const numbers$ = of(1, 2, 3, 4, 5);

// Applying mergeMap to perform asynchronous operations in parallel
const result$ = numbers$.pipe(
    mergeMap(number => asyncOperation(number))
);

// Subscribing to the result$ observable and logging the emitted values
result$.subscribe(value => console.log(value));


/*
let observable1$ = of(1, 2, 3);
let observable2$ = of(4, 5, 6);

let result$ = observable1$.pipe(

    mergeMap(value1 => observable2$.pipe(map(value2 => value1 + value2)))
);

result$.subscribe(value => console.log(value));
*/