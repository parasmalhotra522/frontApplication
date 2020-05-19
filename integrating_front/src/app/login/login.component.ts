import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name:String='';
  password='';
  nickName=''
  email='';
  userName='';
  constructor() { }

  ngOnInit(): void {
  }
  submitted:Boolean=false;
  onSubmit($event){
    console.log("Successful");
  }

}
