import { Component } from '@angular/core';

import { Color } from './models/Color';
import { ColorFormComponent } from './components/color-form/color-form.component';

@Component({
  selector: 'app-root2',
  templateUrl: './app.component.html', // template
  styleUrls: ['./app.component.css'] // styling
})
export class AppComponent {

  // model - data and functions which are applied to the template

  headerText = 'Color Tool';

  colors: Color[] = [
    { id: 1, name: 'red', hexcode: 'ff0000' },
    { id: 2, name: 'green', hexcode: '00ff00' },
    { id: 3, name: 'blue', hexcode: '0000ff' },
  ];

  doAddColor(color: Color): void {
    this.colors = this.colors.concat({
      ...color,
      id: Math.max(...this.colors.map(c => c.id), 0) + 1,
    });
  }

  doDeleteColor(colorId: number): void {
    this.colors = this.colors.filter(c => c.id !== colorId);
  }

}
