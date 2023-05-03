import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsteroidesComponent } from './asteroides.component';
import { AsteroidesRoutingModule } from './asteroides-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AsteroidesService } from './asteroides.service';

@NgModule({
  imports: [
    CommonModule,
    AsteroidesRoutingModule,
    HttpClientModule
  ],
  exports: [
    AsteroidesComponent
  ],
  declarations: [
    AsteroidesComponent
  ],
  providers: [AsteroidesService],
})
export class AsteroidesModule { }
