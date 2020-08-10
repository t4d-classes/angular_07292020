import { Component, OnInit } from '@angular/core';

import { ColorsService } from './services/colors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // register the service for injection in this component and all child components
  providers: [ ColorsService ],
  // providers: [ { provide: ColorsService, useClass: ColorsService } ],
})
export class AppComponent implements OnInit {
  title = 'services-app';

  constructor(private colorsSvc: ColorsService) { }

  public ngOnInit(): void {
    this.title = this.colorsSvc.all().map(c => c.name).join(', ');
  }
}
