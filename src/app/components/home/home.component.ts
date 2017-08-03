import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from '../../components/modals/login/login.component'

import { FormGroup, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

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
  constructor(private router: Router, private modalService: NgbModal) {}

  ngOnInit() {
  }

  public options = {
    types: ['address'],
    componentRestrictions: {
      country: 'US'
    }
  }

  getAddress(place: Object) {
    console.log("Address", place);
    this.street_number = place['address_components'][0].long_name;
    this.street = place['address_components'][1].long_name;
    this.city = place['address_components'][2].long_name;
    this.state = place['address_components'][4].long_name;
    this.country = place['address_components'][5].short_name;
    this.postal_code = place['address_components'][6].long_name;
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
