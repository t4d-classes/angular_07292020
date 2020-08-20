import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { ColorsService } from './services/colors.service';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { Environment } from './services/environment.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  // registered at the module level and is available to all modules which
  // import this module, and all available to all components registered in
  // this module
  // providers: [ ColorsService ],
  providers: [ { provide: Environment, useValue: environment }, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
