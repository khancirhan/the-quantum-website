import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { countries } from 'src/app/utils/countries';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss'],
})
export class PlaceOrderComponent implements OnInit {
  countries = countries;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    console.log(form.value);
    this.router.navigate(['/order-confirmed']);
  }
}
