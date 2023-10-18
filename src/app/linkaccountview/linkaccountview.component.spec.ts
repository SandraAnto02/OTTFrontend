import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkaccountviewComponent } from './linkaccountview.component';

describe('LinkaccountviewComponent', () => {
  let component: LinkaccountviewComponent;
  let fixture: ComponentFixture<LinkaccountviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkaccountviewComponent]
    });
    fixture = TestBed.createComponent(LinkaccountviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
