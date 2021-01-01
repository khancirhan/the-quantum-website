import { Component, OnInit } from '@angular/core';
import { fadeInUp, zoomIn } from 'src/app/shared/directives/animate/animation';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
  animations: [fadeInUp, zoomIn],
})
export class FeatureComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
