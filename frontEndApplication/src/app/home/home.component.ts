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

  info = { 
    noHotels:120,
    no_of_countries :  10,
    no_of_awards :450,
    no_of_staff :35000
  
  };
  
  //modelData = new Employee('','',0 ,'');
  
  constructor() { }
  
  

  ngOnInit(): void {
  }
/*
  formsubmit(form:NgForm){
    this.formPoster.postEmployeeData(form.value)
    //.subscribe((res)=>console.log('data posted'));
    console.log(form.value);
  }
  
  convertUpper(value:string){
    if(value.length>0){
      this.modelData.name = value.charAt(0).toUpperCase() + value.slice(1);
    }
    else{
      this.modelData.name = value;
    }
     
  } */
  
}
