import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheQuantumProComponent } from './the-quantum-pro.component';

describe('TheQuantumProComponent', () => {
  let component: TheQuantumProComponent;
  let fixture: ComponentFixture<TheQuantumProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheQuantumProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheQuantumProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
