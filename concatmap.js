import { concatMap, of, delay, map } from "rxjs";


/*
Emitted values are queued and processed in order

. Performs the mapping operation
. Waits for it to complete
. Repeats

Retain emission order
Example*: In a collaborative race, the sequence of runners can't change, 
the order of the runners has to be maintened 
the first runner has to finish and then and only then the second one can finish

Use ConcatMap When

- Emissions are processed sequentially, one at a time
- Order matters 
- Example: Insert, update and delete operations
*/

/*
let obs$ = of(1,2,3,4).pipe(
    concatMap((id) => of(id))
);

obs$.subscribe(value => console.log(value));
*/

// Create an observable of numbers (1, 2, 3, 4, 5)
let numbers$ = of(1,2,3,4,5);

// Simulated asynchronous operation that returns an observable
let asyncOperation = (number) => {

    let randomNumber = getRandomValue();
    return of(`Result for ${number}`).pipe(
        delay(randomNumber)
    );
};

// Function to generate a random delay value, either 1000 or 2000
function getRandomValue(){
    const random = Math.floor(Math.random() * 2);
    return random == 0? 1000:2000;
}

// Apply concatMap to the numbers$ observable to perform async operations in order
let result$ = numbers$.pipe(
     concatMap(number => asyncOperation(number))
);

// Subscribe to the result$ observable and log the emitted values
result$.subscribe(value => console.log(value))