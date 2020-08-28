import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarHomeComponent } from './components/car-home/car-home.component';
import { CarAboutComponent } from './components/car-about/car-about.component';

const routes: Routes = [
  { path: '', component: CarHomeComponent },
  { path: 'about', component: CarAboutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarToolRoutingModule { }
