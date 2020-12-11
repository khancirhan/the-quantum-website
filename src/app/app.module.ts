import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { FaqComponent } from './components/faq/faq.component';
import { GetHelpComponent } from './components/get-help/get-help.component';
import { HomeComponent } from './components/home/home.component';
import { OrderConfirmedComponent } from './components/order-confirmed/order-confirmed.component';
import { AsideOverviewComponent } from './components/partials/aside-overview/aside-overview.component';
import { BackgroundShowcaseComponent } from './components/partials/background-showcase/background-showcase.component';
import { BannerComponent } from './components/partials/banner/banner.component';
import { FeatureComponent } from './components/partials/feature/feature.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TheQuantumProComponent } from './components/the-quantum-pro/the-quantum-pro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
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
    GetHelpComponent,
    BackgroundShowcaseComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
