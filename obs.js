import { Observable, of } from "rxjs";

var array = [
    46,47,48,49,50
]


// Examples of Observables

let obs$ = new Observable((subscriber) => {

    for(let i=0; i< 15; i++){
    subscriber.next(i+1);
    }
    subscriber.complete();
    subscriber.error();
});

let observer = {


    next: (value) => {
        console.log(value);
    },
    complete: () => {
        console.log("Complete!");
    },
    error: (err) => {
        console.log("This is broken!")
    }
}

obs$.subscribe(observer);

let obs2$ = new Observable((subscriber) => {
    for(let z=15; z< 30; z++){
        subscriber.next(z+1);
    }
    subscriber.complete();
    subscriber.error();

});

obs2$.subscribe({
    next: (value2) => {
        console.log(value2);
    },
    error: (err) => {
        console.log("Something wrong ocorred: " + err);
    },
    complete: () => {
        console.log("Complete!");
    }
})

let obs3$ = new Observable((subscriber) => {
    subscriber.next();
    subscriber.error();
    subscriber.complete();
})

obs3$.subscribe({
    next: () => {
        for(let y=30; y<45; y++){
            console.log(y+1);
        }
    },
    error: (err) => {
        console.log("Something wrong ocorred: " + err);
    },
    complete: () => {
        console.log("Complete!");
    }
})

let obs4$ = new Observable((subscriber) => {
    subscriber.next();
    subscriber.complete();
    subscriber.error();
})

let observer2 = {
    next: () => {
        for(let w = 0; w < array.length; w++){
            console.log(array[w]);
        }
    },
    error: (err) => {
        console.log("This is Broken!");
    },
    complete: () => {
        console.log("Complete!")
    }
}

obs4$.subscribe(observer2);