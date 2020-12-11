import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { FaqComponent } from './components/faq/faq.component';
import { GetHelpComponent } from './components/get-help/get-help.component';
import { HomeComponent } from './components/home/home.component';
import { OrderConfirmedComponent } from './components/order-confirmed/order-confirmed.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TheQuantumProComponent } from './components/the-quantum-pro/the-quantum-pro.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about-us', component: AboutComponent },
  { path: 'the-quantum-pro', component: TheQuantumProComponent },
  { path: 'faqs', component: FaqComponent },
  { path: 'get-help', component: GetHelpComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'place-order', component: PlaceOrderComponent },
  { path: 'order-confirmed', component: OrderConfirmedComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppRoutingModule {}
