import { Component, OnInit } from '@angular/core';

import { fadeInUp, zoomIn } from '../../directives/animate/animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeInUp, zoomIn],
})
export class HomeComponent implements OnInit {
  featureSet1 = [
    {
      icon: 'assets/icons/remote.svg',
      title: 'Remote Control',
      info:
        'Manage your click, upload, image quality settings and more fromanywhere, anytime. The Remote Control allows you to remotely control the units regime.',
    },
    {
      icon: 'assets/icons/solar.svg',
      title: 'Solar or Mains',
      info:
        'No separate accessories! Each of our unit can be powered by Solar or Mains. To cover the black-outs or rainy days, the unit is powered by an on-board battery pack.',
    },
    {
      icon: 'assets/icons/timelapse.svg',
      title: 'SmartLapse™',
      info:
        'First in segment, break your entire regime as you prefer. Add as many as 10 configs to a single day shooting regime with different click and upload timings.',
    },
  ];

  featureSet2 = [
    {
      icon: 'assets/images/lte.svg',
      title: 'LTE Connectivity',
      info:
        'For the remotest construction sites with no fixed line internet, the unit is capable of running on a wide-band of Mobile LTE networks. Even when the network drops, the unit is still operational.',
    },
    {
      icon: 'assets/images/cloud.svg',
      title: 'Cloud Reporting',
      info:
        ' Sitting miles away from your contruction site? Get access to the unit logs, battery health, signal strength and much more from the click of a single button.',
    },
    {
      icon: 'assets/images/customized.svg',
      title: 'Customised',
      info:
        'Don’t see what you have always wanted? We strive for continous client and user satisfaction. Get in touch with us if you want acustomised solution designed around TheQuantum.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  pauseVideo(video: HTMLVideoElement): void {
    if (!video.paused) {
      video.pause();
    }
  }

  resumeVideo(video: HTMLVideoElement): void {
    if (video.paused) {
      video.muted = true;
      video.play();
    }
  }
}
