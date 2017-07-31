import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { StoresComponent } from './stores/stores.component';
import { HomeComponent } from './home/home.component';

//services
import { RestaurantService } from './services/restaurant.service';


import {GooglePlaceModule} from 'ng2-google-place-autocomplete';
import { LocalStorageModule } from 'angular-2-local-storage';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';

//new comment sss
const ROUTES = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'stores',
    component: StoresComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    StoresComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpModule,GooglePlaceModule,InfiniteScrollModule,
     LocalStorageModule.withConfig({
            prefix: 'my-app',
            storageType: 'localStorage'
        })
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
