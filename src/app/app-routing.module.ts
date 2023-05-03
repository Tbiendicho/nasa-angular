import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/general/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  {
    path: 'contact',
    loadChildren: () => import('./modules/general/contact/contact.module')
      .then(mod => mod.ContactModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./modules/general/about/about.module')
      .then(mod => mod.AboutModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./modules/application/template-driven-forms/template-driven-forms.module')
      .then(mod => mod.TemplateDrivenFormsModule)
  },
  {
    path: 'images',
    loadChildren: () => import('./modules/application/items/items.module')
      .then(mod => mod.ItemsModule)
  },
  {
    path: 'asteroides',
    loadChildren: () => import('./modules/application/asteroides/asteroides.module')
      .then(mod => mod.AsteroidesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
