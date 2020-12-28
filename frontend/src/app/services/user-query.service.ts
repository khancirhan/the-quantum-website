import { HttpClient } from '@angular/common/http';
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

  getAll(): Observable<UserQuery[]> {
    return this.http.get<UserQuery[]>(this.url);
  }

  create(userQuery: UserQuery): Observable<UserQuery> {
    return this.http.post<UserQuery>(this.url, userQuery);
  }

  getById(id: string): Observable<UserQuery> {
    return this.http.get<UserQuery>(`${this.url}/${id}`);
  }
}
