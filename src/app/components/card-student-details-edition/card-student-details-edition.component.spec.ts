import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStudentDetailsEditionComponent } from './card-student-details-edition.component';

describe('CardStudentDetailsEditionComponent', () => {
  let component: CardStudentDetailsEditionComponent;
  let fixture: ComponentFixture<CardStudentDetailsEditionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardStudentDetailsEditionComponent]
    });
    fixture = TestBed.createComponent(CardStudentDetailsEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
