import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserQueryDetailComponent } from './components/user-query-detail/user-query-detail.component';
import { UserQueryListComponent } from './components/user-query-list/user-query-list.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    NavbarComponent,
    AdminLayoutComponent,
    DashboardComponent,
    UserQueryListComponent,
    UserQueryDetailComponent,
    PaginationComponent,
  ],
  imports: [BrowserModule, HttpClientModule, CommonModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminModule {}
