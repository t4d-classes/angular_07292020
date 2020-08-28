import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ColorToolRoutingModule } from './car-tool-routing.module';
import { ColorHomeComponent } from './components/color-home/color-home.component';



@NgModule({
  declarations: [ColorHomeComponent],
  imports: [
    CommonModule, SharedModule, ColorToolRoutingModule,
  ],
  exports: [ColorHomeComponent],
})
export class ColorToolModule { }
