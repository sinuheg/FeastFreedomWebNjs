import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from '../../components/modals/login/login.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private userTypeAddress: string ='';
  private userTypeAddress2: string ='';
  private street:string='';
  private city:string='';
  private state:string='';
  private country:string='';
  private lat:string='';
  private lng:string='';
  private utc_offset:string='';
  constructor(private router: Router, private modalService: NgbModal) { }

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
  }

  btnFindFood(value: string, value1: string): void {
    this.userTypeAddress = `'${value}'\n`;
    this.userTypeAddress2 = `'${value1}'\n`;

    localStorage.setItem("googleaddress", JSON.stringify({ street: this.street, city: this.city, st: this.state, co: this.country, lat: this.lat, lng: this.lng, utc_offset: this.utc_offset }));
    this.router.navigate([
      '/stores']);
  }

  openLogin(){
    const modalRef = this.modalService.open(LoginComponent);
  }
 
}
