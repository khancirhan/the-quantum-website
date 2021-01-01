import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[animateInViewport]',
})
export class AnimateInViewportDirective {
  @Input('animateInViewport') animateInViewport = {
    animationName: '',
  };

  @HostBinding('@fadeInUp') fadeInUp = 'hidden';
  @HostBinding('@zoomIn') zoomIn = 'hidden';

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((enteries) => {
      enteries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (this.animateInViewport.animationName === 'fadeInUp')
            this.fadeInUp = 'visible';

          if (this.animateInViewport.animationName === 'zoomIn')
            this.zoomIn = 'visible';
        }
      });
    });

    observer.observe(this.el.nativeElement);
  }
}
