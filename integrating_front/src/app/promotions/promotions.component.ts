import { Component, OnInit } from '@angular/core';
import { PromotionsService } from '../services/promotions.service';
import { promotionInterface } from '../shared/promotions';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {
  promotionErrMess: any;

  constructor(private _promotionService:PromotionsService) { }
  baseURL = "https://localhost:3443/";
  promotionsdata:promotionInterface[];
  ngOnInit(): void {
    this._promotionService.getPromotions()
    .subscribe( (data)=>{
      this.promotionsdata=data;
      console.log(this.promotionsdata);
    },
    errmess => this.promotionErrMess=<any>errmess
    )}

}
