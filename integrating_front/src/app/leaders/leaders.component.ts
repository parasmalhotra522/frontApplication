import { Component, OnInit } from '@angular/core';
import { LeadersService } from '../services/leaders.service';

@Component({
  selector: 'app-leaders',
  templateUrl: './leaders.component.html',
  styleUrls: ['./leaders.component.css']
})
export class LeadersComponent implements OnInit {

  constructor(private _leadersService:LeadersService) { }
  
  error = "../../assets/images/errors.png";
  baseURL = "https://localhost:3443/";
  leadersData:any;
  leadersErrors:string;
  
  ngOnInit(): void {
    this._leadersService.getLeaders()
    .subscribe( (data) => {
      this.leadersData = data;
      console.log(this.leadersData);  
    }, errmess => this.leadersErrors=<any>errmess
    )

  }
  


}
