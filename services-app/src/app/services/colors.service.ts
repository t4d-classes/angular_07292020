import { Injectable } from '@angular/core';

// interface - for my data models
interface Color {
  id: number;
  name: string;
  hexcode: string;
}

// type alias - for adhoc data structures
// type Color = {
//   id: number,
//   name: string,
//   hexcode: string,
// };

// class CarColor implements Color {
//   public id: number;
//   public name: string;
//   public hexcode: string;
// }


// allows other services to be injected into the service (Angular 2)
@Injectable()
// {
//   // providedIn: 'root' // registers the service in the root module (AppModule) (Angular 6)
//   // there are other ways of registering which do not require @Injectable and "providedIn"
// })
export class ColorsService {

  // property
  // member
  // data property
  // data member
  // valid typescript only
  // when compiled into JS, the code is moved to the constructor
  private colors: Color[] = [
    { id: 1, name: 'red', hexcode: 'ff0000' },
    { id: 2, name: 'green', hexcode: '00ff00' },
  ];

  // classes in programming allow data and methods to be defined together

  // initialization function which runs when the object is instantiated from the class

  // instance is being created by Angular internally
  // if any constructor parameters are specified, they will be injected as dependencies
  // by the Angular Dependency Injection system
  // this injection occurs because of the @Injectable decorator applied to the class
  constructor() {
    // should never cause side-effects

    // javascript version
    // initialize in constructor is great for typescript and javascript
    // this.colors = [
    //   { id: 1, name: 'red', hexcode: 'ff0000' },
    //   { id: 2, name: 'green', hexcode: '00ff00' },
    // ];
  }

  // JS property
  // TS member
  // JS function property
  // TS method member
  public all(): Color[] {
    return this.colors.concat();
  }
}

