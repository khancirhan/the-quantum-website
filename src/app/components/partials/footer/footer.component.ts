import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  private url = environment.url;

  constructor() {}

  footerLinks = [
    {
      title: 'Product',
      links: [
        {
          text: 'TheQuantum Air',
          href: this.url,
        },
        {
          text: 'TheQuantum Pro',
          href: this.url + '/the-quantum-pro',
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
          href: this.url + '/faqs',
        },
        {
          text: 'Get Help',
          href: this.url + '/get-help',
        },
      ],
    },
    {
      title: 'Company',
      links: [
        {
          text: 'About Us',
          href: this.url + '/about-us',
        },
        {
          text: 'Press',
          href: this.url + '',
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
          href: this.url + '/privacy-policy#policy',
        },
        {
          text: 'Terms & Conditions',
          href: this.url + '/privacy-policy#terms-and-conditions',
        },
      ],
    },
  ];

  ngOnInit(): void {}
}
