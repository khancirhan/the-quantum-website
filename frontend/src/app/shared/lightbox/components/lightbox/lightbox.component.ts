import {
  trigger,
  style,
  transition,
  animate,
  keyframes,
} from '@angular/animations';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Lightbox } from '../../models/lightbox';
import { LightboxService } from '../../service/lightbox.service';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(
        'void  => *',
        animate(
          '0.6s ease-out',
          keyframes([
            style({
              offset: 0,
              opacity: 0,
            }),
            style({ offset: 1, opacity: 1 }),
          ])
        )
      ),
    ]),
  ],
})
export class LightboxComponent implements OnInit {
  private subscription: Subscription;
  isOpen = false;
  src: string;

  constructor(private lightboxService: LightboxService) {}

  ngOnInit(): void {
    this.subscription = this.lightboxService.lightbox$.subscribe(
      (lightbox: Lightbox) => {
        this.isOpen = lightbox.isOpen;
        this.src = lightbox.src;
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
