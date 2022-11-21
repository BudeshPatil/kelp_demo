import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user:any;
  constructor() { 
    let tempUser = localStorage.getItem('user');
    if(tempUser){
      this.user = JSON.parse(tempUser);
    }
  }

  ngOnInit(): void {
  }

  logout(){
    localStorage.clear();
    window.location.href = '/';
   }

}
