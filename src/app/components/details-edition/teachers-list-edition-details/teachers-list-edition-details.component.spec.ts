import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersListEditionDetailsComponent } from './teachers-list-edition-details.component';

describe('TeachersListEditionDetailsComponent', () => {
  let component: TeachersListEditionDetailsComponent;
  let fixture: ComponentFixture<TeachersListEditionDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeachersListEditionDetailsComponent]
    });
    fixture = TestBed.createComponent(TeachersListEditionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
