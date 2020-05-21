import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProcessHttpMessageService } from './process-http-message.service';
import { Observable } from 'rxjs';
import { baseurl } from '../shared/baseurl';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeadersService {

  constructor(private _http:HttpClient,
    private _processHttpMessage:ProcessHttpMessageService) { }


    getLeaders(): Observable<any>{
      return this._http.get<any>(baseurl+'leaders')
      .pipe(catchError(this._processHttpMessage.handleError));
    }

}

