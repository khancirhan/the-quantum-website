import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input('background') background = 'transparent';

  classes: { [key: string]: string } = {
    transparent: 'bg-transparent',
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    white: 'bg-white',
  };

  navbarLogo = 'assets/images/logo_dark.svg';

  constructor() {}

  ngOnInit(): void {
    if (this.background == 'secondary' || this.background == 'white')
      this.navbarLogo = 'assets/images/logo_light.svg';
    else if (this.background == 'primary')
      this.navbarLogo = 'assets/images/logo_primary.svg';
    else this.navbarLogo = 'assets/images/logo_dark.svg';
  }
}
