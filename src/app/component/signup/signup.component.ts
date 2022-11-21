import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

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
