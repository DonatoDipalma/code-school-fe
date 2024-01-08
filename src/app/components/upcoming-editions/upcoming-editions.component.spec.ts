import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingEditionsComponent } from './upcoming-editions.component';

describe('UpcomingEditionsComponent', () => {
  let component: UpcomingEditionsComponent;
  let fixture: ComponentFixture<UpcomingEditionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpcomingEditionsComponent]
    });
    fixture = TestBed.createComponent(UpcomingEditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
