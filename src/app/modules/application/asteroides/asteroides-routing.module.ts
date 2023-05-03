import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsteroidesComponent } from './asteroides.component';

const routes: Routes = [
  { path: '', component: AsteroidesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsteroidesRoutingModule { }
