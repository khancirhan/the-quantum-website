import { Component } from '@angular/core';
import { fadeInUp, zoomIn } from 'src/app/shared/directives/animate/animation';

@Component({
  selector: 'app-aside-overview',
  templateUrl: './aside-overview.component.html',
  styleUrls: ['./aside-overview.component.scss'],
  animations: [fadeInUp, zoomIn],
})
export class AsideOverviewComponent {
  constructor() {}
}
