import { Component, OnInit } from '@angular/core';
import { Product, tqAir, tqPro } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
})
export class PricingComponent implements OnInit {
  tqAir: Product = tqAir;
  tqPro: Product = tqPro;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe((products) => {
      products.forEach((p) => {
        if (p.name.toLowerCase().includes('air')) {
          this.tqAir = p;
        } else if (p.name.toLowerCase().includes('pro')) {
          this.tqPro = p;
        }
      });
    });
  }
}
