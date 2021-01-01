import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fadeInUp, zoomIn } from 'src/app/shared/directives/animate/animation';

@Component({
  selector: 'app-the-quantum-pro',
  templateUrl: './the-quantum-pro.component.html',
  styleUrls: ['./the-quantum-pro.component.scss'],
  animations: [fadeInUp, zoomIn],
})
export class TheQuantumProComponent implements OnInit {
  @ViewChild('nav') navEl: ElementRef;
  @ViewChild('navList') navListEl: ElementRef;

  @ViewChild('housingEl') housingEl: ElementRef;
  @ViewChild('controllerEl') controllerEl: ElementRef;
  @ViewChild('adaptiveEl') adaptiveEl: ElementRef;
  @ViewChild('flexibilityEl') flexibilityEl: ElementRef;
  @ViewChild('flexibleEl') flexibleEl: ElementRef;
  @ViewChild('supportEl') supportEl: ElementRef;
  @ViewChild('startedEl') startedEl: ElementRef;

  currentActive = 0;
  housingTop: number;
  controllerTop: number;
  adaptiveTop: number;
  flexibilityTop: number;
  flexibleTop: number;
  supportTop: number;
  startedTop: number;

  navLinks = [
    {
      text: 'TheHousing',
      elementId: 'housing',
    },
    {
      text: 'Blazzing-Fast Controller',
      elementId: 'controller',
    },
    {
      text: 'Adaptive Power Switching',
      elementId: 'adaptive',
    },
    {
      text: 'Over The Air Control',
      elementId: 'flexibility',
    },
    {
      text: 'Wide-Range Camera Support',
      elementId: 'flexible',
    },
    {
      text: 'Replacement Warranty',
      elementId: 'support',
    },
    {
      text: 'Get started',
      elementId: 'started',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  scrollToElement(elementId: string): void {
    const el = document.getElementById(elementId);

    window.scrollTo({
      top: el!.offsetTop - this.navEl.nativeElement.offsetHeight,
      behavior: 'smooth',
    });
  }

  @HostListener('window:scroll', ['$event'])
  checkOffsetTop() {
    let pageYOffset = window.pageYOffset + window.innerHeight - 400;

    // For lg, md and sm screens, add top navbar height as well
    if (window.innerWidth <= 991) pageYOffset += 66;

    this.housingTop = this.housingEl.nativeElement.offsetTop;
    this.controllerTop = this.controllerEl.nativeElement.offsetTop;
    this.adaptiveTop = this.adaptiveEl.nativeElement.offsetTop;
    this.flexibilityTop = this.flexibilityEl.nativeElement.offsetTop;
    this.flexibleTop = this.flexibleEl.nativeElement.offsetTop;
    this.supportTop = this.supportEl.nativeElement.offsetTop;
    this.startedTop = this.startedEl.nativeElement.offsetTop;

    if (pageYOffset >= this.housingTop && pageYOffset < this.controllerTop) {
      this.currentActive = 1;
    } else if (
      pageYOffset >= this.controllerTop &&
      pageYOffset < this.adaptiveTop
    ) {
      this.currentActive = 2;
    } else if (
      pageYOffset >= this.adaptiveTop &&
      pageYOffset < this.flexibilityTop
    ) {
      this.currentActive = 3;
    } else if (
      pageYOffset >= this.flexibilityTop &&
      pageYOffset < this.flexibleTop
    ) {
      this.currentActive = 4;
    } else if (
      pageYOffset >= this.flexibleTop &&
      pageYOffset < this.supportTop
    ) {
      this.currentActive = 5;
    } else if (
      pageYOffset >= this.supportTop &&
      pageYOffset < this.startedTop
    ) {
      this.currentActive = 6;
    } else if (pageYOffset >= this.startedTop) {
      this.currentActive = 7;
    } else {
      this.currentActive = 0;
    }

    if (this.currentActive != 0) {
      const scrollOffset = (this.currentActive - 1) * 150;
      this.navListEl.nativeElement.scrollTo({
        left: scrollOffset,
      });
    }
  }
}
