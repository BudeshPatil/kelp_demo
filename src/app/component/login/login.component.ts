import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user:any = {
    email:'demouser@gmail.com',
    password:'12345'
  }

  constructor() { }

  ngOnInit(): void {
  }

  doLogin(){
    if(this.user.email == 'demouser@gmail.com' && this.user.password == '12345'){
      localStorage.setItem('user',JSON.stringify(this.user));
      window.location.href = '/';
    }
  }

}
