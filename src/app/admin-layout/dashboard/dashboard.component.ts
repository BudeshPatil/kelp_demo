import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users:any = [];
  histories = [];
  sucessFull = 0;
  unsucessful = 0;
  constructor(public dataservice: DataService) {
    let tempHistory = localStorage.getItem('history');
    if(tempHistory){
      this.histories = JSON.parse(tempHistory);
    }
    this.getCount();
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

  getCount(){
    if(this.histories && this.histories.length > 0 ){
      this.histories.forEach((hst:any) =>{
        if(hst.isfound){
          this.sucessFull = this.sucessFull + 1;
        } else {
          this.unsucessful = this.unsucessful + 1;
        }
      })
    }
  }
}
