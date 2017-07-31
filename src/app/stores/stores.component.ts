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
  recordLimit: number = 10;
  skipRecord: number  =0;
  infiniteScorllStatus=true;
  gaddress: any="";

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    // this.restaurantService.getRestaurants().subscribe(data => 
    //   this.restaurants = data
    //);
    var address = JSON.parse(localStorage.getItem("googleaddress"));
    // this.gaddress=address.street+', '+ address.city+' ,'+address.st+' ,'+address.co+' ,'+address.utc_offset
         this.gaddress=address.street+', '+ address.city+' ,'+address.st+' ,'+address.co;
    let result; 
    this.restaurantService.getMyRestaurant(this.recordLimit,this.skipRecord).subscribe(data => {
    result = data;
       for (var v in result) {  
        this.restaurants.push({'restaurantId':result[v].restaurantId,'name':result[v].name,'rate':result[v].rate,'review':result[v].review,'productName':result[v].productName,'productTime':result[v].productTime,'coverPhoto':result[v].coverPhoto,'closed':result[v].closed})
        }   
     });
  }
 onScrollDown () {
    console.log('scrolled!!');
    const start = this.recordLimit;
    let result; 
    this.skipRecord=start;
    this.recordLimit += 10;
     this.restaurantService.getMyRestaurant(this.recordLimit,this.skipRecord).subscribe(data => {
       result = data;
       for (var v in result) {  
         this.restaurants.push({'restaurantId':result[v].restaurantId,'name':result[v].name,'rate':result[v].rate,'review':result[v].review,'productName':result[v].productName,'productTime':result[v].productTime,'coverPhoto':result[v].coverPhoto,'closed':result[v].closed})
        }  
     });
  }
}
