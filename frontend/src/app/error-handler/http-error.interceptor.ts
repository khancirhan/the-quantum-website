import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { BadRequestError } from './errors/bad-request-error';
import { ForbiddenError } from './errors/forbidden-error';
import { HttpError } from './errors/http-error';
import { InternalServerError } from './errors/internal-server-error';
import { NotFoundError } from './errors/not-found-error';
import { UnauthorizedError } from './errors/unauthorized-error';

/**
 *  Intercept http response to handle expected and unexpected errors.
 */
@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      retry(1),
      catchError((err: HttpErrorResponse) => {
        switch (err.status) {
          case 400:
            return throwError(new BadRequestError(err));
          case 401:
            return throwError(new UnauthorizedError(err));
          case 403:
            return throwError(new ForbiddenError(err));
          case 404:
            return throwError(new NotFoundError(err));
          case 500:
            return throwError(new InternalServerError(err));
          default:
            return throwError(new HttpError(err));
        }
      })
    );
  }
}
