import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from '../../../components/modals/login/login.component'

@Component({
  selector: 'app-kitchensetup',
  templateUrl: './kitchensetup.component.html',
  styleUrls: ['./kitchensetup.component.css']
})
export class KitchensetupComponent implements OnInit { 

  constructor(private router: Router, private modalService: NgbModal) { }

  ngOnInit() {
  }

  openLogin(){
    const modalRef = this.modalService.open(LoginComponent);
  }

}
