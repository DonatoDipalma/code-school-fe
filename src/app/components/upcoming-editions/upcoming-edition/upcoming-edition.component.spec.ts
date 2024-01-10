import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingEditionComponent } from './upcoming-edition.component';

describe('UpcomingEditionComponent', () => {
  let component: UpcomingEditionComponent;
  let fixture: ComponentFixture<UpcomingEditionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpcomingEditionComponent]
    });
    fixture = TestBed.createComponent(UpcomingEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
