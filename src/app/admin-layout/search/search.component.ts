import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  username:any;
  user:any;
  submitted = false;
  search = {
    username:'',
    name: '',
    location: '',
    isfound: false
  };
  searchArray:any = [];
  histExists = false;
  constructor(public dataservice: DataService) { 
    let tempHistory = localStorage.getItem('history');
    if(tempHistory){
      tempHistory = JSON.parse(tempHistory);
      this.searchArray = tempHistory;
    }

  }

  ngOnInit(): void {
  }

  getUser(){
    let obj = {
      username:this.username
    }
    if(this.username){
      this.dataservice.getSingleUser(obj).subscribe(data => {
        this.submitted = true;
        if(data.name){
          this.user = data;
          this.search.username = data.login;
          this.search.name = data.name;
          this.search.location = data.location;
          this.search.isfound = true;
          this.searchArray.push(this.search);
          localStorage.setItem('history',JSON.stringify(this.searchArray));
        } else {
          this.user = null;
          this.search.isfound = false;
          this.searchArray.push(this.search);
          localStorage.setItem('history',JSON.stringify(this.searchArray));
        }
      })
    }
  }
}
