import { Component, OnInit } from '@angular/core';
//services
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {

  restaurants: any = [];

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurantService.getRestaurants().subscribe(data => 
      this.restaurants = data
    );
  }

}
