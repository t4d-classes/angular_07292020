import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { CarToolRoutingModule } from './car-tool-routing.module';
import { CarHomeComponent } from './components/car-home/car-home.component';
import { VinPipe } from './pipes/vin.pipe';
import { CarAboutComponent } from './components/car-about/car-about.component';



@NgModule({
  declarations: [CarHomeComponent, VinPipe, CarAboutComponent],
  imports: [
    CommonModule, SharedModule, CarToolRoutingModule,
  ],
  exports: [CarHomeComponent, VinPipe],
})
export class CarToolModule { }
