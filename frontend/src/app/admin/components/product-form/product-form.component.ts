import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NotFoundError } from 'src/app/error-handler/errors/not-found-error';
import { Product } from 'src/app/models/product';

import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  id: string;
  product: Product = new Product();

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.getProductById();
  }

  getProductById(): void {
    this.productService.getById(this.id).subscribe(
      (product) => {
        this.product = product;
      },
      (error) => {
        if (error instanceof NotFoundError)
          this.router.navigate(['/page-not-found']);
      }
    );
  }

  onSubmit(): void {
    if (!this.id) this.createProduct(this.product);
    else this.updateProduct(this.product);
  }

  createProduct(product: Product): void {
    this.productService.create(product).subscribe(
      (product) => {
        this.toastr.success('Product Created!', 'Success!');
        this.router.navigate(['/admin/products']);
      },
      (error) => {
        console.log(error);
        this.toastr.error('Some error occured!', 'Error!');
      }
    );
  }

  updateProduct(product: Product): void {
    this.productService.update(this.id, product).subscribe(
      (product) => {
        this.toastr.success('Product Updated!', 'Success!');
      },
      (error) => {
        console.log(error);
        this.toastr.error('Some error occured!', 'Error!');
      }
    );
  }

  deleteProduct(): void {
    this.productService.delete(this.id).subscribe(() => {
      this.toastr.success('Product Deleted!', 'Success!');
      this.router.navigate(['/admin/products']);
    }, (error) => {
      console.log(error);
      this.toastr.error('Some error occured!', 'Error!');
    })
  }
}
