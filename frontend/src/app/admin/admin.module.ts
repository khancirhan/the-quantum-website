import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { PaginationComponent } from './components/partials/pagination/pagination.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { UserQueryDetailComponent } from './components/user-query-detail/user-query-detail.component';
import { UserQueryListComponent } from './components/user-query-list/user-query-list.component';

@NgModule({
  declarations: [
    NavbarComponent,
    AdminLayoutComponent,
    DashboardComponent,
    UserQueryListComponent,
    UserQueryDetailComponent,
    PaginationComponent,
    ProductListComponent,
    ProductFormComponent,
    OrderListComponent,
    OrderFormComponent,
  ],
  imports: [SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminModule {}
