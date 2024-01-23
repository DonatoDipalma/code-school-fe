import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolledStudentsForEditionComponent } from './enrolled-students-for-edition.component';

describe('EnrolledStudentsForEditionComponent', () => {
  let component: EnrolledStudentsForEditionComponent;
  let fixture: ComponentFixture<EnrolledStudentsForEditionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrolledStudentsForEditionComponent]
    });
    fixture = TestBed.createComponent(EnrolledStudentsForEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
