import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BaseLayoutComponent } from './components/base-layout/base-layout.component';
import { AsideOverviewComponent } from './components/aside-overview/aside-overview.component';
import { FeatureComponent } from './components/feature/feature.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BaseLayoutComponent,
    AsideOverviewComponent,
    FeatureComponent,
    OverlayComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
