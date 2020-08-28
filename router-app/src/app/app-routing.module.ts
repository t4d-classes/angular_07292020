import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppHomeComponent } from './components/app-home/app-home.component';
// import { CarHomeComponent } from './car-tool/components/car-home/car-home.component';
// import { CarAboutComponent } from './car-tool/components/car-about/car-about.component';
// import { ColorHomeComponent } from './color-tool/components/color-home/color-home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: AppHomeComponent},
  // { path: 'car-home', component: CarHomeComponent},
  // { path: 'car-about', component: CarAboutComponent},
  // { path: 'color-home', component: ColorHomeComponent},
  { path: 'car-tool', loadChildren: () => import('./car-tool/car-tool.module').then(m => m.CarToolModule) },
  { path: 'color-tool', loadChildren: () => import('./color-tool/color-tool.module').then(m => m.ColorToolModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
