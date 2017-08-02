import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'

//libraries
import {GooglePlaceModule} from 'ng2-google-place-autocomplete';
import { LocalStorageModule } from 'angular-2-local-storage';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//services
import { RestaurantService } from './services/restaurant.service';

//components
import { AppComponent } from './app.component';
import { StoresComponent } from './components/stores/stores.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/modals/categories/categories.component';
import { LoginComponent } from './components/modals/login/login.component'; 
import { KitchensetupComponent } from './components/kitchen/kitchensetup/kitchensetup.component';
import { KitchenverifyComponent } from './components/kitchen/kitchenverify/kitchenverify.component';

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
  },
  {
    path: 'kitchensetup',
    component: KitchensetupComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    StoresComponent,
    HomeComponent,
    CategoriesComponent,
    LoginComponent, 
    KitchensetupComponent,
    KitchenverifyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpModule,
    GooglePlaceModule,
    InfiniteScrollModule,
    LocalStorageModule.withConfig({
            prefix: 'my-app',
            storageType: 'localStorage'
        }),
    NgbModule.forRoot()
  ],
  entryComponents: [
    CategoriesComponent,
    LoginComponent
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
