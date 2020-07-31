
export interface Color {
  id?: number;
  name: string;
  hexcode: string;
}


// interface IPerson {
//   firstName: string;
//   lastName: string;

//   // getFullName: () => string;
// }


// class Person implements IPerson {
//   firstName: string;
//   lastName: string;

//   // getFullName(): string {
//   //   return this.firstName + this.lastName;
//   // }
// }

// class Person2 implements IPerson {
//   firstName: string;
//   lastName: string;

//   // getFullName(): string {
//   //   return this.lastName + ', ' + this.firstName;
//   // }
// }

// const displayPerson = (person: IPerson) => {
//   console.log(person.getFullName());
// };

// const p = new Person();
// p.firstName = 'Bob';
// p.lastName = 'Smith';

// displayPerson(p); // Bob Smith

// const p2 = new Person2();
// p2.firstName = 'Bob';
// p2.lastName = 'Smith';

// displayPerson(p2); // Smith, Bob
