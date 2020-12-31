import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LightboxComponent } from './lightbox/components/lightbox/lightbox.component';

const components = [LightboxComponent];

@NgModule({
  declarations: [components],
  imports: [CommonModule],
  exports: [components],
})
export class SharedModule {}
