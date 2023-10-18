import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcsvComponent } from './viewcsv.component';

describe('ViewcsvComponent', () => {
  let component: ViewcsvComponent;
  let fixture: ComponentFixture<ViewcsvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewcsvComponent]
    });
    fixture = TestBed.createComponent(ViewcsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
