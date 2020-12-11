import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  classes: { [key: string]: string } = {
    transparent: 'bg-transparent',
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    white: 'bg-white',
  };

  @Input('background') background = 'transparent';

  constructor() {}

  ngOnInit(): void {}
}
