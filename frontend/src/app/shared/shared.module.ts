import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AnimateInViewportDirective } from './directives/animate/animate-in-viewport.directive';
import { LightboxComponent } from './lightbox/components/lightbox/lightbox.component';

const components = [
  LightboxComponent,
  PageNotFoundComponent,
  AnimateInViewportDirective,
];

const modules = [
  CommonModule,
  BrowserModule,
  BrowserAnimationsModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  ToastrModule.forRoot(),
  NgxSpinnerModule,
  RouterModule,
];

@NgModule({
  declarations: [components],
  imports: [modules],
  exports: [components, modules],
})
export class SharedModule {}
