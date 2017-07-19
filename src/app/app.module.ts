import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { StoresComponent } from './stores/stores.component';
import { HomeComponent } from './home/home.component';

//services
import { RestaurantService } from './services/restaurant.service';

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
    HttpModule
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
