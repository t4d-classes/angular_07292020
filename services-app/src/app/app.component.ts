import { Component, OnInit, Inject } from '@angular/core';

import { ColorsService, IColorsService, ColorsServiceSync, ColorsServiceSync2 } from './services/colors.service';

// mini exercise - move the Environment service registration to the App Module
import { Environment } from './services/environment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // register the service for injection in this component and all child components
  // providers: [ ColorsService ],
  // providers: [ { provide: ColorsService, useClass: ColorsServiceSync2 } ],
  providers: [
    {
      provide: ColorsService,
      deps: [ Environment ],
      useFactory: (env: { production: boolean }) => {

        if (env.production) {
          return new ColorsServiceSync();
        } else {
          return new ColorsServiceSync2();
        }

      },
    },
  ],
})
export class AppComponent implements OnInit {
  title = 'services-app';

  constructor(
    @Inject(ColorsService) private colorsSvc: IColorsService,
    @Inject(Environment) env: { production: boolean },
  ) {
    console.dir(env);
  }

  public ngOnInit(): void {
    this.title = this.colorsSvc.all().map(c => c.name).join(', ');
  }
}
