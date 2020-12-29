import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserQueryDetailComponent } from './user-query-detail.component';

describe('UserQueryDetailComponent', () => {
  let component: UserQueryDetailComponent;
  let fixture: ComponentFixture<UserQueryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserQueryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserQueryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
