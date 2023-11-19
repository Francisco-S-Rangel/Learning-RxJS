import { Observable, Subscriber, of } from "rxjs";

const array = [1,2,3,4,5];
const obj = {
    number1: 1,
    number2: 2
}

//Examples of the operator of(), it is an operator that creates an Observable using a stream of data

of("The Chico", "is a", "good friend!").subscribe(value => console.log(value));

console.log("------")

of(1,2,3,4,5).subscribe(
    {
        next: value => console.log(value),
        error: err => console.log("Errror: " + err),
        complete: () => console.log("Complete!")
    }
)

of(array).subscribe(
    {
        next: value => console.log(value),
        error: err => console.log("Errror: " + err),
        complete: () => console.log("Complete!")
    }
)

of(obj).subscribe(
    {
        next: value => console.log(value),
        error: err => console.log("Errror: " + err),
        complete: () => console.log("Complete!")
    }
)


of(array,obj).subscribe(
    {
        next: value => console.log(value),
        error: err => console.log("Errror: " + err),
        complete: () => console.log("Complete!")
    }
)

/*
function handmadeOf(...args){
    return new Observable(subscriber => {
        for(let i=0; i < args.length; i++){
            subscriber.next(args[i]);
        }
        subscriber.error("Error!");
        subscriber.complete("Complete!")
    });
}

handmadeOf("The Chico","is a", "good friend!").subscribe(value => console.log(value));
*/