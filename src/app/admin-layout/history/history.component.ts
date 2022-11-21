import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  histories:any;
  searchText:any ='';
  constructor() { 
    let tempHistory = localStorage.getItem('history');
    if(tempHistory){
      this.histories = JSON.parse(tempHistory);
    }
  }

  ngOnInit(): void {
  }

  deleteHistory(index:any){
    this.histories.splice(index,1);
    localStorage.setItem('history',JSON.stringify(this.histories));
  }

}
