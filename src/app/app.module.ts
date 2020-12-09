import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BaseLayoutComponent } from './components/base-layout/base-layout.component';
import { AsideOverviewComponent } from './components/aside-overview/aside-overview.component';
import { FeatureComponent } from './components/feature/feature.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { TheQuantumProComponent } from './components/the-quantum-pro/the-quantum-pro.component';
import { FaqComponent } from './components/faq/faq.component';
import { AboutComponent } from './components/about/about.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { OrderConfirmedComponent } from './components/order-confirmed/order-confirmed.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BaseLayoutComponent,
    AsideOverviewComponent,
    FeatureComponent,
    FooterComponent,
    BannerComponent,
    TheQuantumProComponent,
    FaqComponent,
    AboutComponent,
    PricingComponent,
    PlaceOrderComponent,
    OrderConfirmedComponent,
    PrivacyPolicyComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
