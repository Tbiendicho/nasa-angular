import { Component, OnInit } from '@angular/core';
import { AsteroidesService } from './asteroides.service';
import { TemplateDrivenFormsComponent } from '../template-driven-forms/template-driven-forms.component';

@Component({
  selector: 'app-asteroides',
  templateUrl: './asteroides.component.html',
  styleUrls: ['./asteroides.component.css']
})
export class AsteroidesComponent implements OnInit {

  asteroides: any;
  loaded: boolean;
  constructor(
    private asteroidesService: AsteroidesService) {
    this.loaded = false;
  }

  ngOnInit(): void {
    this.getAsteroides();
  }

  getAsteroides(): void {
    console.log(TemplateDrivenFormsComponent);
    this.loaded = false;
    this.asteroidesService.getAsteroides('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=Iuo6djhtzBFda9cVgGi4Tbq6FucfynrDvrBTNItb')
      .subscribe(
        asteroides => {
          this.asteroides = asteroides;
          this.loaded = true;
        });
        console.log(this.asteroides);
  }

  resetAsteroides(): void {
    this.asteroides = null;
    this.loaded = true;
  }

}

