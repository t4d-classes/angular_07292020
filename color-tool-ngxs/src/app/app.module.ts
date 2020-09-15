import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { ReactiveFormsModule } from '@angular/forms';

import { AppStore } from './app.store';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([ AppStore ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
