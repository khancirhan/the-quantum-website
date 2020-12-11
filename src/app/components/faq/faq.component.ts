import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {
  faqs = [
    {
      heading: 'What is included when purchasing TheQuantum?',
      body: `With good cellular reception, TheQuantum can shoot and upload photos as fast as
            every minute, though this will be limited by power supply and data costs.`,
    },
    {
      heading: 'What is the difference between CCTV and timelapse cameras?',
      body: `With good cellular reception, TheQuantum can shoot and upload photos as fast as
            every minute, though this will be limited by power supply and data costs.`,
    },
    {
      heading: 'Can I run the TheQuantum offline?',
      body: `With good cellular reception, TheQuantum can shoot and upload photos as fast as
            every minute, though this will be limited by power supply and data costs.`,
    },
    {
      heading: 'What mobile networks is TheQuantum compatible with?',
      body: `With good cellular reception, TheQuantum can shoot and upload photos as fast as
            every minute, though this will be limited by power supply and data costs.`,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
