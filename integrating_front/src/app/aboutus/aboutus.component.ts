import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  imglink = "../../assets/images/aboutus.jpg";
  imglink2="../../assets/images/customers.jpg";
  imglink3="../../assets/images/staff.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
