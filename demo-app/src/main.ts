import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { _ParseAST } from '@angular/compiler';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


// obj[keyMustBeAString] = valueCanBeAnything

// const DATE_SORT = 1; // 'datesort';
// const PRI_SORT = 2; // 'prisort';

// let mySortCache: {
//   [ x: string ]: []
// } = {};

// mySortCache[DATE_SORT] = [];
// mySortCache[PRI_SORT] = [];

// // invalidate
// mySortCache = {};

// const mySortCache = new Map<number, any[]>();

// mySortCache.set(DATE_SORT, []);
// mySortCache.set(PRI_SORT, []);

// if (mySortCache.has(DATE_SORT)) {
//   const sortedItems = mySortCache.get(DATE_SORT);
// }

// mySortCache.clear();

import { Observable, Subscriber } from 'rxjs';
import { map, filter, take, skip } from 'rxjs/operators';

// Promises
// The async operation runs immediate when the promise is created
// Only one result, resolve or reject, will come from a promise

// console.log('create promise');

// let promiseCounter = 0;

// const p = new Promise((resolve, reject) => {

//   console.log('running the function passed to the promise, starting the async operation');

//   promiseCounter++;

//   setTimeout(() => {
//     resolve('a:' + promiseCounter);
//   }, 2000);

// });

// p.then(result => console.log('p: t1: ' + result));
// p.then(result => console.log('p: t2: ' + result));

// setTimeout(() => {
//   p.then(result => console.log('p: t3: ' + result));
// }, 3000);

// console.log('create observable');

// let observableCounter = 0;

// const o = new Observable( (observer: Subscriber<number>) => {

//   console.log('running the function passed to the observable, starting the async operation');

//   const myObservableCounter = ++observableCounter;

//   let counter = 0;

//   const handle = setInterval(() => {

//     if (observer.closed) {
//       clearInterval(handle);
//       console.log('no one listening, canceling interval');
//       observer.complete();
//     }

//     counter++;

//     console.log('running setinterval callback');
//     // observer.next('a:' + String(myObservableCounter) + ':' + String(counter));
//     observer.next(counter);

//   }, 500);

//   // setTimeout(() => {
//   //   clearInterval(handle);
//   //   console.log('canceling interval');
//   //   observer.complete();
//   // }, 10000);

// } );

// const subscription = o.pipe(
//   skip(10),
//   map(n => n * 2),
//   filter(n => n > 10),
//   take(5),
// ).subscribe({
//   next: result => console.log('o:s:1 ' + result),
//   complete: () => console.log('all done'),
// });




// setTimeout(() => {
//   subscription.unsubscribe();
// }, 3000);




// setTimeout(() => {
//   o.subscribe({
//     next: result => console.log('o:s:2 ' + result),
//   });
// }, 2000);
