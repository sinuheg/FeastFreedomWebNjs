import { Component, OnInit } from '@angular/core';

import { FacebookService, LoginResponse, LoginOptions, UIResponse, UIParams, FBVideoComponent } from 'ngx-facebook';
import {GoogleSignInSuccess} from 'angular-google-signin';

declare const gapi: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  private LogedinUsrName: string ='';
  private LogedinUsrEmailId: string ='';
  

  constructor(private fb: FacebookService) {
    fb.init({
      appId: '1938993763047078',
      version: 'v2.8'
    });
   }
      loginWithOptions() {

    const loginOptions: LoginOptions = {
      enable_profile_selector: true,
      return_scopes: true,
      scope: 'public_profile,user_friends,email,pages_show_list'
    };

    this.fb.login(loginOptions)
      .then((res: LoginResponse) => {
      
        console.log('Logged in', res);
        this.fb.api('/me','get',{ fields: 'id,name,gender,email' })
        .then((res: any) => {
        console.log('Got the users profile', res);
      //  var name =  res.name;
      //  var name1 =  res.email;
      //  var id = res.id
        localStorage.setItem("Userdetail", JSON.stringify({ LogedinUsrName: res.name, LogedinUsrEmailId: res.email}));
      })
        // alert(loginOptions.scope[2]);
      })
      // .catch(this.handleError);

  }
    

  ngOnInit() {
  }
   private myClientId: string = '277841227727-faqohtuqqcalg95l1hfhn7tkc8skoddj.apps.googleusercontent.com';

  // onGoogleSignInSuccess(event: GoogleSignInSuccess) {
  //   let googleUser: gapi.auth2.GoogleUser = event.googleUser;
  //   let id: string = googleUser.getId();
  //   let profile: gapi.auth2.BasicProfile = googleUser.getBasicProfile();
  //   console.log('ID: ' +
  //     profile
  //       .getId()); // Do not send to your backend! Use an ID token instead.
  //   console.log('Name: ' + profile.getName());
  // }

  public auth2: any;
  public googleInit() {
    let that = this;
    gapi.load('auth2', function () {
      that.auth2 = gapi.auth2.init({
        client_id: '277841227727-faqohtuqqcalg95l1hfhn7tkc8skoddj.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      that.attachSignin(document.getElementById('googleBtn'));
    });
  }
  public attachSignin(element) {
    let that = this;
    this.auth2.attachClickHandler(element, {},
      function (googleUser) {

        let profile = googleUser.getBasicProfile();
        // console.log('Token || ' + googleUser.getAuthResponse().id_token);
        // console.log('ID: ' + profile.getId());
        // console.log('Name: ' + profile.getName());
        // console.log('Image URL: ' + profile.getImageUrl());
        // console.log('Email: ' + profile.getEmail());
        // alert(profile.getEmail());

        localStorage.setItem("Userdetail", JSON.stringify({ LogedinUsrName: profile.getName(), LogedinUsrEmailId: profile.getEmail()}));
        //YOUR CODE HERE


      }, function (error) {
        //alert(JSON.stringify(error, undefined, 2));
      });
  }
      ngAfterViewInit() {
    this.googleInit();
  }

}
