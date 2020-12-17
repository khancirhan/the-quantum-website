import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  private url = window.location.origin;

  constructor() {}

  footerLinks: any[] = [
    {
      title: 'Product',
      links: [
        {
          text: 'TheQuantum Air',
          path: '/the-quantum-pro',
        },
        {
          text: 'TheQuantum Pro',
          path: '/the-quantum-pro',
        },
      ],
    },
    {
      title: 'Apps',
      links: [
        {
          text: 'TQDash',
          href: '',
        },
        {
          text: 'ProgressCenter',
          href: '',
        },
      ],
    },
    {
      title: 'Resources',
      links: [
        {
          text: 'F.A.Q.',
          path: '/faqs',
        },
        {
          text: 'Get Help',
          path: '/get-help',
        },
      ],
    },
    {
      title: 'Company',
      links: [
        {
          text: 'About Us',
          path: '/about-us',
        },
        {
          text: 'Press',
          path: '',
        },
      ],
    },
    {
      title: 'Follow Us',
      links: [
        {
          text: 'Facebook',
          href: 'https://www.facebook.com',
        },
        {
          text: 'Twitter',
          href: 'https://www.twitter.com',
        },
      ],
    },
    {
      title: 'Legal',
      links: [
        {
          text: 'Privacy Policy',
          path: '/privacy-policy',
          fragment: 'policy',
        },
        {
          text: 'Terms & Conditions',
          path: '/privacy-policy',
          fragment: 'terms-and-conditions',
        },
      ],
    },
  ];

  ngOnInit(): void {}
}
