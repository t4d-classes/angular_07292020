import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToolHeaderComponent } from './components/tool-header/tool-header.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { ColorFormComponent } from './components/color-form/color-form.component';
import { MyUppercasePipe } from './pipes/my-uppercase.pipe';
import { MyAppendPipe } from './pipes/my-append.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ToolHeaderComponent,
    ColorListComponent,
    ColorFormComponent,
    MyUppercasePipe,
    MyAppendPipe
  ],
  imports: [
    BrowserModule, ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
