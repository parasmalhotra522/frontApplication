import { Injectable } from '@angular/core';
import { promotionInterface } from '../shared/promotions';
import { HttpClient } from '@angular/common/http';
import { ProcessHttpMessageService } from './process-http-message.service';
import { Observable } from 'rxjs';
import { baseurl } from '../shared/baseurl';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PromotionsService {

  constructor(private _http:HttpClient,
      private _processHttpMessage:ProcessHttpMessageService) {

       }

  getPromotions(): Observable<promotionInterface []>{
    return this._http.get<promotionInterface[]>(baseurl+'promotions')
    .pipe(catchError(this._processHttpMessage.handleError));
  }




}
