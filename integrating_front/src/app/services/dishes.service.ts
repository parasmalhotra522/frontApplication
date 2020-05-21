import { Injectable } from '@angular/core';
import {baseurl} from '../shared/baseurl';
import {ProcessHttpMessageService} from './process-http-message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import  { map,catchError } from 'rxjs/operators';
import { DishInterface } from '../shared/dishes';
 


@Injectable({
  providedIn: 'root'
})
export class DishesService {

  constructor(private _http:HttpClient, private _processhttpmessage:ProcessHttpMessageService) { }

  getDishes() : Observable<DishInterface[]> {
    return this._http.get<DishInterface[]>(baseurl+'dishes')
    .pipe(catchError(this._processhttpmessage.handleError));
  }

  getDish(id:string): Observable<DishInterface> {
    return this._http.get<DishInterface>(baseurl+'dishes/'+id).pipe(catchError(this._processhttpmessage.handleError));
  }



}
