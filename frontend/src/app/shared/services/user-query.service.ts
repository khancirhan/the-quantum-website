import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserQuery } from '../models/user-query';

@Injectable({
  providedIn: 'root',
})
export class UserQueryService {
  private url = environment.apiUrl + '/user-queries';

  constructor(private http: HttpClient) {}

  getAll(
    page: number = 1,
    limit: number = 10
  ): Observable<{ items: UserQuery[]; totalItems: number }> {
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('limit', limit.toString());

    return this.http.get<{ items: UserQuery[]; totalItems: number }>(this.url, {
      params,
    });
  }

  create(userQuery: UserQuery): Observable<UserQuery> {
    return this.http.post<UserQuery>(this.url, userQuery);
  }

  getById(id: string): Observable<UserQuery> {
    return this.http.get<UserQuery>(`${this.url}/${id}`);
  }
}
