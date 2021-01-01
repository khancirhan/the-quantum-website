import { Injectable } from '@angular/core';
import { Subject, ReplaySubject } from 'rxjs';
import { Lightbox } from '../models/lightbox';

@Injectable({
  providedIn: 'root',
})
export class LightboxService {
  private lightboxSubject: Subject<Lightbox> = new ReplaySubject<Lightbox>();

  lightbox$ = this.lightboxSubject.asObservable();

  constructor() {}

  open(src: string): void {
    this.lightboxSubject.next({ isOpen: true, src: src });
  }

  close(src: string): void {
    this.lightboxSubject.next({ isOpen: false, src: src });
  }
}
