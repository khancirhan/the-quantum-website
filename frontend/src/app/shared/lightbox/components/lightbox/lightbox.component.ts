import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Lightbox } from '../../models/lightbox';
import { LightboxService } from '../../service/lightbox.service';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss'],
})
export class LightboxComponent implements OnInit {
  private subscription: Subscription;
  isOpen = false;
  url: string;

  constructor(private lightboxService: LightboxService) {}

  ngOnInit(): void {
    this.subscription = this.lightboxService.lightbox$.subscribe(
      (lightbox: Lightbox) => {
        this.isOpen = lightbox.isOpen;
        this.url = lightbox.url;
      }
    );
  }

  close(): void {
    this.isOpen = false;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
