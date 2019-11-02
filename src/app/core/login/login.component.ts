import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/classes/login';
import { identifierName } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  emailid: string;
  pass: string;
  errmsg: string="";

  users: any = [
    {
      name1: "Demo COrporate",
      name2: "Demo Owner",
      email: "democorporate@gmail.com",
      mobile: "1234567890",
      country: "india",
      field: "Finance",
      city: "mumbai",
      password: "123456",
      role: "corporate"
    },
    {
      name1: "Demo NGO",
      name2: "Demo Owner",
      email: "demongo@gmail.com",
      mobile: "1234567890",
      country: "india",
      field: "Childrens Education",
      city: "delhi",
      password: "123456",
      role: "ngo"
    },
    {
      name1: "Demo",
      name2: "User",
      email: "demouser@gmail.com",
      mobile: "1234567890",
      country: "india",
      city: "kolkata",
      field: "student",
      password: "123456",
      role: "public"
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('role')){
      this.router.navigate(['/home']);
    }
  }
flag: boolean=false;
datas:any;
  loginuser(){
    for(let user of this.users){
      if(user.email==this.emailid){
        if(user.password==this.pass){
          this.flag = true;
          localStorage.setItem('name1', user.name1);
          localStorage.setItem('name2', user.name2);
          localStorage.setItem('email', user.email);
          localStorage.setItem('mobile', user.mobile);
          localStorage.setItem('country', user.country);
          localStorage.setItem('city', user.city);
          localStorage.setItem('field', user.field);
          localStorage.setItem('role', user.role);
          location.reload(false);
        }else{
          this.errmsg="wrong credentials";
        }
      }
    }
    if(this.flag==false){
      this.errmsg="wrong id";
    }
  }
}
