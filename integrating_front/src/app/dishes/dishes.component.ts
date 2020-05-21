import { Component, OnInit } from '@angular/core';
import { baseurl } from '../shared/baseurl';
import { DishesService } from '../services/dishes.service';
import {DishInterface} from '../shared/dishes';


@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  
  dishess:DishInterface[];
  dishErrMess:String;
  constructor(private _dishService:DishesService) { }

  baseurl="https://localhost:3443/";

  check=true;
   
/*

http Headers => {bearer .......}
jwt ,checkjwt => {server}

{ "user": "", "pasword":""
} // checked
/// working fine

services, http headers, jwt, checkjwt, cors
dishesss = [
  {_id: ,name:},
  {_id:},
  {}
]*/
  ngOnInit(): void {
  
    this._dishService.getDishes()
    .subscribe((data) =>
    { this.dishess = data;
      console.log("Service is being called..");
      console.log(this.dishess);
      },
      errmess => this.dishErrMess = <any>errmess);
  
    }


}
