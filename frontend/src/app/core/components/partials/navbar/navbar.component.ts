import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input('background') background = 'transparent';
  isOpen = false;

  classes: { [key: string]: string } = {
    transparent: 'bg-transparent',
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    white: 'bg-white',
  };

  navbarLogo = 'assets/images/logo_dark.svg';

  path: string;

  constructor(private router: Router) {
    this.path = this.router.url;
    console.log(this.path);
  }

  ngOnInit(): void {
    if (this.background == 'secondary' || this.background == 'white')
      this.navbarLogo = 'assets/images/logo_light.svg';
    else if (this.background == 'primary')
      this.navbarLogo = 'assets/images/logo_primary.svg';
    else this.navbarLogo = 'assets/images/logo_dark.svg';
  }

  setCurrency(currency: string) {
    console.log(currency);
  }
}
