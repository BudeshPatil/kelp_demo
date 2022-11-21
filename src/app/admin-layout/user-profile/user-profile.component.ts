import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  username:any;
  user:any;
  constructor(public dataservice: DataService, public route:ActivatedRoute) {
    this.username = this.route.snapshot.paramMap.get('username');
    this.getUser();
   }

  ngOnInit() {
    
  }

  getUser(){
    let obj = {
      username:this.username
    }
    if(this.username){
      this.dataservice.getSingleUser(obj).subscribe(data => {
        this.user = data;
      })
    }
  }

}
