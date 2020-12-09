import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseLayoutComponent } from './components/base-layout/base-layout.component';
import { FaqComponent } from './components/faq/faq.component';
import { HomeComponent } from './components/home/home.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { TheQuantumProComponent } from './components/the-quantum-pro/the-quantum-pro.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'the-quantum-pro', component: TheQuantumProComponent },
      { path: 'faqs', component: FaqComponent },
      { path: 'pricing', component: PricingComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
