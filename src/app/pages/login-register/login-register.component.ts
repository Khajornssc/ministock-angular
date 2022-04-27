import { Component, OnInit } from '@angular/core';
import{Route, Router}from '@angular/router';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {
  //ตัวแปร ธรรมดา
  message:string ="1"

  //ตัวแปร Object
profile = {
  "name":"Samit",
  "tel":"99999999",
  "gender":"Male"
}

  //Tow way data binding To Object
  userData = {
    "email":"",
    "password":"",
  }
    // ดึงมาจาก Router
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  // Fc Login SubmitLogin
  submitLogin(){
   //alert("Hey")
   if(this.userData.email == "admin@gmail.com"&&this.userData.password == "1234")
   {
     //alert("Login Success");
     this.router.navigate(['backend']);
   }else{
     alert("Login Faill!!!");
   }
  }

}
