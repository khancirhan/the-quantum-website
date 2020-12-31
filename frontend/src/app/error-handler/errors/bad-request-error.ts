import { HttpErrorResponse } from '@angular/common/http';
import { HttpError } from './http-error';

export class BadRequestError extends HttpError {
  public errors: { param: string; message: string }[];

  constructor(public originalError?: HttpErrorResponse) {
    super(originalError);

    this.errors = originalError.error?.errors || [];
  }
}
