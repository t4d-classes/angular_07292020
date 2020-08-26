import { Component, OnInit } from '@angular/core';

import { Color } from './models/Color';
import { ColorsService } from './services/colors.service';

@Component({
  selector: 'app-root2',
  templateUrl: './app.component.html', // template
  styleUrls: ['./app.component.css'] // styling
})
export class AppComponent implements OnInit {

  headerText = 'Color Tool';

  colors: Color[] = [];

  constructor(private colorsSvc: ColorsService) { }

  ngOnInit(): void {
    this.colorsSvc.all().then(colors => this.colors = colors);
  }

  doAddColor(color: Color): void {
    this.colorsSvc
      .append(color)
      .then(() => this.colorsSvc.all())
      .then(colors => this.colors = colors);
  }

  doDeleteColor(colorId: number): void {
    this.colors = this.colors.filter(c => c.id !== colorId);
  }

}
