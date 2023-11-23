import { interval , take, takeUntil} from "rxjs";

/*
interval returns an Observable that emits an infinite sequence of ascending integers, 
with a constant interval of time of your choosing between those emissions.
EX: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
 */

/*
const numbers$ = interval(1000);
const takeFourNumbers$ = numbers$.pipe(take(5));

takeFourNumbers$.subscribe(x => console.log('Value: ' + x));
*/

// Function to log values emitted by the Observable
function logValue(value) {
    console.log(`Emitted value: ${value}`);
}

// Create an Observable that emits values every 1000 milliseconds (1 second)
const observable$ = interval(1000);

// Create an Observable that emits a value after 5 seconds
const timerObservable$ = interval(5000);

// Subscribe to the first Observable and log the values
const subscription$ = observable$.pipe(
    // Limit value emissions until the second Observable emits a value
    takeUntil(timerObservable$)
).subscribe(value => logValue(value));

// After 10 seconds, unsubscribe to terminate the Observable
setTimeout(()=> {
    subscription$.unsubscribe();
    console.log("Subscription canceled after 10 seconds.");

}, 10000);