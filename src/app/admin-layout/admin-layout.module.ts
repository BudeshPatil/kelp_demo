import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { AdminLayoutComponent } from './admin-layout.component';
import { HistoryComponent } from './history/history.component';
import { SearchComponent } from './search/search.component';
// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    DashboardComponent,
    UsersComponent,
    UserProfileComponent,
    UserSearchComponent,
    AdminLayoutComponent,
    HistoryComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
    Ng2SearchPipeModule,
    FormsModule
  ]
})
export class AdminLayoutModule { }
