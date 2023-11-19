import { from,filter} from "rxjs";

const Array1 = [2,68,39,13,55,63,998,273722,32,54,9,21,24];
const Array2 = [1,2,1,2,1,2,2,1,1,1,1];

//The filter operator checks the condition and if it is expected, the value is inserted as it should

//Check if it is an even number
const obs$ = from(Array1).pipe( filter(value=> value % 2 === 0) );

obs$.subscribe( value => console.log(value));

//Check if the value is equal 2 
const obs2$ = from(Array2).pipe( filter(value=> value === 2));

obs2$.subscribe( value => console.log(value));