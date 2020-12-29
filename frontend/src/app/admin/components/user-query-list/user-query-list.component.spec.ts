import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserQueryListComponent } from './user-query-list.component';

describe('UserQueryListComponent', () => {
  let component: UserQueryListComponent;
  let fixture: ComponentFixture<UserQueryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserQueryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserQueryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
