import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundShowcaseComponent } from './background-showcase.component';

describe('BackgroundShowcaseComponent', () => {
  let component: BackgroundShowcaseComponent;
  let fixture: ComponentFixture<BackgroundShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundShowcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
