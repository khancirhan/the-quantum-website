import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  footerLinks = [
    {
      title: 'Product',
      links: [
        {
          text: 'TheQuantum Air',
          path: '',
          external: false,
        },
        {
          text: 'TheQuantum Pro',
          path: '/the-quantum-pro',
          external: false,
        },
      ],
    },
    {
      title: 'Apps',
      links: [
        {
          text: 'TQDash',
          path: '',
          external: true,
        },
        {
          text: 'ProgressCenter',
          path: '',
          external: true,
        },
      ],
    },
    {
      title: 'Resources',
      links: [
        {
          text: 'F.A.Q.',
          path: '/faqs',
          external: false,
        },
        {
          text: 'Get Help',
          path: '/get-help',
          external: false,
        },
      ],
    },
    {
      title: 'Company',
      links: [
        {
          text: 'About Us',
          path: '/about-us',
          external: false,
        },
        {
          text: 'Press',
          path: '',
          external: false,
        },
      ],
    },
    {
      title: 'Follow Us',
      links: [
        {
          text: 'Facebook',
          path: 'https://www.facebook.com',
          external: true,
        },
        {
          text: 'Twitter',
          path: 'https://www.twitter.com',
          external: true,
        },
      ],
    },
    {
      title: 'Legal',
      links: [
        {
          text: 'Privacy Policy',
          path: '/privacy-policy',
          external: false,
        },
        {
          text: 'Terms & Conditions',
          path: '',
          external: false,
        },
      ],
    },
  ];

  ngOnInit(): void {}
}
