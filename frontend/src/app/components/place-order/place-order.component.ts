import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, tqAir, tqPro } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { countries } from 'src/app/utils/countries';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss'],
})
export class PlaceOrderComponent implements OnInit {
  countries = countries;
  tqAir: Product = tqAir;
  tqPro: Product = tqPro;
  product: Product;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('productId');

    this.productService.getById(id).subscribe((product) => {
      this.product = product;
    });
  }

  onSubmit(form: NgForm): void {
    console.log(form.value);
    this.router.navigate(['/order-confirmed']);
  }

  nameContains(substr: string): boolean {
    return this.product.name.toLowerCase().includes(substr);
  }
}
