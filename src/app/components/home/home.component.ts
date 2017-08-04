import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from '../../components/modals/login/login.component'

import { FormGroup, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import {GenericHttpService} from '../../services/generic-http.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private userTypeAddress: string ='';
  private userTypeAddress2: string ='';
  private street_number:string='';
  private street:string='';
  private city:string='';
  private state:string='';
  private country:string='';
  private postal_code:string=''; 
  private lat:string='';
  private lng:string='';
  private utc_offset:string='';
  gautocom=false;
  address :Object;
  userLocation: Object;
  constructor(private router: Router, private modalService: NgbModal, private genericHttpService: GenericHttpService) {}

  ngOnInit() {
    var googleaddress = localStorage.getItem('googleaddress');
    if(googleaddress)
      this.router.navigate(['/stores']);

    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.genericHttpService.getRequest(`api/getuserlocation/${position.coords.latitude}/${position.coords.longitude}`).subscribe(data =>{
          this.userLocation = data;
        });;
      });
   }
    this.genericHttpService.getRequest('api/getuserlocation').subscribe(data =>{
       this.userLocation = data;
    });;
  }

  public options = {
    types: ['address'],
    componentRestrictions: {
      country: 'US'
    }
  }

  getAddress(place: Object) {
    console.log("Address", place);
   var len=place['address_components'].length;
    for (let i = 0; i < len; i++) {
    var addr = place['address_components'][i];
      if (addr.types[0] == 'street_number') {
                this.street_number = addr.long_name;}
      if (addr.types[0] == 'route') {
                this.street = addr.long_name;}
      if (addr.types[0] == 'locality') {
                this.city = addr.long_name;}
      if (addr.types[0] == 'administrative_area_level_1') {
                this.state = addr.long_name;}  
      if (addr.types[0] == 'country') {
                this.country = addr.long_name;}  
      if (addr.types[0] == 'postal_code') {
         this.postal_code = addr.long_name;}        
   }
    this.lat=place['geometry'].location.lat();
    this.lng=place['geometry'].location.lng();
      localStorage.setItem("googleaddress", JSON.stringify({ street_number:this.street_number,  street: this.street, city: this.city, st: this.state, co: this.country, lat: this.lat, lng: this.lng, utc_offset: this.utc_offset,postal_code:this.postal_code }));
        this.router.navigate(['/stores']);
  }

  btnFindFood(value: string, value1: string): void {
    this.userTypeAddress = `'${value}'\n`;
    this.userTypeAddress2 = `'${value1}'\n`;

    if(value!=""){
        localStorage.setItem("googleaddress", JSON.stringify({ street_number:this.street_number,  street: this.street, city: this.city, st: this.state, co: this.country, lat: this.lat, lng: this.lng, utc_offset: this.utc_offset,postal_code:this.postal_code }));
        this.router.navigate(['/stores']);
    }
    else{
         this.gautocom=true;
      }
  }
  focusFunction():void{
     this.gautocom=false;
    
  }

  focusOutFunction():void{
    this.gautocom=false;
  }
  openLogin(){
    const modalRef = this.modalService.open(LoginComponent);
  }
 
}
