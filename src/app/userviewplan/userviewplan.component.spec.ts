import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserviewplanComponent } from './userviewplan.component';

describe('UserviewplanComponent', () => {
  let component: UserviewplanComponent;
  let fixture: ComponentFixture<UserviewplanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserviewplanComponent]
    });
    fixture = TestBed.createComponent(UserviewplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
