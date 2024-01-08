import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessAddCourseFormComponent } from './success-add-course-form.component';

describe('SuccessAddCourseFormComponent', () => {
  let component: SuccessAddCourseFormComponent;
  let fixture: ComponentFixture<SuccessAddCourseFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessAddCourseFormComponent]
    });
    fixture = TestBed.createComponent(SuccessAddCourseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
