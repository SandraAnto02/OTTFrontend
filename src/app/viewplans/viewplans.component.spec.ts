import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewplansComponent } from './viewplans.component';

describe('ViewplansComponent', () => {
  let component: ViewplansComponent;
  let fixture: ComponentFixture<ViewplansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewplansComponent]
    });
    fixture = TestBed.createComponent(ViewplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
