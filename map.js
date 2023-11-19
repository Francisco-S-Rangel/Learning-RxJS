import { map, Observable, from } from "rxjs";

const Array = [1,2,3,4,5];

const observable$ = from(Array).pipe(
    map(value=> value * 2)
)

observable$.subscribe((x)=> console.log(x));