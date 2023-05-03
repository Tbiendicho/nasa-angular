import { Component, OnInit } from '@angular/core';
import { ItemsService } from './items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: any;
  loaded: boolean;
  constructor(
    private itemsService: ItemsService) {
    this.loaded = false;
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.loaded = false;
    this.itemsService.getItems('https://api.nasa.gov/planetary/apod?api_key=Iuo6djhtzBFda9cVgGi4Tbq6FucfynrDvrBTNItb')
    // this.itemsService.getItems('https://jsonplaceholder.typicode.com/users')
      .subscribe(
        items => {
          this.items = items;
          this.loaded = true;
        });
        console.log(this.items);

  }

  resetUsers(): void {
    this.items = null;
    this.loaded = true;
  }

}
