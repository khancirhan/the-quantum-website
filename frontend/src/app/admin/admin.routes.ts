import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserQueryDetailComponent } from './components/user-query-detail/user-query-detail.component';
import { UserQueryListComponent } from './components/user-query-list/user-query-list.component';

export const ADMIN_ROUTES: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'user-queries', component: UserQueryListComponent },
  { path: 'user-queries/:id', component: UserQueryDetailComponent },
];
