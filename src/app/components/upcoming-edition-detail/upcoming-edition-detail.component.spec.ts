import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingEditionDetailComponent } from './upcoming-edition-detail.component';

describe('UpcomingEditionDetailComponent', () => {
  let component: UpcomingEditionDetailComponent;
  let fixture: ComponentFixture<UpcomingEditionDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpcomingEditionDetailComponent]
    });
    fixture = TestBed.createComponent(UpcomingEditionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
