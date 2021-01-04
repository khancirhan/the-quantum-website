import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private url = environment.apiUrl + '/orders';

  constructor(private http: HttpClient) {}

  getAll(
    page: number = 1,
    limit: number = 10
  ): Observable<{ items: Order[]; totalItems: number }> {
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('limit', limit.toString());

    return this.http.get<{ items: Order[]; totalItems: number }>(this.url, {
      params,
    });
  }

  create(order: Order): Observable<Order> {
    return this.http.post<Order>(this.url, order);
  }

  getById(id: string): Observable<Order> {
    return this.http.get<Order>(`${this.url}/${id}`);
  }
}
