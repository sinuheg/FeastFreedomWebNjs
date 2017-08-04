import { Injectable } from '@angular/core';
import {Http } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class GenericHttpService {

  constructor(private http : Http) { }

  getRequest(url: string){
    return this.http.get(url).map(
      res => res.json()
    );
  }

}
