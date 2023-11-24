
/*
Stops processing of prior emitted value
Switches to the new emitted value
Performs the mapping operation

Example: Imagine a competitive running but only one runner 
is going to really run all the way

YOU GET ONLY ONE RESPONSE!

To switchMap only the latest emission matters

Retrieving based on user selection
Typeahead functionality
 */

// Importando o RxJS
import { fromEvent, of, interval } from "rxjs";
import { switchMap, delay, catchError, take } from "rxjs";


/*

// Simulando uma função que realiza uma solicitação HTTP
function simulateHttpRequest(value) {
  console.log(`Iniciando solicitação HTTP para ${value}`);
  return of(`Resultado da solicitação para ${value}`).pipe(
    // Adicionando um atraso para simular o tempo da solicitação
    delay(1000)
  );
}

// Criando um observável que emite valores a cada segundo
const source$ = interval(1000);

// Criando um observável com switchMap para lidar com as solicitações HTTP
const request$ = source$.pipe(
  switchMap(value => simulateHttpRequest(value)),
  catchError(error => {
    console.error('Erro na solicitação HTTP:', error);
    return of('Erro na solicitação HTTP');
  })
);

// Assinando o observável resultante
request$.subscribe(result => {
  console.log('Resultado:', result);
});

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

// Applying switchMap to perform asynchronous operations
const result$ = numbers$.pipe(
  switchMap(number => asyncOperation(number))
);

// Subscribing to the result and logging the emitted values
result$.subscribe(value => console.log(value));