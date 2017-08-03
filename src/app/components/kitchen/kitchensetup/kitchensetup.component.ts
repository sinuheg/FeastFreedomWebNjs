import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from '../../../components/modals/login/login.component'
import { Ng2GoogleRecaptchaModule }  from 'ng2-google-recaptcha';

@Component({
  selector: 'app-kitchensetup',
  templateUrl: './kitchensetup.component.html',
  styleUrls: ['./kitchensetup.component.css']
})
export class KitchensetupComponent implements OnInit { 
  private recaptchaSiteKey = '6LdQeCsUAAAAAIS_NB_-rzMVzgMHJ48e6jCKtFe5';
   private delayToRender: number = 1000; // A one second delay before rendering this element
  // Style to use - all properties are optional and the style can be ommitted completely
  private recaptchaStyle = {
        theme: 'dark',     // Uses the Dark theme for this reCAPTCHA
        type: 'audio',     // Use the audio version for user verification
        size: 'compact',   // Use the compact style 
        tabindex: 5,       // Tab Index for this element
  };
  private onCaptchaComplete(response: any) {
        console.log('reCAPTCHA response recieved:');
        console.log(response.success);
        console.log(response.token);
    }
  constructor(private router: Router, private modalService: NgbModal) { }

  ngOnInit() {
  }

  openLogin(){
    const modalRef = this.modalService.open(LoginComponent);
  }

}
