import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { UserQueryDetailComponent } from './components/user-query-detail/user-query-detail.component';
import { UserQueryListComponent } from './components/user-query-list/user-query-list.component';

export const ADMIN_ROUTES: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'user-queries', component: UserQueryListComponent },
  { path: 'user-queries/:id', component: UserQueryDetailComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/add', component: ProductFormComponent },
  { path: 'products/:id', component: ProductFormComponent },
  { path: 'orders', component: OrderListComponent },
  { path: 'orders/:id', component: OrderFormComponent },
];
