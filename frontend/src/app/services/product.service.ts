import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url = environment.apiUrl + '/products';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.url, product);
  }

  getById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.url}/${id}`);
  }

  update(id: string, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.url}/${id}`, product);
  }

  delete(id: string): Observable<null> {
    return this.http.delete<null>(`${this.url}/${id}`);
  }
}
