import { map, Observable, from, of } from "rxjs";

const Array = [1,2,3,4,5];

const observable$ = from(Array).pipe(
    map(value=> value * 2)
)

observable$.subscribe((x)=> console.log(x));

/* 
Remeber you have the map operator from RxJS and the map operator of an array
In the example above we use the operator from() to get each value of the array and the map() multiplies
But in the example bbellow we going to use map operator from RxJS together with the map of an array
*/

const observable2$ = of(Array).pipe(
    //remeber that of is different than from therefore value is equal to Array = [1,2,3,4,5]
    map(value=> value.map(number => number * 2))
)

observable2$.subscribe((x)=> console.log(x));