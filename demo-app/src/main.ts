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
