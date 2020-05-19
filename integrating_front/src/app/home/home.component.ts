import { Component, OnInit } from '@angular/core';
//import { NgForm } from '@angular/forms';
//import { FormPoster } from './formposterservice';
//import {Employee} from '../employee/employee.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  img1 : String = "../assets/images/hotel1.jpg";

  arr = ["../assets/images/hotel1.jpg",
  "../assets/images/hotel2.jpg",
  "../assets/images/hotel3.jpg",
  "../assets/images/hotel4.jpg",
  "../assets/images/hotel5.jpg",
  "../assets/images/hotel6.jpg"];

  
  //modelData = new Employee('','',0 ,'');
  
  constructor() { }
  
  

  ngOnInit(): void {
  }

  email:String='';
  password:String='Encode$123';
  message:String='';
donothing=this.password;
 /*
showPass(){
    
  var input = document.getElementById('password-field');
  var passStatus = document.getElementById('pass-status');
 
  if (input.type == "password"){
    input.type='text';
    passStatus.className='fa fa-eye-slash';
    
  }
  else{
    input.type='password';
    passStatus.className='fa fa-eye';
  }
  }
 /* 
  
  */
 

  
sendEmail() {
  /*
  Email.send({
  Host: "smtp.gmail.com",
  Username : this.email,
  Password : this.password,
  To : 'parasmalhotra522@gmail.com',
  From : this.email,
  Subject : "hi",
  Body : this.message,
  }).then(
    message => alert("mail sent successfully")
  );
}

  */
 console.log("Sending mail....")
}

}