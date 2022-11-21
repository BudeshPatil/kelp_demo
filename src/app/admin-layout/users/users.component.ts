import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users:any = [];
  searchText:any ='';
  constructor(public dataservice: DataService) {
    this.getAllGitUsers();
   }

  ngOnInit() {
  }

  getAllGitUsers(){
    let obj = {};
    this.dataservice.getGitUsers(obj).subscribe(data => {
      this.users = data;
    })
  }

}
