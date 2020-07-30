import { Component } from '@angular/core';

@Component({
  selector: 'app-root2',
  templateUrl: './app.component.html', // template
  styleUrls: ['./app.component.css'] // styling
})
export class AppComponent {

  // model - data and functions which are applied to the template

  headerText = 'Color Tool';

  colors = [
    'red', 'green', 'blue',
  ];


  addColor(colorName: string): void {
    this.colors = this.colors.concat(colorName); // immutable
    // this.colors.push(this.colorForm.value.colorName); // mutates the model
  }

}
