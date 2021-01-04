import { Component, OnInit, Renderer2 } from '@angular/core';
import { LightboxService } from 'src/app/shared/lightbox/service/lightbox.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private renderer: Renderer2, private lightbox: LightboxService) {}

  ngOnInit(): void {}

  showPlayBtn(el: HTMLElement): void {
    this.renderer.addClass(el, 'visible');
  }

  hidePlayBtn(el: HTMLElement): void {
    this.renderer.removeClass(el, 'visible');
  }

  openInLightbox(url: string): void {
    this.lightbox.open(url);
  }
}
