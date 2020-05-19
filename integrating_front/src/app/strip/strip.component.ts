import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strip',
  templateUrl: './strip.component.html',
  styleUrls: ['./strip.component.css']
})
export class StripComponent implements OnInit {

  info = { 
    noHotels:120,
    no_of_countries :  10,
    no_of_awards :450,
    no_of_staff :35000
  
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
