import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTeacherDetailsEditionComponent } from './card-teacher-details-edition.component';

describe('CardTeacherDetailsEditionComponent', () => {
  let component: CardTeacherDetailsEditionComponent;
  let fixture: ComponentFixture<CardTeacherDetailsEditionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardTeacherDetailsEditionComponent]
    });
    fixture = TestBed.createComponent(CardTeacherDetailsEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
