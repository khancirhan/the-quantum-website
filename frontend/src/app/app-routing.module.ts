import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLayoutComponent } from './admin/components/admin-layout/admin-layout.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

import { ADMIN_ROUTES } from './admin/admin.routes';
import { CORE_ROUTES } from './core/core.routes';

const routes: Routes = [
  // Core routes
  { path: '', children: CORE_ROUTES },
  //Admin routes
  { path: 'admin', component: AdminLayoutComponent, children: ADMIN_ROUTES },
  // Wildcard route
  { path: '**', redirectTo: '/page-not-found' },
  { path: 'page-not-found', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppRoutingModule {}
