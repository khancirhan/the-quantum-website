import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-the-quantum-pro',
  templateUrl: './the-quantum-pro.component.html',
  styleUrls: ['./the-quantum-pro.component.scss'],
})
export class TheQuantumProComponent implements AfterViewInit {
  @ViewChild('housingEl') housingEl: ElementRef;
  @ViewChild('controllerEl') controllerEl: ElementRef;
  @ViewChild('adaptiveEl') adaptiveEl: ElementRef;
  @ViewChild('flexibilityEl') flexibilityEl: ElementRef;
  @ViewChild('flexibleEl') flexibleEl: ElementRef;
  @ViewChild('supportEl') supportEl: ElementRef;
  @ViewChild('startedEl') startedEl: ElementRef;

  currentActive = 0;
  housingOffset: number;
  controllerOffset: number;
  adaptiveOffset: number;
  flexibilityOffset: number;
  flexibleOffset: number;
  supportOffset: number;
  startedOffset: number;

  navLinks = [
    {
      text: 'The Housing',
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

  constructor(private viewportScroller: ViewportScroller) {}

  ngAfterViewInit(): void {
    this.housingOffset = this.housingEl.nativeElement.offsetTop;
    this.controllerOffset = this.controllerEl.nativeElement.offsetTop;
    this.adaptiveOffset = this.adaptiveEl.nativeElement.offsetTop;
    this.flexibilityOffset = this.flexibilityEl.nativeElement.offsetTop;
    this.flexibleOffset = this.flexibleEl.nativeElement.offsetTop;
    this.supportOffset = this.supportEl.nativeElement.offsetTop;
    this.startedOffset = this.startedEl.nativeElement.offsetTop;
  }

  scrollToElement(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  @HostListener('window:scroll', ['$event'])
  checkOffsetTop() {
    const pageYOffset = window.pageYOffset;

    if (
      pageYOffset >= this.housingOffset &&
      pageYOffset < this.controllerOffset
    ) {
      this.currentActive = 1;
    } else if (
      pageYOffset >= this.controllerOffset &&
      pageYOffset < this.adaptiveOffset
    ) {
      this.currentActive = 2;
    } else if (
      pageYOffset >= this.adaptiveOffset &&
      pageYOffset < this.flexibilityOffset
    ) {
      this.currentActive = 3;
    } else if (
      pageYOffset >= this.flexibilityOffset &&
      pageYOffset < this.flexibleOffset
    ) {
      this.currentActive = 4;
    } else if (
      pageYOffset >= this.flexibleOffset &&
      pageYOffset < this.supportOffset
    ) {
      this.currentActive = 5;
    } else if (
      pageYOffset >= this.supportOffset &&
      pageYOffset < this.startedOffset
    ) {
      this.currentActive = 6;
    } else if (pageYOffset >= this.startedOffset) {
      this.currentActive = 7;
    } else {
      this.currentActive = 0;
    }
  }
}
