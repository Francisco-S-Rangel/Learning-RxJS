import { from, Observable} from "rxjs";

const array = [1,2,3,4,5];

//Examples of the operator from(), it is an operator that creates an Observable using an Array, Iterator

from(["The Chico","is a good friend!"]).subscribe({
    next: value => console.log(value),
    complete: () => console.log("Complete!"),
    error: err => console.log("Error: " + err)
});

from(array).subscribe(value => console.log(value));

// Working with Promises, remember a Promise is an Iterator and not only that but also a class that must be instantiated
const promise = new Promise((resolve, reject) => {
    resolve('Resolve');
    // reject('Reject'); // Commented out to ensure the Promise is resolved
});

// You won't see the value of the promise immediately because the promise wasn't resolved yet, but it will be in the right time
console.log(promise);

const observablePromise$ = from(promise);

observablePromise$.subscribe({
    next: (value) => console.log(value),
    complete: () => console.log("Complete!"),
    error: err => console.log("Error: " + err)
})